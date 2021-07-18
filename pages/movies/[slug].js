import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'
import { API_URL } from "../../config";
import classes from "../../styles/related.module.css";

export default function Movie({ movie, movie_cat }) {
  console.log("related post by category", movie_cat);
  console.log("movie post by category", movie[0].categories);
  return (
    <>
    <Head>
      <title>
        {movie[0].name}
      </title>
    </Head>
      <div>
        {/* displaying the single movie */}
        <h1>{movie[0].name}</h1>
        <Image src={API_URL + movie[0].image.url} width={850} height={350} />
        <p>{movie[0].description}</p>
        <Link href="/movies">
          <a>Go Back</a>
        </Link>
        <h2>Categories</h2>

        {/* displaying the movies by category */}
        {movie[0].categories
          ? movie[0].categories.map((category) => {
              return (
                <div>
                  <Link href={`/category/${category.slug}`}>
                    {category.category_name}
                  </Link>
                </div>
              );
            })
          : "not category found"}

        {/* {categories.map((category) => {
        return (
          <div>
            <Link href={`/category/${category.slug}`}>{category.category_name}</Link>
          </div>
        );
      })} */}
        {/* displaying related movie */}
        <h2>Related Movies</h2>
        {movie_cat &&
          movie_cat.map((mov_cat) => {
            
            //TODO: how to tell don't show it's own movie in related movies
            return (
              <div key={mov_cat.id} className={classes.related}>
                <Image
                  className={classes.img}
                  src={API_URL + mov_cat.image.url}
                  width={150}
                  height={150}
                />
                <Link href={`${mov_cat.slug}`}>{mov_cat.name}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/movies`);
  const movies = await res.json();

  const slugs = [];
  movies.forEach((movie) => {
    slugs.push({ params: { slug: movie.slug } });
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

  const res = await fetch(`${API_URL}/movies?slug=${slug}`);
  const cats = await fetch(`${API_URL}/categories`);

  const categories = await cats.json();
  const movie = await res.json();
  let id;
  movie[0].categories.map((c) => {
    return (id = c.id);
  });
  

  const movie_cats = await fetch(`${API_URL}/movies?categories=${id}`);
  const movie_cat = await movie_cats.json();

  return {
    props: { movie, categories, movie_cat },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
