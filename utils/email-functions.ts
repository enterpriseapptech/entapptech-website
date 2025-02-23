// Define a type for the full newsletter data
interface ContantUsData {
    phoneNumber: string;
    email: string;
    fullName: string,
    message: string,
    countryCode: string,
}


// Function to send the full newsletter data
export const contactUsEmail = async ({
    fullName,
    phoneNumber,
    message,
    email,
    countryCode,
}: ContantUsData): Promise<{ sent: boolean }> => {
    try {
        const res = await fetch(`/api/contact-us`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phoneNumber,
                fullName,
                email,
                message,
                countryCode
            }),
        });

        console.log("Fetch: ", res);
        return { sent: res.ok };
    } catch (error) {
        console.error("Error sending newsletter:", error);
        return { sent: false };
    }
};



