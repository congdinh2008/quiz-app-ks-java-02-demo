type QuizCardProps = {
    title: string;
    description: string;
    image: string;
    time: string;
}

const QuizCard = ({ data, changeTextColor }: { data: QuizCardProps, changeTextColor: () => void }) => {
    return (
        <div className="quiz-card p-3">
            <img className="mb-3 w-full h-auto" src={data.image} alt={data.title} />
            <div className="quiz-info">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <span>{data.time}</span>
                </div>
                <p>{data.description}</p>
                <button onClick={changeTextColor} className="block w-full mt-3 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start</button>
            </div>
        </div>
    )
}

export default QuizCard;