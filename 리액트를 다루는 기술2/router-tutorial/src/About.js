import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨 앞의 ? 생략
    });
    const showDetail = query.detail === 'true'; // 쿼리 파싱 결과 값은 문자열
    return(
        <div>
            <h1>소개</h1>
            <p>라우터 기초 실습 페이지 입니다</p>
            {showDetail && <p>detail 값이 true군요!</p>}
        </div>
    )
}

export default About;
