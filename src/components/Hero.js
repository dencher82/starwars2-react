import React from 'react';
import styles from '../css_modules/hero.module.css';
import main from "../Images/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-25 row mr-2">
            <img className={`${styles.hero} col`} src={main} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;