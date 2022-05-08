import React from 'react';
import MainNav from '../components/MainNav';

const About = () => {
  return (
    <>
      <MainNav />
      <section className="section about-section">
        <h1 className="section-title">About us</h1>
        <p>
          A search website to find your favourite cocktail's information. This
          website was created using theCocktailDb API to dynamically get data to
          get search results for cocktail information
        </p>
      </section>
    </>
  );
};

export default About;
