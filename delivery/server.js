const express = require("express");
const path = require("path");

const app = express();

// public 디렉토리 안에 있는 파일들을 클라이언트에게 제공
app.use(express.static(path.join(__dirname, "public")));

// 서버 시작
const PORT = process.env.PORT || 3000; //3000번 포트
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
