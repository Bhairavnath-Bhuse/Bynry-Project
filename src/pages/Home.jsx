import React, { useRef } from "react";
import ProfileList from "../service/ProfileList";
import ProfileForm from "../service/ProfileManagement";

function Home() {
    
    const addMemberButtonRef = useRef(null);



    const scrollToForm = () => {
        const formSection = document.getElementById("profileFormSection");
        formSection?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div className="overflow-x-hidden">
            
            <button 
                className="bg-yellow-300 hover:bg-yellow-500 text-white mx-2 font-bold py-2 px-4 rounded"
                onClick={scrollToForm}
                ref={addMemberButtonRef}
            >
                Add Members
            </button>

            <ProfileList/>

            {/* Assign an id to the ProfileForm section for smooth scrolling */}
            <div id="profileFormSection">
                <ProfileForm/>
                
            </div>
        </div>
    );
}

export default Home;
