import React, { useState, useEffect, useContext, useRef } from 'react';
import { ProfileContext } from '../Context/ProfileContext';

function ProfileForm() {
  const { addProfile } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
    contact: '',
    interests: '',
    job: '',
    latitude: null,
    longitude: null,
  });
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile);
    
  };

  return (
        <div>


      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg">

        <div className="bg-yellow-300 text-black font-bold py-2 px-4 rounded text-center mb-4">
          Add Member
        </div>


        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
          required
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Image URL"
          name="photo"
          value={newProfile.photo}
          onChange={handleInputChange}
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newProfile.description}
          onChange={handleInputChange}
          required
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={newProfile.address}
          onChange={handleInputChange}
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Contact"
          name="contact"
          value={newProfile.contact}
          onChange={handleInputChange}
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Interest"
          name="interests"
          value={newProfile.interests}
          onChange={handleInputChange}
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Job"
          name="job"
          value={newProfile.job}
          onChange={handleInputChange}
          className="w-full sm:w-80 md:w-96 p-3 m-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-3">
          <input
            type="number"
            placeholder="Latitude"
            name="latitude"
            value={newProfile.latitude}
            onChange={handleInputChange}
            required
            className="w-full sm:w-80 md:w-96 p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Longitude"
            name="longitude"
            value={newProfile.longitude}
            onChange={handleInputChange}
            required
            className="w-full sm:w-80 md:w-96 p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4"
        >
          Submit
        </button>

      
      </form>
    </div>
  );
}

export default ProfileForm;
