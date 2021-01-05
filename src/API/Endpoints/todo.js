import Axios from "axios";

const dburl = "https://task-list-6a646.firebaseio.com/.json";
const todosAPI = {
    fetchTodos: async () => {
        const response = await Axios.get(dburl);
        // console.log("response from fetch", response);
        if (!response.data) {
            return {
                ...response, 
                data: []
            }
        } else {
            return {
                ...response, 
                data: response.data
            }   
        }     
    },
    saveTodos: async (todos) => {
        const response = await Axios.put(dburl, todos);
        if (!response.data) {
            return {
                ...response, 
                data: []
            }
        }
        console.log({response});
        return response
    }
}

export default todosAPI
