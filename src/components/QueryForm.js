import React, { useState } from "react";

function QueryForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    preferredDestinations: "",
    budget: "Medium",
    interests: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Preferred Destinations:
        <input type="text" name="preferredDestinations" value={formData.preferredDestinations} onChange={handleChange} />
      </label>
      <label>
        Budget:
        <select name="budget" value={formData.budget} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <fieldset>
        <legend>Interests:</legend>
        <label>
          <input type="checkbox" value="Adventure" onChange={handleCheck} /> Adventure
        </label>
        <label>
          <input type="checkbox" value="Culture" onChange={handleCheck} /> Culture
        </label>
        <label>
          <input type="checkbox" value="Nature" onChange={handleCheck} /> Nature
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QueryForm;
