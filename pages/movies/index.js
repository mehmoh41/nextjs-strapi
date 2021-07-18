import { API_URL } from "../../config/index";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head'
import {useState} from 'react';
import { useRouter } from "next/router";
// import ReactPaginate from 'react-paginate-next';



export default function Home({ movies, page ,noOfMovies}) {
    
  const router = useRouter();
  const [disable , setDisable] = useState(false);
    const lastPage = Math.ceil(noOfMovies/2);

  return (
    <>
    <Head>
      <title>Movies</title>
    </Head>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.name}</Link>
          </div>
        );
      })}
      {/* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={3}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          
          onPageChange={pageChanged}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> */}
      <button
        className={`${page<=1 ? 'disabled:opacity-50 cursor-not-allowed ml-5 my-3 px-4 py-2' : 'bg-black ml-5 my-3 px-4 py-2 text-white hover:bg-white hover:text-black transition-all'} `}
        disabled={page <= 1}
        onClick={() => router.push(`/movies?page=${page - 1}`)}
      >
        prev
      </button>
      <button
        className={`${page>=lastPage ? 'disabled:opacity-50 cursor-not-allowed ml-5 my-3 px-4 py-2' : 'bg-black ml-5 my-3 px-4 py-2 text-white hover:bg-white hover:text-black transition-all'} `}
        disabled={page >= lastPage}
        onClick={() => router.push(`/movies?page=${page + 1}`)}
      >
        Next
      </button>
    
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  //  here we used because getStaticProps is not taking any query as it's params
  const start = +page === 1 ? 0 : (+page - 1) * 2;
  const getNoOfMovies = await fetch(`${API_URL}/movies/count`);
  const noOfMovies = await getNoOfMovies.json();
  const response = await fetch(`${API_URL}/movies?_limit=2&_start=${start}`);
  
  const movies = await response.json();
  //   const count = await fetch(`${API_URL}/movies/count`);

  return {
    props: {
      movies,
      page: +page,
      noOfMovies,
      //   count
    },
  };
}

