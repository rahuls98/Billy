import "./style.css";

const PdfPreviewControls = ({ printHandler }) => {
    return (
        <div id="pdf-preview-controls-container">
            <button onClick={printHandler}>Print</button>
        </div>
    );
};

export default PdfPreviewControls;
