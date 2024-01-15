import React, { useCallback, useState } from "react";
import "./home.css";

const Home = () => {
  const [invoice, setInvoice] = useState("");
  const [foundDelivery, setFoundDelivery] = useState(null);
  //더미 데이터를 넣어둘 공간, 일치한다면 넣어주고 아니라면 null로 둘것임

  //input 에서 무조건 숫자만 입력 가능 하다록 하는 함수
  const onChange = useCallback((e) => {
    e.target.value = e.target.value //현재 이벤트가 밸상한 곳의 벨류는
      .replace(/[^0-9.]/g, "") // 0~9를 제외한 값은 공백으로 대체한다
      .replace(/(.*)\./g, "$1"); // 특수기호들도 공백으로 대체
    setInvoice(e.target.value);
  }, []);

  const checkLength = useCallback(
    (e) => {
      //사용한 더미 데이터
      const deliveries = [
        {
          invoiceNumber: "12345678912",
          itemName: "노트북",
          deliveryStatus: "배송중",
        },
        {
          invoiceNumber: "67890123451",
          itemName: "헤드폰",
          deliveryStatus: "배송 추적 불가",
        },
        {
          invoiceNumber: "54321543211",
          itemName: "쌀",
          deliveryStatus: "배송완료",
        },
      ];
      //find 함수로 더미 데이터안 invoiceNumber와 invoice 비교
      const foundDeliverys = deliveries.find(
        (item) => item.invoiceNumber === invoice
      );

      e.preventDefault();
      setInvoice("");
      if (invoice.length < 11) {
        //invoice가 11자리보다 작은지
        setFoundDelivery(null);
        //초기화
        return alert("송장번호는 11자리 입니다."); //작다면 출력
      }
      //참일때
      if (foundDeliverys) {
        //foundDelivery 값 변경
        setFoundDelivery(foundDeliverys);
        //시스템 메시지 출력
        alert("배송 조회 성공");
      }
      //거짓일때
      if (!foundDeliverys) {
        // 일단은 입력한 텍스트를 받고 해당 홈페이지에 조회 사이트로 넘김
        window.open(`https://www.ilogen.com/web/personal/trace/${invoice}`);
        //초기화
        setFoundDelivery(null);
      }
    },
    [invoice]
  );

  return (
    <div className="background">
      <form onSubmit={checkLength}>
        <div className="searchBoard">
          <div className="searchBoardtext">
            택배조회
            <input
              className="searchNumOfInvice"
              type="text"
              // 숫자만 입력 받고 싶으면 type을 number로 하면 되지만 이러면 maxlength가 안먹음
              placeholder="송장번호를 입력하세요"
              maxLength={11}
              value={invoice}
              onChange={onChange}
            />
            <button
              style={{ cursor: "pointer" }}
              className="mainSearch"
            ></button>
          </div>
        </div>
      </form>
      {foundDelivery && (
        <div className="deliveryStatusIcon">
          배송 상태: {foundDelivery.deliveryStatus === "배송중" && "🚚"}
          {foundDelivery.deliveryStatus === "배송 추적 불가" && "❓"}
          {foundDelivery.deliveryStatus === "배송완료" && "✅"}
        </div>
      )}
    </div>
  );
};

export default Home;
