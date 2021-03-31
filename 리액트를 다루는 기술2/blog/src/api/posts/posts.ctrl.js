// id 초깃값
let postId = 1;

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// 포스트 작성 : POST/api/posts
exports.write = (ctx) => {
  // ctx.request.body에서 REST API의 Request Body 조회 o
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// 포스트 목록 조회 : GET/api/posts
exports.list = (ctx) => {
  ctx.body = posts;
};

// 특정 포스트 조회 : GET/api/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  // 주어진 id 값으로 포스트 찾음
  // 파라미터로 받아 온 값은 문자열 형식 -> 얘를 숫자로 변환하거나 비교할 p.id 를 문자열로 바꿔줘야함
  const post = posts.find((p) => p.id.toString() === id);

  // 포스트가 없으면 오류 반환
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다',
    };
    return;
  }
  ctx.body = post;
};

// 특정 포스트 제거 ; DELETE/api/posts/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;

  // 해당 id의 post가 몇 번째인지 확인
  const index = posts.findIndex((p) => p.id.toString() === id);

  // 포스트 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트 존재 안함',
    };
    return;
  }
  // index 번째 아이템을 제거
  posts.splice(index, 1);
  ctx.status = 204; //   no content 에러
};

// 포스트 수정(교체) : PUT/api/posts/:id
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트 존재 안함',
    };
    return;
  }

  //   PUT -> 객체 전체를 덮어 씌운 후, 통째로 교채
  // 따라서 id 제외한 기존 정보 모조리 날린 후, 객체 새로 만듬
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

// 포스트 수정(변경) : PATCH/api/posts/id
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트 존재 안함',
    };
    return;
  }

  // 기존 값에 정보 덮어 씌움
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
