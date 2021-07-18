import Hero from "../components/Hero";
import Sport from "../components/Sport";
import Family from "../components/Family";
import Trend from "../components/Trends";
import Parent from "../components/Parent";
import Head from 'next/head'
import Top from "../components/Top";

export default function Home({ container }) {

  return (
    <>
    <Head>
        <title>Strapi-NextJs Theme</title>
        <meta name='description' content='Componentity Team has made a Strapi-NEXTJS theme' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />

        <meta property='og:title' content='Componentity NextJs Strapi Theme' />
        <meta property='og:description' content='Componentity Team has made a WP-NEXTJS theme' />
        <meta property='og:image' content='/seoindex.png' />
        <meta name='twitter:image' content='/seoindex.png' />
        <meta name='twitter:image:alt' content='Componentity.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@componentity' />
        <meta name='twitter:creator' content='@componentity' />
        <meta property='og:url' content='http://theme-blog.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Componentity' />
      </Head>
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
      limit: 4,
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
    revalidate: 1,
  };
}

