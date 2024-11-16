import './button.css';

const Button = ({ children, className, type, onClick, icon }) => {

    var iconElement = null;
    var iconElementBack = null;

    if (type === 'search') {
        iconElement = icon;
    } else if (type === 'default') {
        iconElement = '';
    }else if(type === 'primary'){
        iconElement = ''
    }else if(type === 'searchBack'){
        iconElementBack = icon;
    }

    return (
        <button className={className} type={type} onClick={onClick}>
            <span className='icon-text-container'>
                {iconElement}
                {children}
                {iconElementBack}
            </span>

        </button>
    )
}

export default Button; 