import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useSignUpProviderMutation } from "@/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@/utils/toast";

const GoogleSignUp = () => {
  const [signUpProvider] = useSignUpProviderMutation();
  const router = useRouter();
  const { redirect } = router.query;

  const handleGoogleSignIn = async (credentialResponse) => {
    if (credentialResponse?.credential) {
      const res = await signUpProvider(credentialResponse.credential);

      if (res?.data) {
        notifySuccess("Login success!");
        router.push(redirect || "/");
      } else {
        notifyError(res.error?.message || "Login failed");
      }
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleSignIn}
      onError={() => notifyError("Google Login Failed")}
    />
  );
};

export default GoogleSignUp;