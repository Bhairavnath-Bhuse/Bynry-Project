import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Context/ProfileContext'; // Import the ProfileContext
import SearchComponent from './Searchname';

function ProfileList() {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
    contact: '',
    interests: '',
    job: '',
  });
  const [editingProfileId, setEditingProfileId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSummaryClick = (id) => {
    navigate(`/showmap/${id}`);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProfile({ ...newProfile, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/profile/${id}`);
  };


  const handleEdit = (profile) => {
    setEditingProfileId(profile.id);
    setNewProfile(profile);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (editingProfileId !== null) {
      const updatedProfiles = profiles.map((profile) =>
        profile.id === editingProfileId ? { ...profile, ...newProfile } : profile
      );
      setProfiles(updatedProfiles);

      setEditingProfileId(null);
      setNewProfile({ name: '', photo: '', description: '', address: '', contact: '', interests: '', job: '' });
    }
  };

  const handleCancelEdit = () => {
    setEditingProfileId(null);
    setNewProfile({ name: '', photo: '', description: '', address: '', contact: '', interests: '', job: '' });
  };

  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  // Filtering profiles based on searchTerm (name or address)
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Component */}
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Profile List Display */}
      <div className="flex flex-col space-y-6 p-4">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="flex flex-col w-11/12 mx-auto sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src={profile.photo}
              alt={`${profile.name}'s profile`}
              className="w-full sm:w-1/3 h-60 object-contain rounded-t-lg sm:rounded-l-lg"
            />
            <div className="flex flex-col p-4 sm:w-2/3">
              <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
              <p className="text-gray-600 mb-4">{profile.description}</p>


              <button
                className="bg-blue-500 hover:bg-blue-700 w-36 text-white font-bold py-2 px-4 rounded mt-1"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent div click
                  handleViewDetails(profile.id);
                }}
                >
                  View Details
              </button>


              <div className="flex justify-between mt-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(profile)}
                >
                  Edit
                </button>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => handleSummaryClick(profile.id)}
                >
                  Summary
                </button>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(profile.id)}
                >
                  Delete
                </button>
              </div>
              {/* Edit Profile Form */}
              {editingProfileId === profile.id && (
                <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md mt-4 border border-gray-200">
                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h3>
                  <input
                    type="text"
                    name="name"
                    value={newProfile.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="p-2 border rounded-md border-gray-300 w-full mb-4"
                  />
                  <input
                    type="file"
                    name="photo"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="mb-4"
                  />
                  <br />
                  <label>
                    Description:
                    <textarea
                      type="text"
                      name="description"
                      value={newProfile.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      required
                      className="p-2 border rounded-md border-gray-300 w-full mb-4"
                    />
                  </label>
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={newProfile.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      required
                      className="p-2 border rounded-md border-gray-300 w-full mb-6"
                    />
                  </label>
                  <label>
                    Contact:
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Information"
                      value={newProfile.contact}
                      onChange={handleInputChange}
                      className="p-2 border rounded-md border-gray-300 w-full mb-6"
                    />
                  </label>
                  <label>
                    Interests:
                    <input
                      type="text"
                      name="interests"
                      placeholder="Interests (comma-separated)"
                      value={newProfile.interests}
                      onChange={handleInputChange}
                      className="p-2 border rounded-md border-gray-300 w-full mb-6"
                    />
                  </label>
                  <label>
                    Job:
                    <input
                      type="text"
                      name="job"
                      placeholder="Job"
                      value={newProfile.job}
                      onChange={handleInputChange}
                      className="p-2 border rounded-md border-gray-300 w-full mb-6"
                    />
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
                    >
                      Update Profile
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
                    >
                      Cancel Edit
                    </button>
                  </div>                 
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
