import Global from "./Global";
import Technology from "./Technlogoy";
import Main from "./Main";

export default function Parent({ posts }) {
  console.log("PARENT POSTS", posts);
  const Tech = <Technology posts={posts} />;
  const Glob = <Global posts={posts} />;

  
  if (posts.item.component == "TECHNOLOGY") {
    return Tech;
  }
  if (posts.item.component == "GLOBALS") {
    return Glob;
  }

  
}
