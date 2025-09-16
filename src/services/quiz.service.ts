import axios from "axios";

const getAll = async () => {
    // Fetch quizzes from the backend API
    const response = await axios.get('http://localhost:1990/api/v1/quizzes');
    return response.data;
}

const quizService = {
    getAll
};

export default quizService;