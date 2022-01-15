import React, { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Modal from "../Modal";

const ExchangeRate = ({ closeModal }) => {
  const [time, setTime] = useState(null);
  const [euroPrice, setEuroPrice] = useState(null);
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://stream.tradingeconomics.com/?client=guest:guest"
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    sendMessage('{"topic": "subscribe", "to": "EURUSD:CUR"}', []);
  }, []);

  useEffect(() => {
    if (lastMessage?.data) {
      console.log(lastMessage.data);
      const { dt, price } = JSON.parse(lastMessage.data);
      const lang = window?.navigator?.language;
      if (price) {
        setEuroPrice(
          new Intl.NumberFormat(lang, {
            style: "currency",
            currency: "EUR",
          }).format(price)
        );
      }

      if (dt) {
        setTime(new Date(dt).toLocaleString(lang));
      }
    } else {
      console.log("no data yet");
    }

    console.log("euro", euroPrice);
    console.log("time", time);
  }, [lastMessage]);

  return (
    <Modal>
      <div className="modal-top">
        <h4>Last Euro/USD price</h4>
        <span onClick={closeModal}>X</span>
      </div>
      <p>
        {readyState === ReadyState.CONNECTING
          ? "Connecting..."
          : euroPrice || "Not available"}
        {time}
      </p>
      <p id="current-status">Current status: {connectionStatus}</p>
    </Modal>
  );
};

export default ExchangeRate;
