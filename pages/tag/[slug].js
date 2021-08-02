import Link from "next/link";
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function postByCategory({tags,posts}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
    return (
        <>
            
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">    
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              tags.length === 0 ? 'Not Found' :
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
    const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/tags`);
    const tags = await res.json();
  
    const slugs = [];
    tags.forEach((tag) => {
      slugs.push({ params: { slug: tag.slug } });
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
  
    const all_tags = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/tags?slug=${slug}`);
    const tags = await all_tags.json();
    let posts = null
    let tag_slug = null
    if(tags.length > 0) {
      tag_slug = tags[0].slug
     const tag_posts = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?tags.slug=${tag_slug}`);
     posts = await tag_posts.json()

    }
  
    return {
      props: { tags,posts },
      // Re-generate the post at most once per second
      // if a request comes in
      // revalidate: 1,
    };
  }
  