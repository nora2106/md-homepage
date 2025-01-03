
export const Heading = (props) => {
    const Tag = props.tag;
    return (
        <Tag className="relative mt-80 text-8xl uppercase ml-5">
            <span>{props.firstLine}</span>
            <br/>
            <span className='ml-20'>{props.secondLine}</span>
        </Tag>
    );
};

export default Heading;