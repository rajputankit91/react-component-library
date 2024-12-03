import './App.css'
import DatePicker from './DatePicker/datePicker'

function App() {

  return (
    <>
      <h2>Welcome to Date Picker Component</h2>
      <DatePicker type={"date"} />
      <DatePicker type={"month"} />
      <DatePicker type={"week"} />
    </>
  )
}

export default App
