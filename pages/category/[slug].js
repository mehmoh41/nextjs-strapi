import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function postByCategory({categories , posts}) {
  
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
    return (
        <>
            
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">    
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              categories.length === 0 ? 'Not found' :
                posts.map(post => {
                    return (
                        <div className="flex items-start border p-2" key={post.id}>
                            <Link href={`/post/${post.slug}`}>
                            <a className="inline-block mr-2">
                                <div className="bg-cover bg-center">
                                <Image src={post.image.url} alt={post.title} height={80} width={80} />
                                </div>
                            </a>
                            </Link>
                        
                        <div className="text-sm w-2/3">
                        <Link href={`/post/${post.slug}`}>
                        <a className="text-gray-400 font-medium hover:text-indigo-600 leading-none">
                                {post.title}  
                          </a>
                        </Link>
                          
                          <p className="text-gray-500 text-xs">{post.created_at}</p>
                        </div>
                      </div>
                                  
                    );
                })
               
            }
          
        </div>
      </div>
 
        </>
    );
}
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/categories`);
    const categories = await res.json();
  
    const slugs = [];
    categories.forEach((category) => {
      slugs.push({ params: { slug: category.slug } });
    });
  
    return {
      // Only `/posts/1` and `/posts/2` are generated at build time
      paths: slugs,
      // Enable statically generating additional pages
      // For example: `/posts/3`
      fallback: true,
    };
  }
  
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const { slug } = params;
  
    const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/categories?slug=${slug}`);
    const categories = await res.json();


    let posts = null
    let cat_slug = null
    if(categories.length > 0) {
       cat_slug = categories[0].slug
       const cat_posts = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?categories.slug=${cat_slug}`);
       posts = await cat_posts.json()
    }
  
    return {
      props: { categories,posts },
      // Re-generate the post at most once per second
      // if a request comes in
      // revalidate: 0,
    };
  }
  