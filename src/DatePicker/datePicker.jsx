import { useState } from "react"
import './datePicker.css'
const DatePicker = ({type}) => {
    const [selectedDate,setSelectedDate] = useState("Selected Date")

    const handleDateChange = (e) => {
        setSelectedDate((e.target.value))
    }

    const getInputType = () => {
        if(type ==="week"){
            return 'week'
        }  else if (type === 'month'){
            return 'month'
        } else if (type === "quarter"){
            return 'text'
        } else{
            return 'date'
        }
    }

    const getPlaceHolder = () => {
        if(type ==="week"){
            return 'Select week'
        } else if (type === 'month'){
            return 'Select month'
        } else if (type === "quarter"){
            return 'text'
        } else{
            return 'Select date'
        }
    }
    return (
        <>
            <div className="date-picker-container">
                <input type={getInputType()} value={selectedDate} onChange={handleDateChange} placeholder={getPlaceHolder()} />
                <p>Selected Date:-{selectedDate}</p>
            </div>
        </>
    )
}
export default DatePicker