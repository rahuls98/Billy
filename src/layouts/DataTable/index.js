import "./style.css";
import { useEffect, useState, useContext, useCallback } from "react";
import { readData, readInvoiceAndCustomerNames } from "../../apis/data";
import PdfPreview from "../../components/PdfPreview";
import { invoiceDataContext } from "../../contexts/invoiceDataContext";

const DataTable = () => {
    const { createBillForPreview } = useContext(invoiceDataContext);
    const [invoices, setInvoices] = useState(null);
    const [data, setData] = useState([]);
    const [bill, setBill] = useState(null);
    const [selectedItem, setSelectedItem] = useState(0);
    const [search, setSearch] = useState("");

    const fetchAndResetInvoiceList = useCallback(async () => {
        const invoicesItems = await readInvoiceAndCustomerNames();
        const dataItems = await readData();
        const selectedBill = dataItems[0];
        const bill = createBillForPreview(selectedBill);
        setInvoices(invoicesItems);
        setData(dataItems);
        setBill(bill);
        setSelectedItem(dataItems[0]._id);
    }, [createBillForPreview]);

    const handleSetBill = (id) => {
        setSelectedItem(id);
        const selectedBill = data.filter((item) => item._id === id)[0];
        if (selectedBill) {
            let bill = createBillForPreview(selectedBill);
            setBill(bill);
        }
    };

    const handleSearch = async (text) => {
        setSearch(text);
        if (text === "") {
            fetchAndResetInvoiceList();
        } else {
            text = text.toLowerCase();
            const filteredInvoices = invoices.filter(
                (invoice) =>
                    invoice.invoiceNo.includes(text) ||
                    invoice.billingCustomerName.toLowerCase().includes(text)
            );
            setInvoices(filteredInvoices);
        }
    };

    useEffect(() => {
        fetchAndResetInvoiceList();
    }, [fetchAndResetInvoiceList]);

    return (
        <div id="data-table-container">
            <ul id="data-table-list">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => handleSearch(e.currentTarget.value)}
                />
                {invoices &&
                    invoices.map((invoice) => {
                        return (
                            <li
                                className={
                                    selectedItem === invoice._id ? "active" : ""
                                }
                                key={invoice._id}
                                onClick={() => handleSetBill(invoice._id)}
                            >
                                {invoice.invoiceNo || ""} (
                                {invoice.billingCustomerName || ""})
                            </li>
                        );
                    })}
            </ul>
            <div id="data-table-pdf-preview" className="collapsable">
                <div id="pdf-preview">{bill && <PdfPreview bill={bill} />}</div>
            </div>
        </div>
    );
};

export default DataTable;
