//correct wala
import React, { useState } from 'react';
import './UserInfoForm.css';
import { useNavigate } from 'react-router-dom'; 

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();   

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);

    // Add logic for handling the submitted data (e.g., API call)
    alert('Your information has been submitted successfully!');
    navigate('/queries');   
  };

  return (
    <div className="user-info-form">
      <h2>Enter Your Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="int"
          name="age"
          placeholder="Your age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoForm;
