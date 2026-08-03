import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
// import verifyOtpSchema from '../validators/Auth'
// import sendOTpSchema from '../validators/Auth'
import { validate } from "../validators";
import * as authService from "../service/auth.service";
import { verifyOtpSchema, sendOTpSchema } from "../validators/Auth";
import useCountdown from "./useCountdown";
import AuthContext from "../context/AuthContext";



const useAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSendOtp, setIsSendOtp] = useState(false);

  const navigate = useNavigate()
  const { restart, getFormattedTime, isExpired } = useCountdown(120);
const {refreshUser}= useContext(AuthContext)


  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const sendOtp = async () => {
    if (!validate(sendOTpSchema, { phone })) return;

    const data = await authService.sendOtp(phone);

    console.log("[SendOtp]", data);

    setIsSendOtp(true);
    restart();
  };


  const resendOtp = async () => {
    const data = await authService.sendOtp(phone);

    console.log("[ResendOtp]", data);

    restart();

    toast.success("کد جدید ارسال شد.");
  };


  const verifyOtp = async () => {
    if (!validate(verifyOtpSchema, { phone, otp })) return;

    const data = await authService.verifyOtp(phone, otp);

    console.log("[VerifyOtp]", data);

    return data;
  };

  const login = async () => {
    const data = await verifyOtp();

    if (!data) return;

    // SaveToken

    toast.success("با موفقیت وارد شدید.");

    navigate("/");
    refreshUser()

  };

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (isSendOtp) {
        await login();
      } else {
        await sendOtp();
      }
    } catch (err) {
      console.error(err);
    }

  }



  return {
    isExpired, resendOtp,
    getFormattedTime, submitHandler, handleOtpChange, handlephoneChange, phone, otp, isSendOtp
  };
};

export default useAuth;
