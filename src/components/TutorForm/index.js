import React, {useState} from 'react'
import axios from 'axios'

const TutorForm = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false) // To show loading state while fetching the answer
  const [error, setError] = useState('') // To display any errors

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setError('') // Reset error state before submitting

    try {
      // Send the question to the backend
      // const response = await axios.post(
      //   'https://python-tutor-backend.onrender.com/api/python-tutor', // Your backend URL
      //   {question},
      // )

      const response = await axios.post(
        'https://python-tutor-backend.onrender.com/api/python-tutor', // URL for backend
        {question},
      )

      console.log(response.data) // Check the response in the console

      // Store the answer in state
      setAnswer(response.data.response) // Update the answer state
    } catch (error) {
      console.error('Error fetching data from backend:', error)
      setError('Sorry, there was an error processing your question.')
    } finally {
      setIsLoading(false) // Hide loading spinner once the request is complete
    }
  }

  return (
    <div>
      <h1>Python Tutor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}{' '}
      {/* Show error message */}
      {answer && <p>Answer: {answer}</p>} {/* Display the answer */}
    </div>
  )
}

export default TutorForm
