import React, { useState } from 'react';
import foodRecipe from '../assets/foodRecipe.png';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const addRecipe = () => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/addRecipe");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <main className="homepage">
      <section className='home'>
        <div className='left'>
          <h1>CookHub</h1>
          <h5>
            is a place where you can easily add, edit, and save your favorite recipes all in one spot.
            Keep track of the recipes you love and explore new ones whenever you like!
          </h5>
          <button onClick={addRecipe} aria-label="Share your recipe">Share your recipe</button>
        </div>
        <div className='right'>
          <img
            src={foodRecipe}
            width="320px"
            height="300px"
            alt="Food Recipe"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}

      <section className='recipe-section'>
        <RecipeItems />
      </section>
    </main>
  );
}
