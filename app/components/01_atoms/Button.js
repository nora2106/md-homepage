
export const Button = (props) => {
    return (
        <button className='border-2 rounded-3xl ps-3 pe-3 px-1.5 py-1.5 border-amber-100 text-white'>{props.text}</button>
    );
};

export default Button;