import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold underline">
        Hello world! 
        <FontAwesomeIcon icon={faGlobe} className="text-blue-500 ml-2"/>
      </h1>
    </>
  )
}

export default App
