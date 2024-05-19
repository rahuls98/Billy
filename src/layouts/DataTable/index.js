import { useEffect } from "react";
import { readInvoiceAndCustomerNames } from "../../apis/data";

const DataTable = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await readInvoiceAndCustomerNames();
            console.log("Data: ", data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <table></table>
        </div>
    );
};

export default DataTable;
