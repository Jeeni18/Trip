// import React, { useState } from "react";

// function QueryForm({ handleSubmit }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     preferredDestinations: "",
//     budget: "Medium",
//     interests: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheck = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       interests: checked
//         ? [...prev.interests, value]
//         : prev.interests.filter((interest) => interest !== value),
//     }));
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSubmit(formData);
//       }}
//     >
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <label>
//         Preferred Destinations:
//         <input type="text" name="preferredDestinations" value={formData.preferredDestinations} onChange={handleChange} />
//       </label>
//       <label>
//         Budget:
//         <select name="budget" value={formData.budget} onChange={handleChange}>
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>
//       </label>
//       <fieldset>
//         <legend>Interests:</legend>
//         <label>
//           <input type="checkbox" value="Adventure" onChange={handleCheck} /> Adventure
//         </label>
//         <label>
//           <input type="checkbox" value="Culture" onChange={handleCheck} /> Culture
//         </label>
//         <label>
//           <input type="checkbox" value="Nature" onChange={handleCheck} /> Nature
//         </label>
//       </fieldset>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default QueryForm;

import React, { useState, useEffect } from 'react';
import queriesData from '../data/Queries.json';

const QueriesPage = () => {
  const [data, setData] = useState(queriesData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validate user details
    if (!data.userDetails.name) newErrors.name = 'Name is required';
    if (!data.userDetails.email) newErrors.email = 'Email is required';
    if (!data.userDetails.age) newErrors.age = 'Age is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      // Reset form or show success message
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event, category, field) => {
    const updatedData = { ...data };
    
    if (event.target.type === 'checkbox') {
      const value = event.target.value;
      const currentValues = Array.isArray(updatedData[category][field]) 
        ? updatedData[category][field] 
        : [];
      
      if (event.target.checked) {
        updatedData[category][field] = [...currentValues, value];
      } else {
        updatedData[category][field] = currentValues.filter(item => item !== value);
      }
    } else {
      updatedData[category][field] = event.target.value;
    }
    
    setData(updatedData);
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const renderOptions = (options, category, field) => {
    const currentValue = data[category][field];

    return (
      <div className="checkbox-group">
        {options.map((option, index) => (
          <div key={index} className="tooltip" data-tooltip={`Select ${option}`}>
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
        ))}
      </div>
    );
  };

  return (
    <div className="queries-page">
      <h1>Your Travel Preferences</h1>
      <form onSubmit={handleSubmit}>
        {/* User Details Section */}
        <div className="form-section">
          <h2>User Details</h2>
          <input
            type="text"
            value={data.userDetails.name}
            onChange={(e) => handleInputChange(e, 'userDetails', 'name')}
            placeholder="Name"
            className={errors.name ? 'error-field' : ''}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
          
          <input
            type="email"
            value={data.userDetails.email}
            onChange={(e) => handleInputChange(e, 'userDetails', 'email')}
            placeholder="Email"
            className={errors.email ? 'error-field' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
          
          <input
            type="number"
            value={data.userDetails.age}
            onChange={(e) => handleInputChange(e, 'userDetails', 'age')}
            placeholder="Age"
            className={errors.age ? 'error-field' : ''}
          />
          {errors.age && <div className="error-message">{errors.age}</div>}
        </div>

        {/* Travel Preferences Section */}
        <div className="form-section">
          <h2>Travel Preferences</h2>
          <label>Preferred Travel Type</label>
          <select
            value={data.travelPreferences.travelType.selected}
            onChange={(e) => handleInputChange(e, 'travelPreferences', 'travelType')}
          >
            {data.travelPreferences.travelType.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>

          {/* Similar updates for other select fields */}
        </div>

        {/* Health Details Section */}
        <div className="form-section">
          <h2>Health Details</h2>
          <label>Dietary Preferences</label>
          {renderOptions(data.healthDetails.dietaryPreferences.options, 'healthDetails', 'dietaryPreferences')}
        </div>

        {/* Destination Preferences Section */}
        <div className="form-section">
          <h2>Destination Preferences</h2>
          {renderOptions(data.destinationPreferences.regions.options, 'destinationPreferences', 'regions')}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={loading ? 'loading' : ''}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        
        {errors.submit && <div className="error-message">{errors.submit}</div>}
        {submitSuccess && (
          <div className="success-message">Form submitted successfully!</div>
        )}
      </form>
    </div>
  );
};

export default QueriesPage;