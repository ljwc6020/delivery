import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Indiv from "./pages/Indiv";
import Enterp from "./pages/Enterp";
import Introduce from "./pages/Introduce";
import Network from "./pages/Network";
import Layout from "./Layout";
import CustomerService from "./pages/CustomerService";
import Esg from "./pages/Esg";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Routes>
      {/* 홈, 어바웃, 프로필에 공통 적으로 들어가는 
        레이아웃을 원해서 레이아웃의 자식으로 만듬 */}
      <Route path="/" element={<Layout />}>
        {/* Layout이 가장 먼저 보여서 "/" 로 지정 */}
        <Route index element={<Home />} />
        {/* index라고 부르는 것으로, 여기가 진짜 
          메인 페이지 임을 알림 */}
        <Route path="/Indiv" element={<Indiv />} />
        <Route path="/Enterp" element={<Enterp />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Network" element={<Network />} />
        <Route path="/CustomerService" element={<CustomerService />} />
        <Route path="/Esg" element={<Esg />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* 그외 모든 경로는 NotFound로 */}
    </Routes>
  );
}
export default App;
