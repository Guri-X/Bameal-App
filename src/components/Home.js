import { useState } from "react";
import { MealDetails } from "./MealDetails";
import MealDB from "../api/MealDB";

export function Home() {
    const [showMeal, setShowMeal] = useState(false)
    const [meal, setMeal] = useState({})

    const getMeal = () => {
        MealDB().fetchRandomMeal().then((data) => {
            const meals = data.data.meals
    
            if (meals.length > 0) {
                setMeal(meals[0])
                setShowMeal(true)
            }
        })
        .catch((err) => {
            console.error("Couldn't fetch meal data!")
            console.error(err)
        })
    }

    return (
        <div>
            {
                showMeal ? 
                    <MealDetails
                        meal={meal}
                        setMeal={setMeal}
                        setShowMeal={setShowMeal}
                    /> 
                : 
                <div className="mt-5">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div>
                                <img src="/assets/patrick.gif" alt="patrick-starfish" />
                            </div>

                            <div className="mt-10">
                                <button 
                                    className="btn btn-primary"
                                    onClick={getMeal}
                                >
                                    Bhookh Lagi Hai ?!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}