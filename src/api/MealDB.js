import axios from "axios";

const MealDB = (self) => ({
    
    fetchRandomMeal() {
        return axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    }

})

export default MealDB