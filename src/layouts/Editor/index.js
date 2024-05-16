import PdfPreview from "../../components/PdfPreview";
import PdfPreviewControls from "../../components/PdfPreviewControls";
import "./style.css";

const Editor = ({ setPage }) => {
    return (
        <div id="editor-container">
            <div id="editor-form"></div>
            <div id="editor-pdf-preview" className="collapsable">
                <PdfPreviewControls printHandler={() => setPage(1)} />
                <div id="pdf-preview">
                    <PdfPreview />
                </div>
            </div>
        </div>
    );
};

export default Editor;
