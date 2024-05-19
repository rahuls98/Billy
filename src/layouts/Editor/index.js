import PdfPreview from "../../components/PdfPreview";
import PdfPreviewControls from "../../components/PdfPreviewControls";
import InvoiceForm from "../../components/InvoiceForm";
import "./style.css";
import { useContext } from "react";
import { invoiceDataContext } from "../../contexts/invoiceDataContext";

const Editor = ({ setPage }) => {
    const { handleWriteDataToDb } = useContext(invoiceDataContext);

    const handlePrint = () => {
        // handleWriteDataToDb();
        setPage(1);
    };

    return (
        <div id="editor-container">
            <div id="editor-form">
                <InvoiceForm />
            </div>
            <div id="editor-pdf-preview" className="collapsable">
                <PdfPreviewControls printHandler={handlePrint} />
                <div id="pdf-preview">
                    <PdfPreview />
                </div>
            </div>
        </div>
    );
};

export default Editor;
