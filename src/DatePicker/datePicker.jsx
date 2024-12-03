import { useState } from "react"
import './datePicker.css'
const DatePicker = () => {
    const [selectedDate,setSelectedDate] = useState("")

    const handleDateChange = (e) => {
        setSelectedDate((e.target.value))
    }
    return (
        <>
            <div>
                <input type="date" value={selectedDate} onChange={handleDateChange} placeholder="Select Date"/>
                <p>Selected Date:-{selectedDate}</p>
            </div>
        </>
    )
}
export default DatePicker