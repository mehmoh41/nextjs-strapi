import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../../config";

export default function postByCategory({categories}) {
    console.log('categories' , categories)
    return (
        <>
            {
                categories[0].movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <Link href={`/movies/${movie.slug}`}>{movie.name}</Link>
                            <p>{movie.description}</p>
                        </div>
                    );
                })
            }
        </>
    );
}
export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/categories`);
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
  
    const cats = await fetch(`${API_URL}/categories?slug=${slug}`);
    const categories = await cats.json();
  
    return {
      props: { categories },
      // Re-generate the post at most once per second
      // if a request comes in
      revalidate: 1,
    };
  }
  