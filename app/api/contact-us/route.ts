import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
    const {
        phoneNumber,
        fullName,
        email,
        message,
        countryCode
    } = await req.json();

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Us Inquiry</title>
    </head>
    <body style="font-family: Arial, sans-serif; text-align: start; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="padding: 20px;">
                   <div style="width: 100%; max-width: 500px; display: flex; flex-direction: column;">
                <h2 style="color: #000; font-size: 20px; margin-bottom: 20px;">New Contact Us Inquiry</h2>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;">You have received a new inquiry through the contact form.</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;"><strong>FullName:</strong> ${fullName}</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;"><strong>Email:</strong> ${email}</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;"><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;"><strong>Country Code:</strong> ${countryCode}</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;"><strong>Message:</strong> ${message}</p>
            </div>
        </div>
    </body>
    </html>`;

    const thankYouHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
    </head>
    <body style="font-family: Arial, sans-serif; text-align: start; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="padding: 20px;">
                <div style="width: 100%; max-width: 500px; display: flex; flex-direction: column;">
                <h2 style="color: #000; font-size: 20px; margin-bottom: 20px;">Thank You for Contacting Us</h2>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;">Dear ${fullName},</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;">Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                <p style="color: #222222; font-size: 14px; line-height: 1.5;">Best regards,<br>Your Company Team</p>
            </div>
        </div>
    </body>
    </html>`;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_PASSWORD,
            },
        });

        // Email to the organization
        const mailOptionsOrg = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: process.env.ORGANIZATION_EMAIL,
            subject: `Contact Us Inquiry from ${name}`,
            html: html,
        };

        // Email to the sender
        const mailOptionsSender = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: email,
            subject: "Thank You for Contacting Us",
            html: thankYouHtml,
        };

        // Send both emails
        const infoOrg = await transporter.sendMail(mailOptionsOrg);
        const infoSender = await transporter.sendMail(mailOptionsSender);

        return new Response(JSON.stringify({ orgEmail: infoOrg, senderEmail: infoSender }));
    } catch (error) {
        return new Response(JSON.stringify({ error: (error as Error).message }));
    }

}
