import { useState } from "react";

const useAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState();
  const [isSending, setIsSending] = useState(false);

  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  return { handleOtpChange, handlephoneChange, phone, otp, isSending };
};

export default useAuth;
