import {useState} from 'react'
import './index.css'

function HealthApp() {
  const [dailyActivity, setDailyActivity] = useState('')
  const [healthGoals, setHealthGoals] = useState('')
  const [medicationReminder, setMedicationReminder] = useState(false)
  const [exerciseReminder, setExerciseReminder] = useState(false)

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // Save the form data or perform desired actions
    console.log('Form submitted!')
    console.log('Daily Activity:', dailyActivity)
    console.log('Health Goals:', healthGoals)
    console.log('Medication Reminder:', medicationReminder)
    console.log('Exercise Reminder:', exerciseReminder)
  }

  return (
    <div className="container">
      <h2>Welcome, Sunita Sharma!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="daily-activity">
            Daily Activity:
            <input
              type="text"
              id="daily-activity"
              value={dailyActivity}
              onChange={e => setDailyActivity(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="health-goals">
            Health Goals:
            <input
              type="text"
              id="health-goals"
              value={healthGoals}
              onChange={e => setHealthGoals(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            <input
              id="name"
              type="checkbox"
              checked={medicationReminder}
              onChange={() => setMedicationReminder(!medicationReminder)}
            />{' '}
            Medication Reminder
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="nam">
            <input
              id="nam"
              type="checkbox"
              checked={exerciseReminder}
              onChange={() => setExerciseReminder(!exerciseReminder)}
            />{' '}
            Exercise Reminder
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default HealthApp
