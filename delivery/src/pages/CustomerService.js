import React from "react";

const CustomerService = () => {
  const confirm = () => console.log(localStorage.getItem("users"));
  return (
    <div className="background">
      <button onClick={confirm}>로컬 스토리지 확인</button>
    </div>
  );
};

export default CustomerService;
