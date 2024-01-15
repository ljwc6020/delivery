import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../actions/actions";

import axios from "axios";

const Login = () => {
  const [webId, setWebId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const JSON_FILE_PATH = "/users.json"; //json 파일 경로 설정

  const onChangeID = useCallback((e) => {
    setWebId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const LoginFunc = async (e) => {
    //async, await 비동기 방식으로 로그인 구현
    e.preventDefault();
    if (!webId) {
      alert("아이디를 입력하세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    //axios로 로그인 구현
    try {
      //try 구문은 로그인 구현시 자주 사용
      const response = await axios.get(JSON_FILE_PATH);
      //해당 위치에 있는 json 폴더안에 내용을 가져오갰다
      const users = response.data.users;
      //안에 있는 배열중 users 의 값을가져와서 users에 담음
      const user = users.find(
        //현재 webId, password와 users안에 있는 것들이
        // 둘다 같다면 true 아니면 undefined
        (u) => u.webId === webId && u.password === password
      );

      if (user) {
        // 유저가 트루라면
        dispatch(loginSuccess(user));
        // 디스패치로 로그인 석세스로 user 데이터를 들고 이동
        navigate("/");
        //홈화면 이동
      } else {
        dispatch(loginFailure("아이디 또는 비밀번호가 일치하지 않습니다."));
        // 실패시 디스패치
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        // 시스템 알림창
      }
    } catch (error) {
      throw new Error("로그인 실패");
      //그 외 요인으로 로그인 실패시
    }
  };

  const goSignIn = () => {
    navigate("/Join", { replace: false });
  };

  return (
    <div>
      <form onSubmit={LoginFunc}>
        <div className="wrap">
          <h1 className="loginText">로그인</h1>
          <div className="loginBox">
            <div className="loginL">
              <div className="idForm">
                <p>아이디</p>
                <input
                  type="text"
                  placeholder="아이디"
                  className="webId"
                  value={webId}
                  onChange={onChangeID}
                ></input>
              </div>
              <div className="passwordForm">
                <p>비밀번호</p>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="webPassword"
                  value={password}
                  onChange={onChangePassword}
                ></input>
                <div>
                  <button className="loginBtn">로그인</button>
                </div>
              </div>
            </div>
            <div className="loginR">
              <div className="lRText">
                택베 홈페이지에 온것을
                <br /> 환영 합니다!
              </div>
              <button onClick={goSignIn}>회원가입</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
