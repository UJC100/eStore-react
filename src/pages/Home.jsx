import React from 'react'
import menPhoto from '../assets/img/men-clothe.png'
import womenPhoto from '../assets/img/women-clothe.png'
import Hero from '../components/hero'
import CategoryCard from '../components/categoryCard'
import './styles.css'


function Home({categoryRef}) {
    
  return (
    <section>
      <Hero />
      <hr />
      <h2>Categories</h2>
      <div className="cat-cont" ref={categoryRef}>
              <CategoryCard imgSrc={menPhoto} title={"Men's"}
              
              />
        <CategoryCard imgSrc={womenPhoto} title={"Women's"} />
      </div>
    </section>
  );
}

export default Home