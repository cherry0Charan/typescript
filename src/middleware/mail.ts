import { Request,Response,NextFunction } from "express"

import nodemailer from "nodemailer"


const mail=(gmail:string,mess:string)=>{

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"ck301878@gmail.com",
            pass:"qymgmhhwfqbfwcxd"
        }
    })

    const mailOptions={
        from:"ck301878@gmail.com",
        to:gmail,
        subject:"sending mail",
        text:mess
    }

    transporter.sendMail(mailOptions,(err:any,data:any)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)  
        }
    })

}

export default mail