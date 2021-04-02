import { useEffect } from "react";

export const useBeforeLeave = (onbefore) => {
  const handle = (event) => {
    const { clientY } = event;
    // JS event 객체 속 clientY(이벤트 발생한 세로축) 할당
    if (clientY <= 0) {
      onbefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    console.log(onbefore);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
