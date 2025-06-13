import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients")
            ? e.target.value.split(",")
            : (e.target.name === "file")
            ? e.target.files[0]
            : e.target.value

        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/recipe", recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
        navigate("/")
    }

    return (
        <div className="add-form-wrapper">
            <form className="form" onSubmit={onHandleSubmit}>
                <h2 className="form-title">Add a New Recipe</h2>

                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" className="input" name="title" onChange={onHandleChange} required />
                </div>

                <div className="form-control">
                    <label htmlFor="time">Time</label>
                    <input id="time" type="text" className="input" name="time" onChange={onHandleChange} required />
                </div>

                <div className="form-control">
                    <label htmlFor="ingredients">Ingredients <small>(comma-separated)</small></label>
                    <textarea id="ingredients" className="input-textarea" name="ingredients" rows="4" onChange={onHandleChange} required />
                </div>

                <div className="form-control">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" className="input-textarea" name="instructions" rows="5" onChange={onHandleChange} required />
                </div>

                <div className="form-control">
                    <label htmlFor="file">Recipe Image</label>
                    <input id="file" type="file" className="input" name="file" onChange={onHandleChange} required />
                </div>

                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}
