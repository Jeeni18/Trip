// import React from 'react';
// import './QueriesPage.css';

// const QueriesPage = () => {
//   return (
//     <div className="queries-page">
//       <h2>Query Page</h2>
//       <p>Ask your queries here and get answers from our travel experts.</p>
//       <form>
//         <textarea placeholder="Ask your question..." rows="5" required></textarea>
//         <button type="submit">Submit Query</button>
//       </form>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import queriesData from '../data/Queries.json';
import './QueriesPage.css'

const QueriesPage = () => {
  const [data, setData] = useState(queriesData);

  useEffect(() => {
    // You can set up any side effects related to data here
  }, []);

  // const handleInputChange = (event, category, field) => {
  //   const updatedData = { ...data };
  //   updatedData[category][field] = event.target.value;
  //   setData(updatedData);
  // };
  const handleInputChange = (event, category, field) => {
    const value = parseInt(event.target.value, 10); // Ensure numeric value for the slider
    const updatedData = { ...data };
  
    if (field === 'budget') {
      updatedData[category][field].selected = value; // Update the `selected` value for the budget
    } else {
      updatedData[category][field] = event.target.value; // Handle other fields normally
    }
    updatedData[category][field] = event.target.value;
    updatedData[category][field].selected = event.target.value;
    setData(updatedData);
  };

  const handleCheckboxChange = (event, category, field) => {
    const updatedData = { ...data };
    const value = event.target.value;
  
    if (event.target.checked) {
      // Add the value if checked
      updatedData[category][field].selected.push(value);
    } else {
      // Remove the value if unchecked
      updatedData[category][field].selected = updatedData[category][field].selected.filter(
        (item) => item !== value
      );
    }
  
    setData(updatedData);
  };
  
  

  const renderOptions = (options, category, field) => {
    const currentValue = data[category][field];

    return options.map((option, index) => (
      <div key={index}>
        <label>
          <input
            type="checkbox"
            checked={Array.isArray(currentValue) && currentValue.includes(option)}
            onChange={(e) => handleInputChange(e, category, field)}
            value={option}
          />
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div className="queries-page">
      <h1>Your Travel Preferences</h1>
      <form>
        {/* User Details Section */}
        <h2>User Details</h2>
        <input
          type="text"
          value={data.userDetails.name}
          onChange={(e) => handleInputChange(e, 'userDetails', 'name')}
          placeholder="Name"
        />

        <input
          type="number"
          value={data.userDetails.age}
          onChange={(e) => handleInputChange(e, 'userDetails', 'age')}
          placeholder="Age"
        />

        <input
          type="email"
          value={data.userDetails.email}
          onChange={(e) => handleInputChange(e, 'userDetails', 'email')}
          placeholder="Email"
        />
        
        <input
          type="number"
          value={data.userDetails.phone}
          onChange={(e) => handleInputChange(e, 'userDetails', 'phone')}
          placeholder="Phone"
        />

        <label>Preferred Language</label>
        <select
          value={data.userDetails.preferredLanguage.selected}
          onChange={(e) => handleInputChange(e, 'userDetails', 'preferredLanguage')}
        >
          {data.userDetails.preferredLanguage.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        
        {/* Travel Preferences Section */}
        <h2>Travel Preferences</h2>
        <label>Preferred Travel Type</label>
        <select
          value={data.travelPreferences.travelType.selected}
          onChange={(e) => handleInputChange(e, 'travelPreferences', 'travelType')}
        >
          {data.travelPreferences.travelType.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>activities</label>
        <select
          value={data.travelPreferences.activities.selected}
          onChange={(e) => handleInputChange(e, 'travelPreferences', 'activities')}
        >
          {data.travelPreferences.activities.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Preferred Climate</label>
        <select
          value={data.travelPreferences.preferredClimate.selected}
          onChange={(e) => handleInputChange(e, 'travelPreferences', 'preferredClimate')}
        >
          {data.travelPreferences.preferredClimate.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Travel Duration</label>
        <select
          value={data.travelPreferences.duration.selected}
          onChange={(e) => handleInputChange(e, 'travelPreferences', 'duration')}
        >
          {data.travelPreferences.duration.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* <label>Budget (USD)</label>
        <div>
        <input
          type="range"
          min={500}
          max={3000}
        value={data.travelPreferences.budget.selected}
        onChange={(e) => handleInputChange(e, 'travelPreferences', 'budget')}
        />
  <span>
    ${data.travelPreferences.budget.selected}
  </span>
</div> */}
      <label>Budget (USD)</label>
      <div>
       <input
        type="range"
        min={data.travelPreferences.budget.range.min}
        max={data.travelPreferences.budget.range.max}
        value={data.travelPreferences.budget.selected || data.travelPreferences.budget.range.min}
        onChange={(e) => handleInputChange(e, 'travelPreferences', 'budget')}
       />
      <span>
        ${data.travelPreferences.budget.selected || data.travelPreferences.budget.range.min}
      </span>
      </div>


        {/* Health Details Section */}
        <h2>Health Details</h2>
        <label>Activity Level</label>
        <select
          value={data.healthDetails.activityLevel.selected}
          onChange={(e) => handleInputChange(e, 'healthDetails', 'activityLevel')}
        >
          {data.healthDetails.activityLevel.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>


        <label>Dietary Preferences</label>
        {renderOptions(data.healthDetails.dietaryPreferences.options, 'healthDetails', 'dietaryPreferences')}
 
        <input
          type="text"
          value={data.healthDetails.allergies.name}
          onChange={(e) => handleInputChange(e, 'healthDetails', 'Allergies')}
          placeholder="Allergies(if any)"
        />

        {/* Destination Preferences Section */}
        <h2>Destination Preferences</h2>
        <label>Preferred Regions</label>
        {renderOptions(data.destinationPreferences.regions.options, 'destinationPreferences', 'regions')}

        <label>Popular Destinations</label>
        {renderOptions(data.destinationPreferences.popularDestinations.options, 'destinationPreferences', 'popularDestinations')}

        {/* Travel Logistics Section */}
        <h2>Travel Logistics</h2>
        <label>Transport Preferences</label>
        {renderOptions(data.travelLogistics.transportPreferences.options, 'travelLogistics', 'transportPreferences')}
        <label>Accommodation Type</label>
        <select
          value={data.travelLogistics.accommodationType.selected}
          onChange={(e) => handleInputChange(e, 'travelLogistics', 'accommodationType')}
        >
          {data.travelLogistics.accommodationType.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>Arrival Date</label>
        <input
         type="date"
         value={data.travelLogistics.arrivalDate}
         onChange={(e) => handleInputChange(e, 'travelLogistics', 'arrivalDate')}
        />

        <label>Departure Date</label>
        <input
         type="date"
         value={data.travelLogistics.departureDate}
         onChange={(e) => handleInputChange(e, 'travelLogistics', 'departureDate')}
         />

        {/* Personalization Section */}
        <h2>Personalization</h2>

        {/* Travel Goals */}
        <label>Travel Goals</label>
        <div>
         {data.personalization.travelGoals.options.map((goal, index) => (
          <div key={index}>
           <input
            type="checkbox"
            id={`travelGoal-${index}`}
            value={goal}
            checked={data.personalization.travelGoals.selected.includes(goal)}
            onChange={(e) => handleCheckboxChange(e, 'personalization', 'travelGoals')}
          />
          <label htmlFor={`travelGoal-${index}`}>{goal}</label>
        </div>
       ))}
    </div>

        {/* Social Preferences */}
        <label>Social Preferences</label>
        <select
         value={data.personalization.socialPreferences.selected}
         onChange={(e) => handleInputChange(e, 'personalization', 'socialPreferences')}
        >
         {data.personalization.socialPreferences.options.map((option, index) => (
          <option key={index} value={option}>
           {option}
          </option>
        ))}
     </select>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QueriesPage;
