import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"


export const sendEmail = async({email, emailType, userId}:any) =>{
    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                },
            )
        } else if(emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                },
            )
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "c607c5631fbf27",
              pass: "25343084a76132"
            }
          });

              const mailOptions = {
                from: '<your email id>',
                to: email,
                subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
                html: `<p>Click <a href="${process.env.devdomain}/verifyemail?token=${hashedToken}">here</a> to 
                ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}</p>`
              }

        const mailresponse = await transport.sendMail(mailOptions);
        await console.log(mailresponse)
              return mailresponse
       
    } catch (error: any) {
        throw new Error(error.message);
        
    }
}