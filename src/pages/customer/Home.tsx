import { useRef, useState } from 'react';
import capital_01 from '../../assets/capitals_01.png';
import capital_02 from '../../assets/capitals_02.png';
import capital_03 from '../../assets/capitals_03.png';
import intro from '../../assets/intro.png';
import QuizCard from '../../components/shared/QuizCard';

const Home = () => {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: "Capitals of Country", description: "Test your knowledge of country capitals", image: capital_01, time: "15m" },
    { id: 2, title: "World Geography", description: "Explore the world's geography", image: capital_02, time: "20m" },
    { id: 3, title: "Famous Landmarks", description: "Identify famous landmarks around the world", image: capital_03, time: "10m" },
  ]);

  const title = useRef<HTMLHeadingElement>(null);

  const changeTitleColor = () => {
    if (title.current) {
      title.current.classList.toggle('text-blue-500');
      // Remove a quiz
      setQuizzes(prev => prev.slice(0, prev.length - 1));
    }
  }
  return (
    <>
      <section className="hero-section flex justify-between items-center rounded-md my-6">
        <div className="hero-content w-[60%]">
          <h1 ref={title} className='text-3xl font-bold mb-4'>Welcome to Quiz App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestiae turpis magna, nunc sapien vehicula
            sapien, nec scelerisque nunc tunc hac lectus. Nullam nec volutpatum turpis. Nullam nec scelerisque nunc.</p>
          <a href="#" className="take-quiz-btn">Take a Quiz</a>
        </div>
        <div className="hero-image w-[40%]">
          <img src={intro} alt="Quiz App Illustration" />
        </div>
      </section>

      <section className="quizzes-grid">
        <h2 className="section-title text-center">QUIZZES</h2>
        <div className="quiz-list flex flex-wrap *:w-1/3">
          {quizzes.map((quiz) => <QuizCard key={quiz.id} data={quiz} changeTextColor={changeTitleColor} />)}
        </div>
      </section>
    </>
  )
}


export default Home
