import { useEffect, useRef } from "react";

const HistorySample = ({ history }) => {
    const handleGoback = () => {
        history.goBack();
        // handleGoback 작동시 history의 goback() 작동(뒤로감)
    };

    const handleGoHome = () => {
        history.push('/');
    };

    history.unblock = history.block('떠나실 건가요?')
    
    useEffect(()=> {
        return ()=> {
            if (history.unblock) {
            history.unblock();
        }}
    },[]);
    
    
    return(
        <div>
            history예제<br/>
            <button onClick={handleGoback}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;
