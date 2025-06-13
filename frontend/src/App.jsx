import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';

// 🔍 Fetch all recipes with error handling
const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe');
    return res.data;
  } catch (err) {
    console.error("❌ getAllRecipes Axios Error:", err.message);
    console.error("🔍 Full Axios Error:", err);
    return [];
  }
};

// 🔍 Filter recipes created by the logged-in user
const getMyRecipes = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const allRecipes = await getAllRecipes();
  return allRecipes.filter(item => item.createdBy === user?._id);
};

// 🔍 Get favorite recipes from local storage
const getFavRecipes = () => {
  return JSON.parse(localStorage.getItem("fav") || '[]');
};

// 🔍 Fetch a single recipe and its creator's email
const getRecipe = async ({ params }) => {
  try {
    const recipeRes = await axios.get(`http://localhost:5000/recipe/${params.id}`);
    let recipe = recipeRes.data;

    const userRes = await axios.get(`http://localhost:5000/user/${recipe.createdBy}`);
    recipe = { ...recipe, email: userRes.data.email };

    return recipe;
  } catch (err) {
    console.error("❌ getRecipe Axios Error:", err.message);
    console.error("🔍 Full Axios Error:", err);
    return {};
  }
};

// 🧭 Define all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home />, loader: getAllRecipes },
      { path: '/myRecipe', element: <Home />, loader: getMyRecipes },
      { path: '/favRecipe', element: <Home />, loader: getFavRecipes },
      { path: '/addRecipe', element: <AddFoodRecipe /> },
      { path: '/editRecipe/:id', element: <EditRecipe /> },
      { path: '/recipe/:id', element: <RecipeDetails />, loader: getRecipe },
    ]
  }
]);

// 🚀 Main App
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
