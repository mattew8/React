import { useEffect, useRef } from "react";

export const useConfirm = (message, callback, rejection) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      // window.confirm -> 브라우저에 메시지, 확인, 취소 로 구성된 alert창 띄워줌(확인/취소 -> return true/false)
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
