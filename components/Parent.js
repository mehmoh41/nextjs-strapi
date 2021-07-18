import Global from "./Global";
import Technology from "./Technlogoy";


export default function Parent({ posts }) {
  
  const Tech = <Technology posts={posts} />;
  const Glob = <Global posts={posts} />;

  
  if (posts.item.component == "TECHNOLOGY") {
    return Tech;
  }
  if (posts.item.component == "GLOBALS") {
    return Glob;
  }

  
}
