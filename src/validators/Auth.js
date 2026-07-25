import {z} from 'zod'

const sendOTpSchema = z.object({
    phone:z
    .string()
    .trim()
    .regex()
})


const verifyOtpSchema= z.object({
   phone:z
    .string()
    .trim()
    .regex(),

    otp:z
    .string()
    .trim()
    .length(4 , message:تعداد کد تایید باید 4 کاراکتر باشد.)

})