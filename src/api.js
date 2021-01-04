import Axios from "axios";

const dburl = "https://task-list-6a646.firebaseio.com/.json";

export const fetchTodos = async () => {
    try {
        const response = await Axios.get(dburl);
        const newTodos = response.data
        if (newTodos === null) {
            return []
        }
        return newTodos
    } catch (error) {
        console.log(error);
    }
}

export const saveTodos = (todos) => {
    try {
        Axios.put(dburl, todos)
    } catch (error) {
        console.log(error);
    }
}