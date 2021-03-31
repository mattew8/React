const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩중'}
        {!loadingPost && post && (
          // 중간에 post인지 검사해주는 이유는?
          // -> 이렇게 하면 post 객체가 유효할 때만 내부 값 보여줌
          // 안하면 내부 값 조회하려고 했는데 post가 없으면 JS 오류 발생!
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩중'}
        {!loadingUsers && users && (
          // 마찬가지! map에서 users를 기다리고 있는데 없으면 JS 오류 발생
          // 따라서 users && 를 통해 유효성 검사
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username}({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
