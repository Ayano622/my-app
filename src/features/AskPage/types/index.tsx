import { SetStateAction } from "react"

export type ResultRecipeType = {
    id: number,
    image: string,
    imageType: string,
    title: string,
}

export const initialResultRecipe = {
    id: 1,
    image: 'https://img.spoonacular.com/recipes/637016-312x231.jpg',
    imageType: 'aaa',
    title: 'aaa'
}

export type AskPageProps = {
    setInstructions: React.Dispatch<SetStateAction<string>>
}