import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:5000/recipe/${id}`)
                .then(response => {
                    let res = response.data
                    setRecipeData({
                        title: res.title,
                        ingredients: res.ingredients.join(","),
                        instructions: res.instructions,
                        time: res.time
                    })
                })
        }
        getData()
    }, [id])

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
        await axios.put(`http://localhost:5000/recipe/${id}`, recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
        navigate("/myRecipe")
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={onHandleSubmit}>
                <h2 className="form-title">Edit Recipe</h2>

                <div className='form-control'>
                    <label htmlFor="edit-title">Title</label>
                    <input
                        id="edit-title"
                        type="text"
                        className='input'
                        name="title"
                        onChange={onHandleChange}
                        value={recipeData.title || ""}
                        required
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor="edit-time">Time</label>
                    <input
                        id="edit-time"
                        type="text"
                        className='input'
                        name="time"
                        onChange={onHandleChange}
                        value={recipeData.time || ""}
                        required
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor="edit-ingredients">Ingredients <small>(comma-separated)</small></label>
                    <textarea
                        id="edit-ingredients"
                        className='input-textarea'
                        name="ingredients"
                        rows="4"
                        onChange={onHandleChange}
                        value={recipeData.ingredients || ""}
                        required
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor="edit-instructions">Instructions</label>
                    <textarea
                        id="edit-instructions"
                        className='input-textarea'
                        name="instructions"
                        rows="5"
                        onChange={onHandleChange}
                        value={recipeData.instructions || ""}
                        required
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor="edit-file">Recipe Image</label>
                    <input
                        id="edit-file"
                        type="file"
                        className='input'
                        name="file"
                        onChange={onHandleChange}
                    />
                </div>

                <button type="submit">Edit Recipe</button>
            </form>
        </div>
    )
}
