import "./style.css";

const TextLine = ({ text, placeholderText }) => {
    return (
        <>
            {text ? (
                <span class="text-line">{text}</span>
            ) : (
                <span class="text-line-placeholder">
                    <i>{placeholderText}</i>
                </span>
            )}
            <br />
        </>
    );
};
export default TextLine;
