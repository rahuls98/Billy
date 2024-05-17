import { useContext } from "react";
import { invoiceDataContext } from "../../contexts/invoiceDataContext";

const InvoiceForm = () => {
    const { invoiceMetadata } = useContext(invoiceDataContext);

    return (
        <div>
            <div>
                <label htmlFor="invoice-no">Invoice Number</label>
                <input
                    id="invoice-no"
                    value={invoiceMetadata.invoiceNo}
                    onChange={(e) =>
                        invoiceMetadata.setInvoiceNo(e.currentTarget.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="invoice-dated">Invoice Dated</label>
                <input id="invoice-dated" />
            </div>
            <div>
                <label htmlFor="supplier-code">Supplier Code</label>
                <input id="supplier-code" />
            </div>
            <div>
                <label htmlFor="registration-dated">Registration Dated</label>
                <input id="registration-dated" />
            </div>
            <div>
                <label htmlFor="buyer-order-number">Buyer Order Number</label>
                <input id="buyer-order-number" />
            </div>
            <div>
                <label htmlFor="buyer-order-dated">Buyer Order Dated</label>
                <input id="buyer-order-dated" />
            </div>
        </div>
    );
};

export default InvoiceForm;
