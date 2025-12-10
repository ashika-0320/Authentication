"use client";

import BasicInfoForm from "@/components/basic";
import Register from "@/components/registration";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import SignupForm from "../components/signupform";

export default function HomePage() {
  const [selected, setSelected] = useState("signup");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar selected={selected} setSelected={setSelected} />

      <div style={{ flex: 1, padding: "20px" }}>
        {selected === "basic" && <BasicInfoForm />}
        {selected === "signup" && <SignupForm />}
        {selected === "register" && <Register />}
        
      </div>
    </div>
  );
}
