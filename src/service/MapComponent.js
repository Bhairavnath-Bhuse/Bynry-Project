import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapView from './MapView';
import { ProfileContext } from '../Context/ProfileContext';

const MapPage = () => {
  const { id } = useParams();
  const { profiles } = useContext(ProfileContext);
  const profileId = parseInt(id);
  const profile = profiles.find(p => p.id === profileId);
  const navigate = useNavigate();

  if (!profile) {
    return <div>Profile not found!</div>;
  }

  const { latitude, longitude, address } = profile || {};

  return (
    <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 mt-6 md:mt-10">
      
      <button
      className=" bg-gray-500  shadow hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4 md:mt-6 block mx-auto transition duration-300 ease-in-out"
      onClick={() => navigate(-1)}
      >
        Back to Profiles
      </button>
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-blue-600 mb-4 md:mb-6 lg:mb-8">
        {profile.name}'s Location
      </h2>

      {
        latitude && longitude ? (
          <MapView coordinates={{ latitude, longitude, address }} />
        ) : (
          <div className="text-red-500 text-center mt-4">Location data is missing.</div>
        )
      }
  
  </div>
  
  

  );
};

export default MapPage;
