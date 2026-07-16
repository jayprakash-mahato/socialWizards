import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    console.log("API KEY:", process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    await resend.emails.send({
    from: "Social Wizards <noreply@socialwizards.co.in>", // replace with verified domain later
      to: ["business@socialwizards.co.in"], // <-- YOUR EMAIL
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table style="border-collapse:collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>

          <tr>
            <td><strong>Service</strong></td>
            <td>${service}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    });

      await resend.emails.send({
     from: "Social Wizards <noreply@socialwizards.co.in>",
      to: [email],
      subject: "Thank you for contacting Social Wizards",
      html: `
      <!DOCTYPE html>
      <html>

      <body style="font-family:Arial;background:#f8fafc;padding:40px;">

      <div style="
      max-width:650px;
      margin:auto;
      background:white;
      border-radius:15px;
      overflow:hidden;
      box-shadow:0 10px 30px rgba(0,0,0,.08);
      ">

      <div style="
      background:#0B2C6F;
      padding:35px;
      text-align:center;
      ">

      <h1 style="color:white;margin:0;">
      Social Wizards
      </h1>

      <p style="color:#ffffffb3;">
      Industrial Recruitment Solutions
      </p>

      </div>

      <div style="padding:40px;">

      <h2>Hello ${name}, 👋</h2>

      <p>
      Thank you for contacting
      <b>Social Wizards.</b>
      </p>

      <p>
      We have successfully received your enquiry regarding
      <b>${service}</b>.
      </p>

      <p>
      Our recruitment specialists will review your request
      and get back to you within
      <b>24 hours.</b>
      </p>

      <hr/>

      <h3>Your Submitted Details</h3>

      <table>

      <tr>
      <td><b>Name</b></td>
      <td>${name}</td>
      </tr>

      <tr>
      <td><b>Company</b></td>
      <td>${company}</td>
      </tr>

      <tr>
      <td><b>Phone</b></td>
      <td>${phone}</td>
      </tr>

      <tr>
      <td><b>Service</b></td>
      <td>${service}</td>
      </tr>

      </table>

      <br/>

      <p>
      If you have any urgent requirements,
      feel free to reply to this email or call us.
      </p>

      <br/>

      <a href="https://socialwizards.co.in"
      style="
      background:#FF7A00;
      color:white;
      text-decoration:none;
      padding:14px 30px;
      border-radius:8px;
      display:inline-block;
      ">
      Visit Our Website
      </a>

      </div>

      <div style="
      background:#f1f5f9;
      text-align:center;
      padding:25px;
      ">

      <b>Social Wizards</b>

      <br/>

      Industrial Recruitment Solutions

      <br/><br/>

      📞 +91 XXXXX XXXXX

      <br/>

      ✉ info@socialwizards.co.in

      </div>

      </div>

      </body>

      </html>
      `,
    });


    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}