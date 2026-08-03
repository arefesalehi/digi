import { Link } from 'react-router'
import useAuth from '../../hooks/useAuth'

const AuthPage = () => {
  const {
    submitHandler,
    handleOtpChange,
    handlephoneChange,
    phone,
    otp,
    isSendOtp,
    isExpired,
    getFormattedTime,
    resendOtp,
  } = useAuth()

  return (
    <div className="mt-20">
      <div className="flex justify-center mycontainer">
        <div className="flex flex-col justify-center bg-gray-100 rounded w-125 h-auto">
          <h1 className="pt-8 font-bold text-center">خوش برگشتید</h1>
          <p className="mt-2 text-gray-500 text-center">ثبت نام و ورود</p>

          <div className="flex flex-col p-10">
            <label>
              {isSendOtp
                ? 'کد ارسال شده را وارد نمایید'
                : 'لطفا شماره موبایل خود را وارد نمایید'}
            </label>
            {isSendOtp ? (
              <>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  className="mt-3 border border-gray-300 rounded w-full h-10 text-xs"
                  placeholder="تایید کد"
                />

                <div className="mt-3 text-center">
                  {isExpired ? (
                    <button
                      type="button"
                      onClick={resendOtp}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      ارسال مجدد کد
                    </button>
                  ) : (
                    <p className="text-neutral-500 text-xs">
                      اعتبار کد تا{' '}
                      <span className="font-medium">{getFormattedTime()}</span>
                    </p>
                  )}
                </div>
              </>
            ) : (
              <input
                type="text"
                value={phone}
                onChange={handlephoneChange}
                className="mt-3 border border-gray-300 rounded w-full h-10 text-xs"
                placeholder="0912..."
              />
            )}

            <button
              onClick={submitHandler}
              type="submit"
              className={`bg-blue-600 mt-3 p-2.5 rounded text-white   ${
                isSendOtp && isExpired && 'opacity-50'
              }`}
              disabled={isSendOtp && isExpired}
            >
              {isSendOtp ? 'ثبت کد ' : 'ارسال کد'}
            </button>
          </div>

          <p className="text-center">
            شما با ثبت نام قوانین وب سایت را قبول می کنید
          </p>
          <Link to="/" className="mt-2 pb-8 text-blue-600 text-center">
            بازگشت
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
