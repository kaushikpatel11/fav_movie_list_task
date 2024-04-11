import React, { useEffect, useState } from "react";

const SignIn = ({ setIsLogin }) => {
  const initialvalue = {
    email: "movies@gmail.com",
    password: "MovieList@New",
  };

  const [loginData, setLoginData] = useState(initialvalue);
  const [mailErrorMsg, setMailErrorMsg] = useState("");
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e?.target?.name]: e?.target?.value });
  };

  const handleSignIn = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (
      loginData?.email === "" ||
      loginData?.password === "" ||
      !emailRegex?.test(loginData?.email)
    ) {
      if (loginData?.email === "") {
        setMailErrorMsg("Please enter email");
      } else if (emailRegex?.test(loginData?.email)) {
        setMailErrorMsg("");
      } else {
        setMailErrorMsg("Please enter valid email");
      }

      if (loginData?.password === "") {
        setPasswordErrorMsg("Please enter password");
      } else {
        setPasswordErrorMsg("");
      }
    } else if (
      loginData?.email === "movies@gmail.com" &&
      loginData?.password === "MovieList@New"
    ) {
      console.log("data --- ", loginData);
      setIsLogin(true);
    }
  };

  useEffect(() => {
    if (loginData?.email === "") {
      setMailErrorMsg("");
    }
    if (loginData?.password === "") {
      setPasswordErrorMsg("");
    }
  }, [loginData]);

  return (
    <>
      <div className="h-fit  w-full flex justify-center items-center bg-gradient-to-tr from-white via-transparent to-blue-200">
        <div className="min:w-[640px] w-full md:w-[50%] max my-36 py-20 rounded-2xl bg-[#fff]">
          <div className="flex flex-col items-center justify-center gap-4 md:mx-20 mx-5 ">
            <div
              className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-500 font-nunito-sans font-extrabold text-3xl mt-4"
              style={{ backgroundClip: "text", color: "transparent" }}
            >
              Join our movie list
            </div>
            <div className="font-nunito-sans font-semibold text-2xl text-[#616161] py-2">
              Sign in below
            </div>

            <div className="flex flex-col gap-4 w-full">
              <input
                type="email"
                placeholder="E-Mail"
                onChange={handleChange}
                value={loginData?.email}
                name="email"
                className="font-nunito-sans font-normal text-2xl text-[#616161] w-full border border-[#CCCCCC] bg-[#FBFBFB] py-3 px-8 outline-none rounded-lg"
              />
              <div className="text-red-700 text-xs">{mailErrorMsg}</div>
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={loginData?.password}
                name="password"
                className="font-nunito-sans font-normal text-2xl text-[#616161] w-full border border-[#CCCCCC] bg-[#FBFBFB] py-3 px-8 outline-none rounded-lg"
              />
              <div className="text-red-700 text-xs">{PasswordErrorMsg}</div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div
                className="font-nunito-sans font-bold text-2xl bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-500 underline mt-2 cursor-pointer"
                style={{ backgroundClip: "text", color: "transparent" }}
                onClick={handleSignIn}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
