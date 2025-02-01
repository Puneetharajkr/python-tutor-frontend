import React, {useState} from 'react'
import Header from './components/Header'
import TutorForm from './components/TutorForm'
import TutorResponse from './components/TutorResponse'
import './App.css'

function App() {
  const [response, setResponse] = useState('')
  console.log('Starting the development server...')
  return (
    <div className="app">
      <Header />
      <TutorForm setResponse={setResponse} />
      <TutorResponse response={response} />
    </div>
  )
}

export default App
