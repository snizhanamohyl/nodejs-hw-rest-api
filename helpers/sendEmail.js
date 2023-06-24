const nodemailer = require("nodemailer");
// const HttpError = require("./HttpError");

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  //   pool: true,
  host: "smtp.urk.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: UKR_NET_EMAIL,
  };

  try {
    await transport.sendMail(email);
    console.log("success email sending");
    return true;
  } catch (error) {
    console.log(error.message);
    // throw HttpError(500, "Email sending error");
  }
};

module.exports = sendEmail;
