import Axios from "axios";

const dburl = "https://task-list-6a646.firebaseio.com/.json";

export const fetchTodos = async () => {
    console.log("fetch fired via api.js");
    try {
        const response = await Axios.get(dburl);
        const newTodos = response.data
        console.log(newTodos);
        if (newTodos === null) {
            return []
        }
        return newTodos
    } catch (error) {}
}

export const saveTodos = (todos) => {
    console.log("save todo fired");
    Axios.put(dburl, todos)
}