from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, Optional, List
from travel_rag_bot import TravelRAGBot

app = FastAPI()

# Initialize RAG bot
DATASET_PATH = "tourism"  # Update with your dataset path
GROQ_API_KEY = ""  # Add your API key
bot = TravelRAGBot(DATASET_PATH, GROQ_API_KEY)
bot.load_knowledge_base()

class LanguagePreference(BaseModel):
    options: List[str]
    selected: str

class TravelType(BaseModel):
    options: List[str]
    selected: str

class Activities(BaseModel):
    options: List[str]
    selected: List[str]

class BudgetRange(BaseModel):
    min: float
    max: float

class Budget(BaseModel):
    currency: str
    range: BudgetRange

class TravelPreferences(BaseModel):
    travelType: TravelType
    activities: Activities
    preferredClimate: Dict[str, Any]
    duration: Dict[str, Any]
    budget: Budget

class HealthDetails(BaseModel):
    activityLevel: Dict[str, Any]
    dietaryPreferences: Dict[str, Any]
    allergies: List[str]

class DestinationPreferences(BaseModel):
    regions: Dict[str, Any]
    popularDestinations: Dict[str, Any]
    offbeatDestinations: List[str]

class TravelLogistics(BaseModel):
    transportPreferences: Dict[str, Any]
    accommodationType: Dict[str, Any]
    arrivalDate: str
    departureDate: str

class Personalization(BaseModel):
    travelGoals: Dict[str, Any]
    socialPreferences: Dict[str, Any]

class TravelQuery(BaseModel):
    userDetails: Dict[str, Any]
    travelPreferences: TravelPreferences
    healthDetails: HealthDetails
    destinationPreferences: DestinationPreferences
    travelLogistics: TravelLogistics
    personalization: Personalization

class ItineraryResponse(BaseModel):
    itinerary: str
    sources: List[Dict[str, Any]]

@app.post("/itinerary", response_model=ItineraryResponse)
async def generate_itinerary(query: TravelQuery):
    try:
        response = bot.get_itinerary(query.dict())
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)