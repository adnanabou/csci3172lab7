import React, { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    season: '',
  
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
  
      newErrors.firstName = 'First Name must contain alphabets only';
  
    }

    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
  
      newErrors.lastName = 'Last Name must contain alphabets only';
  
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    
      newErrors.email = 'Invalid email format';
    
    }

    if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    
      newErrors.password = 'Password must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter';
    
    }

    if (formData.season === '') {
    
      newErrors.season = 'Please select a season';
    
    }

    if (Object.keys(newErrors).length > 0) {
    
      setErrors(newErrors);
    
    } else {
      
      console.log('Form submitted:', formData);
    
    }
  
  };

  return (
    
    <div>
    
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
    
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
        {errors.firstName && <div>{errors.firstName}</div>}

        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
        {errors.lastName && <div>{errors.lastName}</div>}

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
        {errors.email && <div>{errors.email}</div>}

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>        
        {errors.password && <div>{errors.password}</div>}

        <select name="season" value={formData.season} onChange={handleChange}>
          <option value="">Select a season</option>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
        {errors.season && <div>{errors.season}</div>}

        <button type="submit">Submit</button>
      </form>

    </div>
  
  );

}

export default App;