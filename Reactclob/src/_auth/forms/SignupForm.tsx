import React from "react";
import { Button } from "@/components/ui/button";

function SignupForm() {
  const btnClickEvent = () => {
    window.alert("Hello World");
  }
  return (
    <>
    <Button onClick={btnClickEvent}>Click me</Button>
    </>
  )
}

export default SignupForm
