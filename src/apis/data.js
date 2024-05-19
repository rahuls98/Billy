export const readData = async () => {
    try {
        const res = await fetch("http://localhost:8000/read");
        const data = res.json();
        return data;
    } catch (e) {
        console.log("readData error: ", e);
        return [];
    }
};

export const readInvoiceAndCustomerNames = async () => {
    try {
        const res = await fetch(
            "http://localhost:8000/readInvoiceAndCustomerNames"
        );
        const data = res.json();
        return data;
    } catch (e) {
        console.log("readData error: ", e);
        return [];
    }
};

export const writeData = async (data) => {
    try {
        const response = await fetch("http://localhost:8000/write", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to write data");
        }

        const responseData = await response.json();
        console.log(responseData);
        alert("Uploaded!");
        return responseData;
    } catch (error) {
        console.error(error);
        alert("Error!");
        throw error;
    }
};
