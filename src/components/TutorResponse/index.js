import React from 'react'
import './TutorResponse.css'

function TutorResponse({response}) {
  return (
    <div className="response-container">
      {response && (
        <div className="response-box">
          <h2>✨ Answer:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

export default TutorResponse
