// n초 뒤에 끝나는 프로미스
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}
const posts = [
  { id: 1, title: "redux-middleware", body: "learn redux-middleware" },
  { id: 2, title: "react-typescript", body: "learn react-typescript" },
  { id: 3, title: "redux-saga", body: "learn redux-saga" },
];

// 0.5초 뒤에 posts 배열 반환
export const getPost = async () => {
  await sleep(500);
  return posts;
};

// 특정 post 반환
export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
