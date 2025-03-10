import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();

    // Save the data to the database
    const savedRequirement = await prisma.requirement.create({
      data: {
        email: data.email,
        phone: data.phone,
        address: data.address,
        communicationChannel: data.communicationChannel,
        callTime: data.callTime,
      },
    });
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender email
        to: "kipronoian68@gmail.com", // Recipient email
        subject: "New User Requirement Submitted",
        text: `A new user requirement has been submitted:
  
  - Email: ${data.email}
  - Phone: ${data.phone}
  - Address: ${data.address}
  - Preferred Communication Channel: ${data.communicationChannel}
  - Preferred Call Time: ${data.callTime}
  
  Best regards,
  Website Team`,
      };
    // Send email notification to kipronoian@gmail.com
    const transporter = nodemailer.createTransport({
        service: "gmail", // You can use any supported email service (e.g., Gmail, SMTP server, etc.)
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
      });

    // await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify(savedRequirement), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving requirement or send email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to save requirement or send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

