import React from "react";
import useAuth from "../../hooks/useAuth";

const AuthPage = () => {
  const {} = useAuth(handleOtpChange, handlephoneChange, phone, otp, isSending);
  return (
    <div className="mt-20 ">
      <div className="flex justify-center mycontainer  ">
        <div className="w-125 h-auto bg-gray-100 rounded flex flex-col justify-center ">
          <h1 className="text-center font-bold pt-8">خوش برگشتید</h1>
          <p className="text-center text-gray-500 mt-2 ">ثبت نام و ورود</p>

          <div className="p-10 flex flex-col">
            <label htmlFor="">لطفا شماره موبایل خود را وارد نمایید</label>
            <input
              type="text"
              value={phone}
              onChange={handlephoneChange}
              className="rounded text-xs h-10 mt-3 w-full border border-gray-300"
              placeholder="0912..."
            />
            <input
              type="number"
              value={otp}
              onChange={handleOtpChange}
              className="rounded  text-xs h-10 mt-3 w-full border border-gray-300  "
              placeholder="تایید کد"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded   mt-3 p-2.5"
            >
              ارسال کد
            </button>
          </div>

          <p className="text-center">
            شما با ثبت نام قوانین وب سایت را قبول می کنید
          </p>
          <p className="text-center text-blue-600 mt-2 pb-8">بازگشت</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
