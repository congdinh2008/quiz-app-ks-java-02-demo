import type { QuizModel } from "../../models/quiz.model";

const QuizCard = ({ data, changeTextColor }: { data: QuizModel, changeTextColor: () => void }) => {
    return (
        <div className="quiz-card p-3">
            {/* Image in assets with relative path abc.png from data item */}
            <img className="mb-3 w-full h-auto" src={'../../../src/assets/' + data.thumbnailUrl} alt={data.title} />
            <div className="quiz-info">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <span>{data.duration} mins</span>
                </div>
                <p>{data.description}</p>
                <button onClick={changeTextColor} className="block w-full mt-3 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start</button>
            </div>
        </div>
    )   
}

export default QuizCard;