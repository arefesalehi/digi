import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import { validate } from "../validators";
import contactusSchema from "../validators/contactus";
import { sendContactusMessage } from "../service/contactus.service";

const Usecontactus = (initialForm) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validate(contactusSchema, form)) return;

    setIsSubmitting(true);

    const response = await sendContactusMessage(form);

    toast.promise(response, {
      loading: "درحال ارسال پیام...",
      success: () => {
        resetForm();
        setIsSubmitting(false);
        return "پیام با موفقیت ثبت شد";
      },

      error: (error) => {
        setIsSubmitting(false);
        return error.response?.data?.message || "ارسال پیام با شکست مواجه شد";
      },
    });
  };

  return { changeHandler, isSubmitting, form, submitHandler };
};

export default Usecontactus;
