import { useEffect } from "react";
import PdfPreview from "../../components/PdfPreview";

const Preview = ({ setPage, print }) => {
    useEffect(() => {
        if (print) {
            window.print();
            setPage(0);
        }
    }, [setPage, print]);

    return (
        <>
            <PdfPreview />
        </>
    );
};

export default Preview;
