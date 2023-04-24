export default async function contact(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.office ||
      !data.area
    ) {
      return res.status(400).json({ error: "Please fill out all fields" });
    }

    let nodemailer = require("nodemailer");
    const email = process.env.EMAIL;
    const pass = process.env.PASSWORD;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass,
      },
    });

    try {
      await transporter.sendMail({
        from: "lori@texfamilylawyer.com",
        to: email,
        subject: `Message From ${data.name}`,
        text: "this is test",
        html: `<p>Sent from: ${data.name},${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Name: ${data.name}</p>
        <p>Office Preference: ${data.office}</p>
        <p>Area of Interest: ${data.area}</p>
        `,
      });
      return res.status(200).json({ status: "success" });
    } catch {
      return res.status(500).json({ status: "error in nodemailer" });
    }
  }
  return res.status(400).json({ error: "Something went wrong" });
}
