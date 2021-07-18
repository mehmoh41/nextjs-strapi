import Image from "next/image";
import Link from "next/link";

export default function postByCategory({categories}) {
    console.log('categories' , categories)
    return (
        <>
            
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">    
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                categories[0].posts ? categories[0].posts.map(post => {
                    return (
                        <div className="flex items-start border p-2" key={post.id}>
                            <Link href={`/post/${post.slug}`}>
                            <a className="inline-block mr-2">
                                <div className="w-20 h-20 bg-cover bg-center">
                                    <img src={post.image.url} />
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
                : "No Post available for this category"
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
  
    const cats = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/categories?slug=${slug}`);
    const categories = await cats.json();
  
    return {
      props: { categories },
      // Re-generate the post at most once per second
      // if a request comes in
      revalidate: 1,
    };
  }
  