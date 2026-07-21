import z from "zod";


const contactusSchema = z.object({
  
    name: z
       .string()
       .trim()
       .min(3, { message: "نام باید حداقل 3 کاراکتر باشد" })
       .max(50, { message: "نام نباید بیشتر از 50 کاراکتر باشد" }),
   
     phone: z
       .string()
       .trim()
       .regex(/^[0-9]{10,11}$/, {
         message: "شماره موبایل صحیح نمی‌باشد",
       }),

      email: z
  .string()
  .trim()
  .email({
    message: "ایمیل معتبر نیست",
  }),
   
     subject: z
       .string()
       .trim()
       .min(3, { message: "موضوع پیام باید حداقل 3 کاراکتر باشد" })
       .max(100, { message: "موضوع پیام نباید بیشتر از 100 کاراکتر باشد" }),
   
     content: z
       .string()
       .trim()
       .min(10, { message: "محتوای پیام باید حداقل 10 کاراکتر باشد" })
       .max(1000, { message: "محتوای پیام نباید بیشتر از 1000 کاراکتر باشد" }),
})

export default contactusSchema