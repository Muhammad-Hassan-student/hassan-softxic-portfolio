import nodemailer from "nodemailer";

async function testEmail() {
  try {
    // Your current credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "muhammadhassanakram87@gmail.com",
        pass: "gwjsyfeualkeboud", // Enter your NEW app password
      },
    });

    const info = await transporter.sendMail({
      from: '"Muhammad Hassan" <muhammadhassanakram87@gmail.com>',
      to: "harrison2006th@gmail.com",
      subject: "Test Email from Portfolio",
      text: "This is a test email from your portfolio website",
      html: "<h1>Test Email Successful!</h1><p>If you receive this, your email configuration is working.</p>",
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error("Error code:", (error as any).code);
    console.error("Error message:", (error as any).message);

    // Common error messages
    const err = error as any;
    if (err.code === "EAUTH") {
      console.log("\n🔑 Authentication failed. Possible issues:");
      console.log("1. App password is incorrect");
      console.log("2. 2FA is not enabled");
      console.log('3. "Less secure apps" might be blocked');
    } else if (err.code === "ECONNECTION") {
      console.log("\n🌐 Connection failed. Check:");
      console.log("1. Firewall blocking port 587");
      console.log("2. SMTP server is down");
      console.log("3. Network issues");
    }
  }
}

testEmail();
