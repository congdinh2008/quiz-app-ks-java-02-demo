import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { QuizModel } from "../../../models/quiz.model";
import apiService from "../../../services/api.service";

const QuizDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [quiz, setQuiz] = useState<QuizModel | null>(null);

    const getQuizById = useCallback(async (quizId: string) => {
        try {
            const data = await apiService.getById("/quizzes", quizId);
            setQuiz(data);
        } catch (error) {
            console.error("Failed to fetch quiz:", error);
        }
    }, []);

    useEffect(() => {
        if (id) {
            getQuizById(id);
        }
    }, [id, getQuizById]);

    return (

        <section className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">{quiz?.title}</h2>
            <p>{quiz?.description}</p>
            <span>{quiz?.duration}</span>
        </section>
    )
}

export default QuizDetail;