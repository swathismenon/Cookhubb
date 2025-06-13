import React from 'react'
import profileImg from '../assets/profile.png'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'

export default function RecipeDetails() {
    const recipe = useLoaderData()
    const navigate = useNavigate()

    const handleDelete = async () => {
        await axios.delete(`http://localhost:5000/recipe/${recipe._id}`)
        navigate("/myRecipe")
    }

    return (
        <div className='outer-container'>
            {/* Edit & Delete Icons */}
            <div className="top-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1rem' }}>
                <FaEdit
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                    onClick={() => navigate(`/editRecipe/${recipe._id}`)}
                    title="Edit Recipe"
                />
                <MdDelete
                    style={{ cursor: 'pointer', color: '#ef3535', fontSize: '22px' }}
                    onClick={handleDelete}
                    title="Delete Recipe"
                />
            </div>

            <div className='profile'>
                <img src={profileImg} width="50px" height="50px" alt="Profile" />
                <h5>{recipe.email}</h5>
            </div>

            <h3 className='title'>{recipe.title}</h3>
            <img src={`http://localhost:5000/images/${recipe.coverImage}`} width="220px" height="200px" alt="Recipe" />

            <div className='recipe-details'>
                <div className='ingredients'>
                    <h4>Ingredients</h4>
                    <ul>{recipe.ingredients.map((item, index) => (<li key={index}>{item}</li>))}</ul>
                </div>
                <div className='instructions'>
                    <h4>Instructions</h4>
                    <span>{recipe.instructions}</span>
                </div>
            </div>
        </div>
    )
}
