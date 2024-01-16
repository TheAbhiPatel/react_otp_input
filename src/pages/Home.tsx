import { useState } from "react";
import OTPInput from "../components/OTPInput";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [setshowOtpField, setSetshowOtpField] = useState(false);
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    if (isNaN(e.target.value)) return;
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) setSetshowOtpField(true);
    else {
      setError(true);
    }
  };

  const handleOtpSubmit = async (otp: string) => {
    setOtp(otp);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {!setshowOtpField ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 p-10 border border-gray-300 shadow-lg rounded-md"
        >
          <h1 className="text-center mb-10 text-xl font-bold">
            Login to your Account{" "}
          </h1>
          <div>
            <input
              type="text"
              value={phoneNumber}
              maxLength={10}
              onChange={handleChange}
              autoFocus
              className="border-2 border-gray-300 focus:border-blue-300 outline-none p-1 px-5 rounded-md"
            />
            {error && (
              <p className=" text-[10px] text-red-500 mt-1">
                * Mobile number should be 10 digit long.
              </p>
            )}
          </div>

          <button className="bg-indigo-500 px-3 p-1 rounded-md text-white">
            Submit
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-10 p-10 border border-gray-300 shadow-lg rounded-md">
          <div>
            <h1 className="text-center text-xl font-semibold">
              Please Enter your OTP{" "}
            </h1>
            <p className="text-center text-xs ">
              Otp has been sent to : +91{phoneNumber}{" "}
            </p>
          </div>

          <OTPInput length={4} onOtpSubmit={handleOtpSubmit} />
          {otp && <h2>Your otp is : {otp}</h2>}
        </div>
      )}
    </div>
  );
};

export default Home;
