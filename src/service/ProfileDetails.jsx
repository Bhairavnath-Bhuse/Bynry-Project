import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Context/ProfileContext';

function ProfileDetails() {
    const { id } = useParams();
    const { profiles } = useContext(ProfileContext);
    const profileId = parseInt(id);
    const profile = profiles.find(p => p.id === profileId);
    const navigate = useNavigate();

  if (!profile) {
    return <p className="text-center text-red-500">Profile not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
        onClick={() => navigate('/')}
      >
        Back to Profiles
      </button>

      <div className="bg-white shadow-lg w-11/12 mx-auto rounded-lg overflow-hidden">
        <img
          src={profile.photo}
          alt={`${profile.name}'s profile`}
          className="w-auto h-80 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{profile.name}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Description:</span> {profile.description}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Address:</span> {profile.address}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Contact:</span> {profile.contact}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Interests:</span> {profile.interests}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Job:</span> {profile.job}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
