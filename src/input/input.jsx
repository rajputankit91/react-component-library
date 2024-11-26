import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FaKey } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMicOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import './input.css'

export default function Input({ type, value, placeholder, onchange, width, height, className, padding, backgroundColor, fontSize, color }) {
    const inputStyle = {
        width,
        height,
        padding: padding,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
        color: color,
    }

    let icon = null;
    let backicon = null;
    let mic = null;
    let showpassword = null;

    if (type === "password") {
        icon = <FaKey style={{ marginRight: '8px' }} />;
    } else if (type === "email") {
        icon = <FaRegUserCircle style={{ marginRight: '8px' }} />;
    } else if (type === "number") {
        icon = <FaPhoneAlt style={{ marginRight: '8px' }} />;
    } else if (type === "search") {
        icon = <FaSearch style={{ marginRight: '8px' }} />
    } else if (type === "spinner") {
        backicon = <i className="fa fa-spinner fa-spin" style={{ fontSize: '22px' }}></i>
    } else if (type === "spinnerbutton") {
        backicon = <button><i className="fa fa-spinner fa-spin" style={{ fontSize: '22px' }}></i></button>
    } else if (type === "spinnerButtonText") {
        backicon = <button><i className="fa fa-spinner fa-spin" style={{ fontSize: '17px' }}></i>  Search</button>
    } else if (type === "searchbtn") {
        backicon = <button><FaSearch style={{ fontSize: '17px' }} /></button>
    } else if (type === 'mic') {
        mic = <span><IoMicOutline style={{ fontSize: "25px" }} /> <button><FaSearch style={{ fontSize: '17px' }} /></button></span>
    } else if (type === "passwordIcon") {
        backicon = <FaEyeSlash />
    } else if(type === "showPassword"){
        showpassword = <span><span> <FaEyeSlash /></span> <span><button>Show</button> </span></span>
    } 

    const inputField = (<input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className={className}
        style={inputStyle}
    />)
    return (
        <>
            {icon}
            {inputField}
            {mic}
            {backicon}
            {showpassword}
        </>
    )
}
