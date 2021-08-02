import Hero from "../components/Hero";
import Sport from "../components/Sport";
import Family from "../components/Family";
import Trend from "../components/Trends";
import Parent from "../components/Parent";
import Head from 'next/head'
import Seo from "../components/seo";
import Top from "../components/Top";

export default function Home({ container }) {

  return (
    <>
    {/* <Seo seo={homepage.seo} /> */}

    {container.map((item,index)=>{

      // item.item.component == "SPO"
      if(item.item.component == "FASHION") {
        return <Hero posts={item} key={index}/>
      }
      if(item.item.component == "SPORTS") {
        return <Sport posts={item} key={index}/>
      }
      if(item.item.component == "TECHNOLOGY") {
        return <Parent posts={item} key={index}/>
      }
      if(item.item.component == "GLOBALS") {
        return <Parent posts={item} key={index}/>
      }
      if(item.item.component == "FAMILY") {
        return <Family posts={item} key={index}/>
      }
      if(item.item.component == "TAGS") {
        return <Trend posts={item} key={index}/>
      }
      if(item.item.component == "TOP") {
        return <Top posts={item} key={index}/>
      }
    })}
    </>
  );
}
// make variable one for category_name , and the other for number of post 
export async function getStaticProps() {

  const items = [
    {
      type: 'categories.category_name',
      slug: 'fashion',
      limit: 4,
      component: 'FASHION',
    },
    {
      type: 'categories.category_name',
      slug: 'sports',
      limit: 3,
      component: "SPORTS",

    },
    {
      type: 'categories.category_name',
      slug: 'technlogy',
      limit: 3,
      component: "TECHNOLOGY"
    },
    {
      type: 'categories.category_name',
      slug: 'global',
      limit: 4,
      component: "GLOBALS"
    },
    {
      type: 'categories.category_name',
      slug: 'family',
      limit: 3,
      component: "FAMILY"
    },
    {
      type: 'tags',
      slug: '',
      limit: 10,
      component: "TAGS"
    },
    {
      type: 'categories.category_name',
      slug: 'top',
      limit: 1,
      component: "TOP"
    },
    
  ]
  
  let container = []
  for (const item of items) {
      const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?${item.type}=${item.slug}&_limit=${item.limit}`)
      const all_tags = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/tags`)
      const tags = await all_tags.json()
      const blogs = await res.json()
      container.push({item: item, blogs: blogs,tags:tags})
  }


  return {
    props: { container },
    // Re-generate the post at most once per second
    // if a request comes in
    // revalidate: 1,
  };
}

