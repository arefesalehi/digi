import { useState } from 'react'
import Description from '../../components/common/description/Description'
import InputField from '../../components/templates/contactus/InputFields'
import axios from 'axios'
import { toast } from 'sonner'
import contactusSchema from '../../validators/contactus'
import { validate } from '../../validators'

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting]=useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    content: '',
    subject: '',
  })

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

  if(!validate(contactusSchema, form )) return
    
     setIsSubmitting(true)
    const response = axios.post('https://shopino.iran.liara.run/v1/contact-us', form)

    toast.promise(response, {
        loading: 'درحال ارسال پیام...',
        success: () => {
            setForm({
            name: '',
            phone: '',
            email:'',
            content: '',
            subject: '',
          })
           setIsSubmitting(false)
          return 'پیام با موفقیت ثبت شد'
          
        },
        
        error: (error)=>{
              setIsSubmitting(false)
         return error.response?.data?.message || 'ارسال پیام با شکست مواجه شد'
        },
      })
  }

  return (
    <div className="mycontainer">
      <Description
        title=" با ما تماس بگیرید"
        desc="  ازطریق فرم زیر با ما تماس بگیرید و تیم فنی ما در اسرع وقت به راهنمایی
          شما پاسخ خواهند داد."
      />

      <div className="flex justify-between items-center mt-5 border border-gray-300 rounded-xl">
        <span className="p-5 w-1/2">
          <h1>لطفا تمامی فرم هارا با دقت پر بفرمایید.</h1>

          <div className="flex justify-between gap-3 mt-10">
            <InputField
              value={form.name}
              onChange={changeHandler}
              name="name"
              placeholder="مثال: عارفه صالحی"
              label="نام و نام خانوادگی"
            />

            <InputField
              value={form.phone}
              onChange={changeHandler}
              name="phone"
              placeholder="مثال: شماره موبایل"
              label="شماره موبایل"
            />
          </div>

          <InputField
            value={form.email}
            onChange={changeHandler}
            name="email"
            placeholder="example:arefe@gmail.com"
            label="آدرس ایمیل"
          />

          <InputField
            value={form.subject}
            onChange={changeHandler}
            name="subject"
            placeholder="مثال:  مرجوع کردن کالا"
            label="موضوع شما"
          />

          <div className="flex flex-col mt-5">
            <label className="mb-2 text-sm" htmlFor="">
              محتوا
            </label>
            <textarea
              value={form.content}
              onChange={changeHandler}
              type="text"
              placeholder="مثال: قصد مرجوع کردن کالا را دارم"
              className="border border-gray-400 rounded h-40 text-xs"
              name="content"
            />
          </div>

          <div className="flex justify-end items-center gap-3 mt-5 p-5">
            <p className="text-red-600 underline">انصراف</p>
            <button
            disabled={isSubmitting}
              onClick={submitHandler}
              className={`bg-blue-500 p-2 rounded text-white ${isSubmitting ? 'opacity-50  cursor-not-allowed' : ''}`}
            >

              {!isSubmitting ? 'ثبت و ارسال':'در حال ارسال'}
        
            </button>
          </div>
        </span>
        <span className="p-10 w-1/2">
          <img
            src="/images/contact-us.png"
            alt="contact-us"
            className="w-130 h-130"
          />
        </span>
      </div>

      <Description
        title="مراجعه حضوری"
        desc=" شما میتوانید به صورت حضوری در یکی از دفاتر رسمی سیبیکالا مراجعه
          فرماییدو با همکاران ما در ارتباط باشید."
      />
    </div>
  )
}

export default ContactUs
