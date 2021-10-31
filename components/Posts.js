import Post from "./Post";
import faker from "faker";

const posts = [
  {
    id: "123",
    username: faker.helpers.contextualCard().name,
    profilePic: faker.helpers.contextualCard().avatar,
    img: faker.helpers.contextualCard().avatar,
    caption: "SUBSCRIBE TO DESTROY the LIKE BUTTON",
  },
  {
    id: "124",
    username: faker.helpers.contextualCard().name,
    profilePic: faker.helpers.contextualCard().avatar,
    img: faker.helpers.contextualCard().avatar,
    caption: "SUBSCRIBE TO DESTROY the LIKE BUTTON",
  },
];

function Posts() {
  return posts.map(({ id, username, profilePic, img, caption }) => (
    <Post key={id} username={username} profilePic={profilePic} img={img} caption={caption} />
  ));
}

export default Posts;
