import React, {useState} from 'react'
import axios from 'axios'

const TutorForm = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Send the question to the backend
      // const response = await axios.post(
      //   'https://python-tutor-backend.onrender.com/api/python-tutor',
      //   {question},
      // )
      const response = await axios.post(
        'https://python-tutor-backend.onrender.com/api/python-tutor',
        {question},
      )

      // Store the answer in state
      setAnswer(response.data.answer)
    } catch (error) {
      console.error('Error fetching data from backend:', error)
      setAnswer('Sorry, there was an error processing your question.')
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
        <button type="submit">Submit</button>
      </form>

      {answer && <p>Answer: {answer}</p>}
    </div>
  )
}

export default TutorForm
