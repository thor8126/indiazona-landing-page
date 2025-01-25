import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("+91 ");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const otpRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (timer > 0 && showOtpSection) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, showOtpSection]);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];
    pastedData.forEach((digit, index) => {
      if (index < 6 && /^[0-9]$/.test(digit)) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);
    otpRefs.current[pastedData.length < 6 ? pastedData.length : 5]?.focus();
  };

  const handleSendOtp = () => {
    setShowOtpSection(true);
    setTimer(60);
    setIsOtpVerified(false);
    // Here you would typically call an API to send the OTP
    console.log("Sending OTP to", mobileNumber);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setTimer(60);
      // Here you would typically call an API to resend the OTP
      console.log("Resending OTP to", mobileNumber);
    }
  };

  const handleVerifyOtp = () => {
    // Only allow verification if all 6 OTP digits are filled
    if (otp.every((digit) => digit.trim() !== "")) {
      // Here you would typically call an API to verify the OTP
      console.log("Verifying OTP:", otp.join(""));
      setIsOtpVerified(true);
    }
  };

  const isValidMobileNumber = (number) => {
    return /^\+91 [6-9]\d{9}$/.test(number);
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (value.startsWith("+91 ")) {
      setMobileNumber(value);
    } else if (value.startsWith("+91")) {
      setMobileNumber("+91 " + value.slice(3));
    } else {
      setMobileNumber("+91 " + value);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!isValidMobileNumber(mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!isOtpVerified) {
      newErrors.otp = "OTP must be verified";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { ...formData, mobileNumber });
      // Here you would typically send the data to your backend
    } else {
      console.log("Form has errors");
    }
  };

  const inputProps = {
    sx: {
      "& .MuiInputBase-input::placeholder": { color: "rgba(0, 0, 0, 0.8)" },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.27)",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.27)",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.47)",
      },
    },
  };

  const inputLabelProps = {
    shrink: true,
    sx: {
      color: "#FF944E",
      "&.Mui-focused": { color: "#FF944E" },
    },
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ height: "100vh", display: "flex", alignItems: "center", p: 0 }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "100%", display: { xs: "none", md: "block" } }}
        >
          <Box sx={{ height: "100%", overflow: "hidden" }}>
            <img
              src="https://indiazona-assets.blr1.cdn.digitaloceanspaces.com/assets/images-prod/loginImagePage.png"
              alt="Delivery service promotion"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box sx={{ maxWidth: 450, mx: "auto", paddingX: 2, paddingY: 1 }}>
            <Box
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <svg
                width="251"
                height="87"
                viewBox="0 0 251 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.1299 85.2349L71.3131 42.4458C71.4066 41.8393 71.619 41.2574 71.938 40.7333C72.1786 40.411 72.6832 40.2168 73.4517 40.1547C74.2202 40.0926 75.4583 40.0576 77.1816 40.0576L67.7035 84.202C67.6858 84.3415 67.6407 84.4761 67.5708 84.5981C67.5008 84.7201 67.4074 84.827 67.2959 84.9126C66.8594 85.0932 66.3903 85.1817 65.918 85.1728C65.1961 85.2168 63.9334 85.2375 62.1299 85.2349Z"
                  fill="#455F76"
                />
                <path
                  d="M73.1592 85.2386L79.7574 54.5185C80.8194 54.0918 81.9086 53.7363 83.0177 53.4545C84.2494 53.1283 85.5108 52.859 86.802 52.6468C88.0214 52.4381 89.256 52.3316 90.4931 52.3283C92.7288 52.3283 94.4508 52.6183 95.6592 53.1982C96.2232 53.4463 96.7209 53.8237 97.112 54.3C97.503 54.7763 97.7766 55.338 97.9103 55.9397C98.2027 57.1901 98.1212 58.8728 97.6658 60.9879L92.6667 84.2056C92.636 84.4844 92.4965 84.7398 92.2785 84.9163C91.8302 85.0984 91.3495 85.1869 90.8657 85.1764C90.1244 85.2191 88.8552 85.2386 87.0465 85.2386L91.9253 62.5218C92.3575 60.4999 92.4299 59.0579 92.1427 58.1959C91.8555 57.3338 90.9149 56.9041 89.321 56.9066C88.4805 56.9176 87.6428 57.0034 86.8175 57.1629C85.9138 57.3223 85.042 57.6279 84.2365 58.0677L78.6241 84.2056C78.5872 84.4825 78.4489 84.7357 78.2359 84.9163C77.801 85.1022 77.3308 85.191 76.8581 85.1764C76.1154 85.2204 74.8825 85.2411 73.1592 85.2386Z"
                  fill="#455F76"
                />
                <path
                  d="M107.857 85.8844C106.548 85.8958 105.243 85.7325 103.976 85.399C102.794 85.073 101.763 84.3419 101.065 83.3332C100.304 82.2795 99.8787 80.7094 99.7881 78.6228C99.6975 76.5363 100.026 73.7494 100.774 70.2623C101.69 66.0037 102.872 62.5515 104.321 59.9058C105.771 57.26 107.366 55.3339 109.107 54.1275C110.67 52.9862 112.548 52.3568 114.483 52.3257C115.352 52.309 116.218 52.4175 117.056 52.648C117.706 52.8156 118.301 53.1487 118.783 53.6149L121.667 40.1907C121.75 39.5555 122.021 38.9594 122.443 38.4782C122.934 38.1036 123.534 37.9004 124.151 37.8996C124.927 37.8336 126.018 37.8025 127.396 37.8025L117.499 83.9467C116.147 84.5306 114.744 84.9844 113.307 85.302C111.519 85.7048 109.69 85.9002 107.857 85.8844ZM109.064 81.1702C109.774 81.1729 110.482 81.0974 111.176 80.945C111.844 80.798 112.486 80.5477 113.078 80.2033L117.898 57.7622C117.604 57.4286 117.216 57.1918 116.784 57.0827C116.235 56.9648 115.673 56.9113 115.112 56.9234C114.357 56.9374 113.615 57.1136 112.934 57.4399C112.039 57.8917 111.26 58.5426 110.656 59.3427C109.756 60.5226 109.041 61.8318 108.533 63.2259C107.747 65.3364 107.13 67.5062 106.689 69.7147C106.243 71.6618 105.925 73.6362 105.738 75.625C105.603 76.7799 105.68 77.9496 105.963 79.0772C106.135 79.751 106.55 80.3375 107.128 80.7237C107.722 81.043 108.391 81.1972 109.064 81.1702Z"
                  fill="#455F76"
                />
                <path
                  d="M123.098 85.2355L129.513 55.3542C129.599 54.7111 129.885 54.1116 130.332 53.6417C130.835 53.2708 131.443 53.0683 132.067 53.0631C132.844 52.9984 133.947 52.966 135.378 52.966L128.675 84.2026C128.638 84.4793 128.5 84.7324 128.287 84.9132C127.842 85.1008 127.361 85.1896 126.878 85.1734C126.117 85.2161 124.852 85.2355 123.098 85.2355ZM133.496 48.512C133.15 48.5197 132.809 48.4375 132.505 48.2734C132.201 48.1094 131.944 47.8691 131.761 47.5761C131.411 46.9937 131.4 45.953 131.726 44.4463C131.953 43.4139 132.424 42.451 133.1 41.6387C133.41 41.2877 133.793 41.01 134.224 40.826C134.654 40.642 135.12 40.5561 135.588 40.5747C136.577 40.5747 137.202 40.8543 137.47 41.4135C137.738 41.9727 137.703 42.9396 137.365 44.3181C137.164 45.4413 136.682 46.4953 135.964 47.382C135.663 47.7443 135.284 48.0341 134.855 48.2298C134.426 48.4254 133.959 48.5219 133.488 48.512H133.496Z"
                  fill="#455F76"
                />
                <path
                  d="M142.367 85.883C141.231 85.8888 140.097 85.7913 138.979 85.5917C137.986 85.4279 137.062 84.9786 136.32 84.2986C135.535 83.5027 135.032 82.4716 134.888 81.3629C134.647 80.0685 134.768 78.3042 135.249 76.0701C135.612 74.1773 136.244 72.3465 137.127 70.6336C137.774 69.3895 138.668 68.2912 139.755 67.4066C140.67 66.6843 141.729 66.1665 142.86 65.8883C143.923 65.6336 145.012 65.5033 146.105 65.5C146.9 65.5093 147.694 65.5741 148.48 65.6941C149.249 65.7852 149.998 66.003 150.696 66.3387C150.955 65.1349 151.17 64.1357 151.341 63.3409C151.512 62.5461 151.662 61.8459 151.791 61.2401C152.011 60.2046 152.019 59.4202 151.814 58.8869C151.72 58.6272 151.573 58.3897 151.382 58.1893C151.192 57.9889 150.963 57.8298 150.708 57.7219C150.045 57.4634 149.335 57.3432 148.624 57.3685C146.962 57.3609 145.303 57.5065 143.667 57.8034C142.32 58.0368 140.995 58.3823 139.705 58.8364C139.516 58.332 139.434 57.7937 139.464 57.2559C139.488 56.7678 139.549 56.2823 139.646 55.8036C139.726 55.4663 139.85 55.1411 140.015 54.8367C140.175 54.5156 140.423 54.2464 140.729 54.06C141.361 53.7183 142.603 53.3429 144.455 52.9339C146.584 52.4971 148.753 52.2927 150.925 52.3242C153.72 52.3242 155.627 52.9041 156.647 54.0639C157.666 55.2237 157.868 57.2663 157.252 60.1916L156.515 63.6127C155.997 66.0669 155.459 68.5263 154.9 70.9908C154.341 73.4554 153.809 75.7853 153.305 77.9806C152.787 80.1552 152.293 82.0593 151.822 83.6928C150.58 84.3143 149.28 84.8125 147.941 85.1801C146.126 85.6783 144.249 85.915 142.367 85.883ZM143.827 81.491C144.529 81.4901 145.226 81.3814 145.895 81.1687C146.453 81.0232 146.972 80.7582 147.417 80.3921C147.65 79.7061 147.908 78.7586 148.193 77.5496L149.078 73.744C149.383 72.4082 149.661 71.1604 149.912 70.0006C149.47 69.766 148.989 69.6121 148.492 69.5463C148 69.4667 147.503 69.4239 147.005 69.4181C146.352 69.4166 145.7 69.4922 145.065 69.6434C144.431 69.8061 143.845 70.1161 143.353 70.5481C142.741 71.1039 142.242 71.7723 141.882 72.5169C141.362 73.6042 140.985 74.7541 140.76 75.938C140.535 76.867 140.428 77.8208 140.442 78.7767C140.438 79.3842 140.612 79.9796 140.943 80.4892C141.225 80.885 141.637 81.1694 142.107 81.293C142.669 81.4346 143.247 81.5012 143.827 81.491Z"
                  fill="#455F76"
                />
                <path
                  d="M156.442 85.2367C156.061 84.4336 155.959 83.5257 156.155 82.6583C156.228 82.3048 156.335 81.959 156.473 81.6254C156.621 81.2923 156.788 80.9681 156.974 80.6546L174.541 57.4213H167.896C166.693 57.4213 165.58 57.442 164.558 57.4834C163.536 57.5248 162.673 57.5896 161.969 57.6776C161.989 57.2027 162.037 56.7295 162.113 56.2602C162.182 55.8292 162.248 55.4836 162.303 55.2273C162.4 54.6004 162.659 54.0099 163.056 53.5148C163.238 53.3281 163.458 53.1826 163.701 53.0882C163.944 52.9937 164.204 52.9525 164.465 52.9673H180.852C181.123 53.4579 181.206 54.0312 181.084 54.5788C181.001 54.9229 180.885 55.2583 180.739 55.5807C180.493 56.1275 180.208 56.6557 179.885 57.1611L162.769 80.3983H168.447C169.886 80.4196 171.326 80.3443 172.755 80.173C173.636 80.0553 174.51 79.8933 175.375 79.6876C175.388 80.0781 175.358 80.4687 175.286 80.8526C175.204 81.3264 175.131 81.7147 175.068 82.0176C174.884 82.8694 174.567 83.687 174.129 84.4407C173.775 84.9766 173.169 85.2445 172.313 85.2445L156.442 85.2367Z"
                  fill="#455F76"
                />
                <path
                  d="M187.59 85.8871C186.158 85.9171 184.731 85.7097 183.367 85.2735C182.197 84.8718 181.232 84.0249 180.681 82.9164C180.068 81.7541 179.785 80.0649 179.831 77.8488C179.878 75.6328 180.289 72.7178 181.065 69.1038C182.331 63.2091 184.192 58.9376 186.651 56.2892C189.109 53.6409 192.017 52.3206 195.376 52.3284C197.653 52.3284 199.433 52.8008 200.716 53.7457C202 54.6907 202.746 56.3734 202.956 58.7939C203.171 61.2015 202.811 64.5786 201.877 68.9252C200.591 74.9468 198.758 79.2766 196.377 81.9146C195.294 83.182 193.945 84.1951 192.426 84.8817C190.908 85.5683 189.256 85.9116 187.59 85.8871ZM188.692 81.4525C189.686 81.4412 190.646 81.0873 191.409 80.4506C192.263 79.7827 193.099 78.5452 193.916 76.7382C194.734 74.9313 195.503 72.3502 196.222 68.9951C196.959 65.5494 197.347 62.9606 197.386 61.2287C197.425 59.4968 197.182 58.3241 196.657 57.7105C196.144 57.1086 195.345 56.8096 194.273 56.8096C193.282 56.8293 192.325 57.1807 191.557 57.8076C190.679 58.4755 189.844 59.7129 189.049 61.5199C188.255 63.3269 187.497 65.908 186.775 69.2631C186.275 71.3599 185.905 73.4854 185.665 75.6276C185.516 76.8625 185.541 78.1121 185.738 79.34C185.925 80.1788 186.286 80.738 186.829 81.0175C187.405 81.3121 188.045 81.4614 188.692 81.4525Z"
                  fill="#455F76"
                />
                <path
                  d="M203.017 85.2352L209.615 54.5151C210.677 54.0884 211.766 53.7329 212.875 53.4511C214.107 53.1249 215.368 52.8556 216.659 52.6434C217.876 52.4338 219.108 52.326 220.343 52.3211C222.578 52.3211 224.3 52.611 225.509 53.1909C226.073 53.4385 226.571 53.8158 226.962 54.2921C227.354 54.7685 227.627 55.3305 227.76 55.9324C228.052 57.1828 227.972 58.8656 227.519 60.9806L222.532 84.2139C222.514 84.3536 222.468 84.4884 222.397 84.6103C222.327 84.7323 222.232 84.8391 222.12 84.9245C221.673 85.1063 221.194 85.1948 220.712 85.1847C219.969 85.2261 218.696 85.2468 216.892 85.2468L221.767 62.53C222.202 60.5082 222.274 59.0662 221.985 58.2041C221.695 57.3421 220.756 56.9123 219.167 56.9149C218.325 56.9257 217.486 57.0115 216.659 57.1712C215.756 57.3321 214.885 57.6376 214.078 58.076L208.466 84.2139C208.429 84.4907 208.291 84.744 208.078 84.9245C207.643 85.111 207.173 85.1998 206.7 85.1847C205.963 85.2209 204.735 85.2378 203.017 85.2352Z"
                  fill="#455F76"
                />
                <path
                  d="M235.715 85.8864C234.579 85.8923 233.445 85.7948 232.326 85.5952C231.334 85.4314 230.41 84.9821 229.668 84.3021C228.883 83.5061 228.38 82.4751 228.236 81.3664C227.995 80.072 228.115 78.3077 228.597 76.0736C228.96 74.1808 229.592 72.35 230.475 70.6371C231.121 69.393 232.015 68.2947 233.103 67.4101C234.017 66.6878 235.076 66.17 236.208 65.8918C237.271 65.6371 238.36 65.5068 239.453 65.5035C240.248 65.5127 241.042 65.5776 241.828 65.6976C242.597 65.7887 243.346 66.0065 244.044 66.3422C244.303 65.1384 244.518 64.1391 244.688 63.3444C244.859 62.5496 245.009 61.8494 245.139 61.2436C245.361 60.208 245.369 59.4236 245.162 58.8903C245.067 58.6306 244.92 58.3932 244.73 58.1928C244.54 57.9924 244.31 57.8333 244.056 57.7254C243.392 57.4669 242.683 57.3467 241.972 57.372C240.316 57.3707 238.663 57.5215 237.034 57.8225C235.687 58.0558 234.362 58.4013 233.072 58.8554C232.883 58.351 232.801 57.8127 232.831 57.2749C232.855 56.7869 232.916 56.3013 233.013 55.8226C233.099 55.4843 233.229 55.1591 233.402 54.8557C233.562 54.5346 233.809 54.2654 234.116 54.079C234.747 53.7373 235.989 53.3619 237.842 52.9529C239.957 52.5137 242.113 52.304 244.273 52.3277C247.068 52.3277 248.975 52.9076 249.994 54.0674C251.014 55.2272 251.21 57.271 250.584 60.199L249.851 63.6201C249.333 66.0743 248.794 68.5337 248.232 70.9982C247.671 73.4627 247.139 75.7927 246.637 77.988C246.119 80.1626 245.625 82.0666 245.154 83.7002C243.912 84.3217 242.612 84.8198 241.273 85.1875C239.463 85.6829 237.591 85.9182 235.715 85.8864ZM237.174 81.4945C237.876 81.4936 238.574 81.3849 239.243 81.1722C239.8 81.0267 240.32 80.7617 240.764 80.3956C240.997 79.7095 241.256 78.762 241.541 77.5531C241.824 76.3493 242.115 75.0795 242.426 73.7475C242.736 72.4156 243.012 71.1652 243.26 70.0041C242.817 69.7695 242.336 69.6156 241.84 69.5498C241.348 69.4702 240.851 69.4273 240.353 69.4216C239.7 69.4201 239.048 69.4957 238.412 69.6468C237.779 69.8096 237.192 70.1196 236.701 70.5516C236.089 71.1074 235.589 71.7758 235.23 72.5204C234.71 73.6076 234.333 74.7576 234.108 75.9415C233.883 76.8705 233.776 77.8243 233.79 78.7802C233.786 79.3877 233.96 79.9831 234.29 80.4927C234.573 80.8885 234.985 81.1729 235.455 81.2965C236.017 81.4381 236.595 81.5047 237.174 81.4945Z"
                  fill="#455F76"
                />
                <path
                  d="M14.2781 85.597C14.2781 85.597 -3.19796 72.6406 0.518665 48.4498C0.862883 46.2113 1.82111 43.9309 2.75608 41.7994C4.5702 37.6575 7.40767 34.0694 10.1986 30.2765C12.2593 27.4841 14.0781 24.5522 15.0688 21.4341C16.1007 18.0981 16.6674 14.6355 16.7527 11.1444C16.7527 15.9007 16.5434 20.8617 15.1526 25.5202C14.0408 29.2433 11.6313 32.6639 9.75208 36.1962C7.80771 39.8588 6.0308 43.5958 4.97954 47.4725C2.98401 54.9187 -0.0162681 69.2061 14.2827 85.597"
                  fill="#8CB89F"
                />
                <path
                  d="M26.1953 7.34302C24.5254 9.98641 22.6183 12.4623 21.3112 15.2546C18.6365 20.9928 17.3899 27.2802 18.883 33.3721C20.8227 41.2837 27.9257 46.9893 33.1681 53.6909C35.3125 56.4367 37.5871 59.5873 38.2848 63.0684C38.2848 63.1336 38.3081 63.208 38.322 63.2732C38.8384 66.2005 38.215 69.6536 37.908 72.297C38.1313 71.1894 38.4011 69.4023 38.6337 68.0806C39.2832 64.4405 38.8963 60.691 37.5173 57.2604C36.4758 54.9968 35.2121 52.8424 33.7449 50.8288C31.3307 47.357 28.135 44.2203 25.7953 40.7206C21.3344 34.0376 19.1854 26.0097 21.0274 18.7171C22.0322 14.7566 23.9254 10.9637 26.2046 7.35698L26.1953 7.34302Z"
                  fill="#FF8C00"
                />
                <path
                  d="M32.2158 0C30.197 4.38394 28.2526 8.84235 26.5734 13.3287C24.8942 17.815 24.0522 21.7615 24.5034 26.299C24.9686 31.1763 27.2944 36.114 29.7458 40.2606C32.2204 44.4817 35.1416 48.0884 37.7372 52.2257C39.8676 55.5904 41.3422 57.5916 42.2958 61.4776C43.2261 65.1681 43.7796 70.7853 43.3796 74.5596C44.0913 70.4177 44.5797 66.1827 44.268 61.9942C44.1049 59.7427 43.6354 57.5241 42.8726 55.3996C42.0585 53.1146 40.8677 51.146 39.6165 49.075C34.9928 41.3217 29.7923 33.3496 28.5364 24.242C28.0568 20.1511 28.2453 16.0094 29.0946 11.9791C29.476 9.96393 29.9737 7.95811 30.5179 5.9616C31.0436 4.05817 32.1274 1.88947 32.2344 0H32.2158Z"
                  fill="#FF8C00"
                />
                <path
                  d="M34.5302 33.1471C46.215 51.5578 46.0708 50.0825 47.5965 57.8684C49.5083 67.6415 45.1545 75.5298 41.7588 80.9376C41.5355 81.2913 40.5633 82.7294 40.5633 82.7294C40.5633 82.7294 49.7409 73.766 50.8387 62.9877C50.9038 62.3734 51.048 60.1116 51.0341 58.6456C50.862 39.9883 37.1026 38.4618 33.6743 22.5595C32.2463 15.9185 33.8139 9.5287 33.8139 9.5287C34.4651 5.53103 35.5536 2.51533 35.3722 2.45483C35.1908 2.39433 33.5115 6.47577 32.2928 11.2274C31.7393 13.3868 31.3904 15.2204 31.2648 15.9883C30.1159 23.1506 31.9998 29.1634 34.5209 33.1564"
                  fill="#FF8C00"
                />
                <path
                  d="M25.2358 48.2252C25.1477 47.8258 24.9711 47.4512 24.7191 47.1291C24.4672 46.8069 24.1462 46.5454 23.7799 46.3637C23.2262 46.1412 22.6367 46.0214 22.0402 46.01C21.6251 46.0056 21.2134 46.0859 20.8304 46.2459C20.4473 46.4059 20.1008 46.6423 19.8121 46.9408C19.2386 47.5817 18.8383 48.3587 18.6492 49.1979C18.1422 51.2688 17.7189 55.7971 17.3514 62.6522C16.9855 69.0001 16.801 74.5506 16.7979 79.3037C16.7979 80.779 16.7979 81.9564 16.8723 82.8174C16.8955 83.2502 16.9234 83.6179 16.9653 83.9204C16.9935 84.2109 17.0624 84.496 17.17 84.7674C17.4606 85.4647 17.9636 86.0525 18.6073 86.4474C19.28 86.8287 20.044 87.0186 20.8168 86.9966C21.7853 87.0503 22.7376 86.7305 23.4775 86.103C23.8062 85.7652 24.0614 85.363 24.2271 84.9217C24.3929 84.4804 24.4655 84.0095 24.4404 83.5388C24.3948 82.4324 24.0491 81.3594 23.4403 80.4346C23.3285 76.5423 23.4419 72.6467 23.7799 68.7674C24.4404 62.0038 24.9878 56.9512 25.4219 53.6097V53.5539C25.501 52.6231 25.5382 51.8087 25.5382 51.0408C25.5637 50.1004 25.4604 49.1609 25.2312 48.2485M22.8124 48.537L22.8635 48.5696C22.8514 48.5657 22.8384 48.5657 22.8263 48.5696"
                  fill="#455F76"
                />
              </svg>
            </Box>

            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "#FF944E",
                textAlign: "center",
                fontWeight: "600",
                fontSize: { xs: "1rem", md: "1.5rem" },
              }}
            >
              Create Account
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                required
                fullWidth
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                placeholder="Please write your name here"
                InputLabelProps={inputLabelProps}
                InputProps={inputProps}
              />

              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="abc@example.com"
                InputLabelProps={inputLabelProps}
                InputProps={inputProps}
              />

              <TextField
                required
                fullWidth
                label="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
                InputLabelProps={inputLabelProps}
                InputProps={{
                  ...inputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        disabled={
                          !isValidMobileNumber(mobileNumber) || showOtpSection
                        }
                        onClick={handleSendOtp}
                        sx={{
                          color: "#FF944E",
                          "&.Mui-disabled": {
                            color: "rgba(0, 0, 0, 0.26)",
                          },
                        }}
                      >
                        Send OTP
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />

              {showOtpSection && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, color: "#455F76" }}
                    >
                      Enter OTP sent to your mobile number
                    </Typography>
                    <Button
                      onClick={handleVerifyOtp}
                      disabled={
                        isOtpVerified ||
                        otp.some((digit) => digit.trim() === "")
                      }
                      sx={{
                        color: "#455F76",
                        "&:hover": {
                          borderColor: "#FF944E",
                          backgroundColor: "rgba(255, 148, 78, 0.04)",
                        },
                        "&.Mui-disabled": {
                          borderColor: "rgba(0, 0, 0, 0.26)",
                          color: "rgba(0, 0, 0, 0.26)",
                        },
                      }}
                    >
                      {isOtpVerified ? "Verified" : "Verify OTP"}
                    </Button>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                    {otp.map((digit, index) => (
                      <TextField
                        key={index}
                        inputRef={(el) => (otpRefs.current[index] = el)}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        onPaste={handleOtpPaste}
                        sx={{
                          width: "40px",
                          "& input": { textAlign: "center", p: 1 },
                        }}
                        inputProps={{
                          maxLength: 1,
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        InputLabelProps={inputLabelProps}
                        InputProps={inputProps}
                      />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={handleResendOtp}
                      disabled={timer > 0}
                      sx={{
                        color: "black",
                        "&.Mui-disabled": {
                          color: "rgba(0, 0, 0, 0.26)",
                        },
                      }}
                    >
                      {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                    </Button>
                  </Box>
                </Box>
              )}

              <TextField
                required
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                label="Create Password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                InputLabelProps={inputLabelProps}
                InputProps={{
                  ...inputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                required
                fullWidth
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputLabelProps={inputLabelProps}
                InputProps={{
                  ...inputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isOtpVerified}
                sx={{
                  mt: 1,
                  bgcolor: "#FF944E",
                  "&:hover": { bgcolor: "#ff8534" },
                  "&.Mui-disabled": {
                    bgcolor: "rgba(255, 148, 78, 0.5)",
                    color: "#fff",
                  },
                }}
              >
                CREATE ACCOUNT
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link href="/login" sx={{ color: "#FF944E" }}>
                    Login
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
