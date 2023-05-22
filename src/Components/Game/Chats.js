import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Chats = (props) => {
  return (
    <div className="flex justify-start gap-2 items-center p-3">
      <div className="w-[12%] text-[1.8rem] flex justify-center items-center">
        {props.chat.senderID != "SYSTEM_MSG" ? (
          <img src={props.chat.avatar} className="w-full rounded-full" />
        ) : (
          <FontAwesomeIcon icon={faMessage} />
        )}
      </div>
      <p
        className="text-xl p-2 border-[1px] border-white w-[85%] opacity-[0.8] text-white rounded-md break-words
    lg:p-2 lg:text-lg
    xl:p-2 xl:text-xl"
        style={{ backgroundColor: props.chat.color }}
      >
        {props.chat.senderID != "SYSTEM_MSG"
          ? `${props.chat.name} : ${props.chat.chatMsg}`
          : props.chat.chatMsg}
      </p>
    </div>
  );
};

export default Chats;
