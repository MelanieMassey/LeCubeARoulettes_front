import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8081/tasks'
})

// const apiURL = "http://localhost:8081/"

