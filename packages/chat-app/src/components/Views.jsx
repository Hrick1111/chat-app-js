import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} /> 
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default Views