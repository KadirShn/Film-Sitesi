import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjNiODdiOGMxMjljYzVjNjMxNTQ1ZmJiYjY0MDA5MCIsInN1YiI6IjYzOWIwMjk5M2Q0M2UwMDA3Y2Q1YzUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bkyWyja0yQArRDP-objtXoqWU63EbYDFZraZDfIu3VQ";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})