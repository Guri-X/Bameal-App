import { useEffect, useState } from "react";

function IngredientsList({ ingredients }) {
    return (
        <ul className="list-disc">
            {
                ingredients.map((ing) => (
                    <li>{ing}</li>
                ))
            }
        </ul>
    )
}

export function MealDetails({ meal, setShowMeal }) {
    const [ingredients, setIngredients] = useState([])
    const ytEmbedUrl = meal.strYoutube.replace("watch", "embed").replace("?v=", "/")

    useEffect(() => {
        var iIngKeys = []
        var iMeaKeys = []

        const ingVals = []
        const meaVals = []
        const iVals = []
        
        for (var i = 1; i <= 20; i++) {
            iIngKeys.push(`strIngredient${i}`)
            iMeaKeys.push(`strMeasure${i}`)
        }
    
        for (let k in meal) {
            if (iIngKeys.includes(k)) {
                const v = meal[k]
    
                if (v !== "") {
                    ingVals.push(meal[k])
                }
            }

            if (iMeaKeys.includes(k)) {
                const v = meal[k]
    
                if (v !== "") {
                    meaVals.push(meal[k])
                }
            }
        }

        ingVals.forEach((ing, idx) => {
            iVals.push(`${ing} (${meaVals[idx]})`)
        })
    
        setIngredients(iVals)
    }, [meal])

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-left px-96">
                <div className="divider"></div>

                <div className="p-10 border-4 rounded-2xl border-green-700">
                    <div className="ba-heading flex justify-between items-center">
                        <div>
                            <span className="text-4xl font-bold">Meal: {meal.strMeal}</span>
                        </div>

                        <div>
                            <button 
                                className="btn btn-accent"
                                onClick={() => {setShowMeal(false)}}
                            > 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg> Back
                            </button>
                        </div>
                    </div>

                    <div className="ba-image mt-10">
                        <img src={meal.strMealThumb} alt="Meal Thumb" width={400} height={400} />
                    </div>

                    <div className="divider"></div>

                    <div className="ba-basic-details">
                        <span><span className="text-lg font-medium">Category:</span> {meal.strCategory}</span><br/>
                        <span><span className="text-lg font-medium">Dish:</span> {meal.strArea}</span>
                    </div>

                    <div className="ba-receipe mt-10">
                        <a className="text-2xl font-semibold text-sky-700" href={meal.strSource}>Receipe</a>

                        <div className="divider"></div>

                        <span>
                            {meal.strInstructions}
                        </span>
                    </div>

                    {
                        ingredients ?
                        <div className="ba-receipe mt-10">
                            <span className="text-2xl font-semibold">Ingredients</span>

                            <div className="divider"></div>

                            <IngredientsList 
                                ingredients={ingredients}
                            />
                        </div>
                        : ""
                    }

                    <div className="ba-receipe mt-10">
                        <span className="text-2xl font-semibold">Tutorial</span>

                        <div className="divider"></div>

                        <iframe title="tutorial" width="560" height="315" src={ytEmbedUrl} allowFullScreen></iframe>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>
        </div>
    )
}