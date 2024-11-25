import './button.css';

const Button = ({ children, className, type, onClick, icon, variant , size , disabled='false'}) => {


    const solidClass = {
        border: 'none',
        backgroundColor: 'black', 
        color: 'white', 
        width: '130px', 
        height: '45px', 
        borderRadius: '5px', 
        fontSize: '14px',
        cursor: 'pointer'
    };

    const outlinedClass = {
        backgroundColor: '#ffffff',
        color: 'black',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        border: 'solid 1px gray'
    };

    const dashedClass = {
        backgroundColor: '#ffffff',
        color: 'black',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        border: '1px solid gray',
        borderTop: '1px dotted gray',
        borderLeft: '1px dotted gray',
        borderRight: '1px dotted gray',
        borderBottom: '1px dotted gray'
    };

    const filledClass = {
        backgroundColor: '#efeded',
        color: 'black',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        border: 'none'
    };


    const textClass = {
        border: 'none',
        backgroundColor: '#ffffff',
        color: 'black',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };


    const linkClass = {
        border: 'none',
        backgroundColor: '#ffffff',
        color: 'black', 
        width: '130px', 
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px', 
        cursor: 'pointer',
        transition: 'all 0.3s ease' 
    };
    

    const defaultClass = {
        border: '1px solid gray',
        backgroundColor: '#ffffff',
        color: 'black',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const primaryClass = {
        border: 'none',
        backgroundColor: '#1677FF',
        color: 'white',
        width: '130px',
        height: '45px',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    var iconElement = null;
    var iconElementBack = null;

    let btnStyle = {};
    // let sizeStyle = 

    if (variant === 'solid') {
        btnStyle = solidClass;
    } else if (variant === 'outlined') {
        btnStyle = outlinedClass;
    } else if (variant === 'dashed') {
        btnStyle = dashedClass;
    } else if (variant === 'filled') {
        btnStyle = filledClass;
    } else if (variant === 'text') {
        btnStyle = textClass;
    } else if (variant === 'link') {
        btnStyle = linkClass;
    } else if (variant === 'default') {
        btnStyle = defaultClass;
    } else if (variant === 'primary') {
        btnStyle = primaryClass;
    } 

    // console.log(btnStyle);


    if (type === 'search') {
        iconElement = icon;
    } else if (type === 'searchBack') {
        iconElementBack = icon;
    } else if(type === 'loader'){
        iconElement = icon;
    }else if(type === 'download'){
        iconElement = icon;
    }


    return (
        <button className={className} type={type} onClick={onClick} style={btnStyle} size={size} disabled={disabled} >
            <span className='icon-text-container'>
                {iconElement}
                {children}
                {iconElementBack}
            </span>

        </button>
    )
}

export default Button; 