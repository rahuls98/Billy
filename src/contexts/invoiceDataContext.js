import { useState, createContext, Children } from "react";

export const invoiceDataContext = createContext({});

const InvoiceDataContextProvider = ({ children }) => {
    const [invoiceNo, setInvoiceNo] = useState("");
    const [invoiceDated, setInvoiceDated] = useState("");
    const [supplierCode, setSupplierCode] = useState("");
    const [registrationDated, setRegistrationDated] = useState("");
    const [buyerOrderNo, setBuyerOrderNo] = useState("");
    const [buyerOrderDated, setBuyerOrderDated] = useState("");

    return (
        <invoiceDataContext.Provider
            value={{
                invoiceMetadata: {
                    invoiceNo,
                    setInvoiceNo,
                    invoiceDated,
                    setInvoiceDated,
                    supplierCode,
                    setSupplierCode,
                    registrationDated,
                    setRegistrationDated,
                    buyerOrderNo,
                    setBuyerOrderNo,
                    buyerOrderDated,
                    setBuyerOrderDated,
                },
            }}
        >
            {children}
        </invoiceDataContext.Provider>
    );
};

export default InvoiceDataContextProvider;
