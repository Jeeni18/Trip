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

  const handleInputChange = (event, category, field) => {
    const updatedData = { ...data };
    updatedData[category][field] = event.target.value;
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
          type="email"
          value={data.userDetails.email}
          onChange={(e) => handleInputChange(e, 'userDetails', 'email')}
          placeholder="Email"
        />
        <input
          type="number"
          value={data.userDetails.age}
          onChange={(e) => handleInputChange(e, 'userDetails', 'age')}
          placeholder="Age"
        />
        
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

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QueriesPage;
