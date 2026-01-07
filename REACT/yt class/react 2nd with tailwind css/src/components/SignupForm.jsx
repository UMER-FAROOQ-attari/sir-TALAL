import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', password: '' });
  };

  const isButtonDisabled = !formData.name || !formData.email || !formData.password;

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Task 3: Sign Up 📝</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          value={formData.email} onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="password" name="password" placeholder="Password" 
          value={formData.password} onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          disabled={isButtonDisabled}
          className={`w-full p-3 rounded-lg font-bold text-white transition ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          Create Account
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <h4 className="text-green-800 font-bold">Welcome, {submittedData.name}!</h4>
          <p className="text-green-600 text-sm">Registered with: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default SignupForm;