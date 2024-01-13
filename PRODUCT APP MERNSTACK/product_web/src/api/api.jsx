import axios from "axios";

const NODE_ENV = import.meta.env.VITE_NODE_ENV || "development";
const uri ={
    development: "http://10.1.4.126:5000/",
    production: import.meta.env.VITE_API_URL,
};
const request = axios.create({
    baseURL:uri[NODE_ENV]
    // timeout:30000,
})


export const UserService = {
    createUser: async (params) => {
        try {
            const response = await request.post("/users/register", params);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    // getAllUser: async() =>{
    //     try {
    //         const response = await request.get("/user");
    //         return response.data;
    //     } catch (error) {
    //         console.log(error)
    //         throw error;
    //     }
    // },
    // updateUser: async (params) => {
    //     const { _id } = params
    //     try {
    //         const response = await request.patch(`/user/${id}`, params);
    //         return response.data
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // },
    login: async(params) => {
        try {
            const response = await request.post('/users/login', params);
            return response
        } catch (error) {
            console.log(error)
        }
    }
}
