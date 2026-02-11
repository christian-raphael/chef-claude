import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromChefClaude, getRecipeFromMistral } from '../ai'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {
                ingredients.length > 0 && 
                <IngredientsList ingredients={ingredients} toggleRecipeShown={getRecipe}/>
            }
            {
                recipe &&
                <ClaudeRecipe recipe={recipe} />
            }
        </main>
    )
}