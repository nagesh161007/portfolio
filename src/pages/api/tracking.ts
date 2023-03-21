// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const companyName = req.body.utm_source;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "frontendprep@gmail.com",
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "frontendprep@gmail.com",
      to: "seeni.n@northeastern.edu",
      subject: `Your profile is viewed by ${companyName}`,
      html: `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Application Viewed Notification</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          font-size: 14px;
                          line-height: 1.6;
                          text-align: center;
                          background-color: #f5f5f5;
                          margin: 0;
                          padding: 0;
                      }
                      .container {
                          width: 100%;
                          max-width: 600px;
                          margin: 40px auto;
                          padding: 40px;
                          background-color: #ffffff;
                          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                      }
                      h1 {
                          font-size: 24px;
                          color: #333333;
                          margin-bottom: 20px;
                      }
                      p {
                          font-size: 16px;
                          color: #666666;
                      }
                      .highlight {
                          color: #007BFF;
                          font-weight: bold;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <h1>Application Update</h1>
                      <p>Your application for the <span class="highlight"></span> position at <span class="highlight">${companyName}</span> has been <span class="highlight">viewed</span> by the company.</p>
                  </div>
              </body>
              </html>
              `,
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
}
