import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import main from "../Images/main.jpg";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;