import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

const defaultProfiles = [
  {
    id: 1,
    name: "Digvijay Kalokhe",
    photo: "https://img.freepik.com/premium-vector/cute-cartoon-boy-face-vector-design-with-white-background_911078-1747.jpg?w=2000", // Placeholder image URL
    description: "A person with a keen eye for detail, focused on producing clean, efficient code. They are methodical in their approach to problem-solving and thrive on accuracy and precision in every task.",
    address: "Pune",
    contact: "digvijay@gmail.com",
    latitude: 18.5204,
    longitude: 73.85264946677131,
    job:"Software Developer",
    interests: ["Web Development", "Open Source", "AI"],
  },
  {
    id: 2,
    name: "Aditya Parab",
    photo: "https://wallpapercave.com/wp/wp5869843.jpg",
    description: "Full-stack Developer with over 3 years of experience in building and deploying web applications with JavaScript, Node.js, and MongoDB. Passionate about writing clean code and optimizing application performance.",
    address: "Pimpri",
    contact: "parab@example.com",
    job:"Graphic Designer",
    latitude:18.6278, longitude:73.8022,
    interests: ["Graphic Design", "Photography", "Travel"],
  },
  {
    id: 3,
    name: "Rutik Utekar",
    photo: "https://clipartmag.com/images/cartoon-boy-face-clipart-30.png",
    description: "Experienced Software Engineer with 6+ years of expertise in web development using Python, Django, and React. Dedicated to delivering clean, maintainable code and creating seamless applications for users.",
    address: "Nashik",
    contact: "rutik@gmail.com",
    job:"Manager",
    latitude:19.9975,longitude:  73.7898,
    interests: ["Manager", "Agile", "Team Building"],
  },

  {
    id: 5,
    name: "Kartik Dixit",
    photo: "https://wallpapercave.com/wp/uVcJT4K.jpg",
    description: "Senior Software Developer with 7 years of experience specializing in front-end development with React and back-end services using Node.js. Committed to building robust, user-centered applications that meet business requirements.",
    address: "Mumbai",
    contact: "kartik@gmail.com",
    job:"Software Developer",
    latitude:19.0760, longitude:72.8777,
    interests: ["Digital Marketing", "SEO", "Content Creation"],
  },
  {
    id: 6,
    name: "Nikhil Khose",
    photo: "https://wallpaperaccess.com/full/2580788.jpg",
    description: "Software Engineer with 5 years of experience in building dynamic and responsive web applications using Angular, TypeScript, and Node.js. Focused on continuous learning and delivering solutions that drive business growth.",
    address: "Thane",
    contact: "mkhose@gmail.com",
    job:"Full Stack Develope",
    latitude:19.2183, longitude:72.9785,
    interests: ["Full Stack Development", "Cloud Computing", "APIs"],
    
  }
];

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(defaultProfiles);
  const [center, setCenter] = useState({ lat: 18.627631989986963, lng: 73.81697335021828 });
  const [article,setarticle]=useState();
  const addProfile = (profileData) => {
    const newId = profiles.length > 0 ? Math.max(...profiles.map(profile => profile.id)) + 1 : 1;
    const newProfile = { id: newId, ...profileData };
    setProfiles([...profiles, newProfile]);
  };

  const contextValue = {
    profiles,
    setProfiles,
    addProfile,
    center, setCenter,
    article,setarticle
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};