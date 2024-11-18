import { useState } from 'react'
import './App.css'
import SelectInput from './Select/select'

function App() {
  const [isopen,setIsopen] = useState(false)
  const [selectValue, setSelectValue] = useState('');

  const handleChange = (e) => {
    setSelectValue(e.target.value)
  }

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <>
        <h3>Select Option</h3>
        <SelectInput defaultvalue={selectValue} options={options} onchange={handleChange} />

        <h3>Select Option with Disable mode</h3>
        <SelectInput defaultvalue={"Option-1"} options={options} onchange={handleChange} disable={true} />

        <h3>Select Option with Loading Icon</h3>
    </>
  )
}

export default App
