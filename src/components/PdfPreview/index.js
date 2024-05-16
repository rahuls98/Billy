import "./style.css";
import InvoiceBaseData from "./data.json";
import VerticalSpace from "../VerticalSpace";
import TextLine from "../TextLine";

const PdfPreview = () => {
    const invoiceMetadata = {
        invoiceNo: "24-25/01",
        invoiceDated: "17/04/24",
        supplierCode: "24-25/01",
        registrationDated: "17/04/24",
        buyerOrderNo: "24-25/01",
        buyerOrderDated: "17/04/24",
    };
    const billingDetails = {
        CustomerName: "",
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
        CustomerGstNumber: "",
    };
    const deliveryAddress = {
        CustomerName: "",
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
    };
    const particulars = [
        {
            slno: 1,
            particular: "Carpentry work : Storage units and reception table",
            hsn: 995414,
            unitSqFt: 185,
            unitRate: 1200,
        },
        {
            slno: 2,
            particular:
                "Electrical : Provision of switch boards, MCBs, lights and cabling work",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 68000,
        },
        {
            slno: 3,
            particular:
                "Plumbing : Bathroom fitting, tabletop basin and necessary plumbing works",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 50000,
        },
        {
            slno: 2,
            particular:
                "Electrical : Provision of switch boards, MCBs, lights and cabling work",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 68000,
        },
        {
            slno: 3,
            particular:
                "Plumbing : Bathroom fitting, tabletop basin and necessary plumbing works",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 50000,
        },
        {
            slno: 2,
            particular:
                "Electrical : Provision of switch boards, MCBs, lights and cabling work",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 68000,
        },
        {
            slno: 3,
            particular:
                "Plumbing : Bathroom fitting, tabletop basin and necessary plumbing works",
            hsn: 995414,
            unitSqFt: 1,
            unitRate: 50000,
        },
    ];
    const cgst = 9;
    const sgst = 9;
    const igst = 0;
    const totalInWords = "";

    const getSubTotal = () => {
        return particulars.reduce(
            (acc, particular) =>
                acc + particular.unitSqFt * particular.unitRate,
            0
        );
    };

    const getTotalAmount = () => {
        let subTotal = getSubTotal();
        let cgstAmount = (cgst / 100) * subTotal;
        let sgstAmount = (sgst / 100) * subTotal;
        let igstAmount = (igst / 100) * subTotal;
        return subTotal + cgstAmount + sgstAmount + igstAmount;
    };

    return (
        <div className="pdf-preview-container">
            <div id="letter-head">
                <p id="letter-head-title">SHRISTI</p>
                <div id="letter-head-address">
                    {InvoiceBaseData["letter_head_address"].map((text) => (
                        <TextLine text={text} />
                    ))}
                </div>
            </div>
            <div id="invoice-metadata">
                <VerticalSpace size={15} />
                <div className="text-right">
                    <strong>ORIGINAL</strong>
                </div>
                <VerticalSpace size={15} />
                <div className="text-center">
                    <strong>TAX INVOICE</strong>
                </div>
                <VerticalSpace size={20} />
                <div id="provider-details">
                    <div>
                        {InvoiceBaseData["provider-details"].map((text) => (
                            <TextLine text={text} />
                        ))}
                    </div>
                    <div>
                        <TextLine text={"Invoice No."} />
                        <TextLine text={"Invoice Dated"} />
                        <TextLine text={"Supplier Code"} />
                        <TextLine text={"Registration Dated"} />
                        <TextLine text={"Buyer Order No."} />
                        <TextLine text={"Buyer Order Dated"} />
                    </div>
                    <div>
                        <TextLine text={": " + invoiceMetadata.invoiceNo} />
                        <TextLine text={": " + invoiceMetadata.invoiceDated} />
                        <TextLine text={": " + invoiceMetadata.supplierCode} />
                        <TextLine
                            text={": " + invoiceMetadata.registrationDated}
                        />
                        <TextLine text={": " + invoiceMetadata.buyerOrderNo} />
                        <TextLine
                            text={": " + invoiceMetadata.buyerOrderDated}
                        />
                    </div>
                </div>
                <VerticalSpace size={20} />
                <div id="customer-details">
                    <div>
                        <h3>Billing Details</h3>
                        <TextLine
                            text={billingDetails.CustomerName}
                            placeholderText={"Customer Name"}
                        />
                        <TextLine
                            text={billingDetails.AddressLine1}
                            placeholderText={"Address Line 1"}
                        />
                        <TextLine
                            text={billingDetails.AddressLine2}
                            placeholderText={"Address Line 2"}
                        />
                        <TextLine
                            text={billingDetails.AddressLine3}
                            placeholderText={"Address Line 3"}
                        />
                        <TextLine
                            text={billingDetails.CustomerGstNumber}
                            placeholderText={"Customer GST Number"}
                        />
                    </div>
                    <div>
                        <h3>Delivery Address</h3>
                        <TextLine
                            text={deliveryAddress.CustomerName}
                            placeholderText={"Customer Name"}
                        />
                        <TextLine
                            text={deliveryAddress.AddressLine1}
                            placeholderText={"Address Line 1"}
                        />
                        <TextLine
                            text={deliveryAddress.AddressLine2}
                            placeholderText={"Address Line 2"}
                        />
                        <TextLine
                            text={deliveryAddress.AddressLine3}
                            placeholderText={"Address Line 3"}
                        />
                    </div>
                </div>
                <VerticalSpace size={20} />
            </div>
            <div id="price-breakdown">
                <table>
                    <thead>
                        <tr>
                            <th width="5%">No.</th>
                            <th width="35%">Particulars</th>
                            <th width="15%">HSN/SAC</th>
                            <th width="10%">Unit sq. ft.</th>
                            <th width="15%">Unit Rate</th>
                            <th width="20%">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {particulars.map((particular) => (
                            <tr key={particular.slno}>
                                <td>{particular.slno}</td>
                                <td>{particular.particular}</td>
                                <td>{particular.hsn}</td>
                                <td>{particular.unitSqFt}</td>
                                <td>
                                    {particular.unitRate.toLocaleString(
                                        "en-IN"
                                    )}
                                </td>
                                <td>
                                    {(
                                        particular.unitSqFt *
                                        particular.unitRate
                                    ).toLocaleString("en-IN")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <VerticalSpace size={10} />
                <table id="price-summation">
                    <tbody>
                        <tr>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td width="80%">Sub Total</td>
                            <td width="20%">
                                {getSubTotal().toLocaleString("en-IN")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <u>Add:</u>
                                </strong>
                                <br />
                                <TextLine text={"CGST @ 9%"} />
                                <TextLine text={"SGST @ 9%"} />
                                <TextLine text={"IGST @18%"} />
                            </td>
                            <td>
                                <br />
                                <TextLine
                                    text={
                                        (
                                            (cgst / 100) *
                                            getSubTotal()
                                        ).toLocaleString("en-IN") || ""
                                    }
                                    placeholderText={"-"}
                                />
                                <TextLine
                                    text={
                                        (
                                            (sgst / 100) *
                                            getSubTotal()
                                        ).toLocaleString("en-IN") || ""
                                    }
                                    placeholderText={"-"}
                                />
                                <TextLine
                                    text={
                                        (
                                            (igst / 100) *
                                            getSubTotal()
                                        ).toLocaleString("en-IN") || ""
                                    }
                                    placeholderText={"-"}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="highlight-cell">Total Amount</td>
                            <td className="highlight-cell">
                                ₹{getTotalAmount().toLocaleString("en-IN")}
                            </td>
                        </tr>
                        <tr>
                            <td className="highlight-cell">Rounded Amount</td>
                            <td className="highlight-cell">
                                ₹
                                {Math.round(getTotalAmount()).toLocaleString(
                                    "en-IN"
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <TextLine
                                    text={totalInWords}
                                    placeholderText={"Total in words"}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PdfPreview;
