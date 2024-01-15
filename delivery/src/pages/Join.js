import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./join.css";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useDispatch } from "react-redux";

import { joinFailure, joinSuccess } from "../actions/actions";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 내가 만든 회원가입 데이터 삭제용
  const deleteAll = () => localStorage.removeItem("users");
  // 실제로 로컬스토리지에 잘 저장되었는지 확인용
  // const confirm = () => console.log(localStorage.getItem("users"));

  const [inputAddress, setInputAddress] = useState("");
  // input adress 박스에쓸 데이터

  // 주소 검색용 daum postcode 부분 정의
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  //open을 할때 주소검색 기능을 팝업으로 쓰고 해당주소는
  //postcodeScriptUrl 이다.

  const handleComplete = (data) => {
    // 검색한 주소를 처리하는 과정
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      extraAddress += data.bname;

      extraAddress +=
        extraAddress !== ""
          ? `,
       ${data.buildingName}`
          : data.buildingName;

      fullAddress +=
        extraAddress !== ""
          ? `
       (${extraAddress})`
          : "";
      //extraAddress가 공백이 아니라면
      //fullAddress에 extraAddres를 더하고
      //공백이면 아무것도 더하지 않는다.
    }
    setInputAddress(fullAddress);
  };

  const handleClick = () => {
    // 클릭시 열리도록
    open({ onComplete: handleComplete });
  };

  const formSchema = yup.object({
    webId: yup
      .string()
      .required("ID를 입력해주세요")
      .min(6, "최소 6자 이상 가능합니다")
      .max(20, "최대 20자 까지만 가능합니다"),
    name: yup.string().required("이름을 입력해 주세요"),
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("이메일 형식이 아닙니다."), //email 형식인지

    password: yup
      //input 박스의 이름
      .string()
      // sring으로 받아온다.
      .required("비밀번호를 입력해주세요")
      //반드시 필요한 필수조건이다.
      .min(8, "최소 8자 이상 가능합니다")
      //최소조건
      .max(15, "최대 15자 까지만 가능합니다")
      //최대 조건
      .matches(
        //정규식으로 표현한 것과 일치 하는지
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        //정규식 영문,숫자 특수문자 포함 8~15자리
        "영문 숫자 특수문자 포함 8자리를 입력해주세요."
      ),

    passwordConfirm: yup
      .string()
      .required("비밀번호를 다시 입력해 주세요")
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다."), //yup 중에서 password와 일치하는지

    phoneNumber: yup
      .string()
      .required("핸드폰 번호를 입력해 주세요")
      .matches(/^[0-9]*$/, "숫자만 입력해주세요")
      .max(12, "최대 12자리 까지 가능합니다"),

    address: yup.string().required("주소를 입력해 주세요"),

    detailAddress: yup.string(),

    telNumber: yup
      .string()

      .matches(/^[0-9]*$/, "숫자만 입력해주세요")
      .max(12, "최대 12자리 까지 가능합니다"),
  }); //전원 일치하지 않을시 안에 적힌 텍스트 출력

  const {
    //useForm 선언
    register,
    handleSubmit,
    watch,
    // 3가지 기능을 가져오갰다.
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      //로컬스토리지 기존에 있던 users 데이터를 가져와서 storedUsers에 넣음
      const updatedUsers = [
        ...storedUsers,
        // 기존 유저 데이터를 포함하여 업데이트
        //updatedUsers에 저장
        {
          webId: data.webId,
          name: data.name,
          password: data.password,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address,
          detailAddress: data.detailAddress,
          telNumber: data.telNumber,
        },
      ];

      // 업데이트된 유저 데이터를 로컬 스토리지에 저장
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      dispatch(joinSuccess({ updatedUsers }));
      //회원가입 성공시 Redux 상대 업데이트
      navigate("/Login");
    } catch (errors) {
      // 회원가입 실패 시 Redux 상태 업데이트
      dispatch(joinFailure(errors));
    }
  };

  const onErrors = (errors) => {
    dispatch(joinFailure({ errors }));
    console.log(errors);
    alert("회원가입 실패");
  };

  return (
    <div className="joinWrapper">
      <h2>회원 정보 입력</h2>
      <div className="subTitle">만14세 이상의 사용자</div>
      <form
        onSubmit={handleSubmit(onSubmit, onErrors)}
        disabled={errors || watch()}
        //error 가 발생시 해당 에러 발생 부분을 보여준다
      >
        <div className="signTable">
          <p className="necessary">
            * 표시된 항목은 필수 항목이므로 반드시 입력하셔야 합니다.
          </p>

          <div className="Table">
            <div>아이디*</div>
            <input
              type="text"
              name="webId"
              maxLength={20}
              {...register("webId")}
            ></input>
          </div>
          {errors.webId && <p>{errors.webId.message}</p>}
          <div className="Table">
            <div>이름*</div>
            <input
              type="text"
              name="name"
              maxLength={15}
              {...register("name")}
            ></input>
          </div>
          {errors.name && <p>{errors.name.message}</p>}
          <div className="Table">
            <div>비밀번호*</div>
            <input
              type="password"
              name="password"
              placeholder="영문자 숫자 특수문자 조합으로 최소 8글자 이상 입력해 주세요"
              maxLength={15}
              {...register("password")}
            ></input>
          </div>
          {errors.password && <p>{errors.password.message}</p>}
          <div className="Table">
            <div>비밀번호 확인*</div>
            <input
              type="password"
              name="passwordConfirm"
              maxLength={15}
              {...register("passwordConfirm")}
            ></input>
          </div>
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          <div className="Table">
            <div>휴대폰번호*</div>
            <input
              type="text"
              name="phoneNumber"
              maxLength={12}
              {...register("phoneNumber")}
            ></input>
          </div>
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          <div className="Table">
            <div>주소</div>
            <input
              type="text"
              name="address"
              onClick={handleClick}
              // input 박스 클릭시
              value={inputAddress}
              placeholder="주소 검색"
              {...register("address")}
            ></input>
            <input
              type="text"
              name="detailAdress"
              placeholder="상세 주소를 입력하세요"
              {...register("detailAddress")}
            ></input>
          </div>

          <div className="Table">
            <div>전화 번호</div>
            <input
              type="text"
              name="telNumber"
              maxLength={12}
              {...register("telNumber")}
            ></input>
          </div>
          {errors.telNumber && <p>{errors.telNumber.message}</p>}
          <div className="Table">
            <div>이메일*</div>
            <input
              type="text"
              name="email"
              maxLength={100}
              {...register("email")}
            ></input>
            {/* <div className="selectBoxEmail">
              <select className="emailSelect" name="emailSelect">
                <option value="">직접입력</option>
                <option value="chol.com">chol.com</option>
                <option value="dreamwiz.com">dreamwiz.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="korea.com">korea.com</option>
                <option value="nate.com">nate.com</option>
                <option value="naver.com">naver.com</option>
                <option value="yahoo.com">yahoo.com</option>
              </select>
              셀렉트 박스로 @이후 자동 완성 시켜 보려다 실패
            </div> */}
          </div>

          {errors.email && <p>{errors.email.message}</p>}
          <div className="emailSubText">
            비밀번호 분실시 입력하신 이메일로 임시 비밀번호가 전송되므로 정확히
            기재하시기 바랍니다.
            <button className="signInBtn" type="submit">
              회원가입
            </button>
          </div>
        </div>
      </form>
      <button onClick={deleteAll}>로컬 스토리지 정리</button>
    </div>
  );
};

export default Join;
