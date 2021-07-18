import Link from 'next/link'
export default function Post({post , post_cat}) {
  
  let i = 0;
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover h-64 text-center overflow-hidden"
          title="Woman holding a mug"
        >
          {/* image comes here */}
          <img className="flex justify-center block mx-auto" src={post[0] && post[0].image.url} alt={post[0].title}/>
        </div>
        <div className="max-w-screen-lg mx-auto my-10 px-10">
          <h1 className="text-gray-300 font-bold text-3xl mb-2">
            {post[0].title}
          </h1>
          <div className="text-gray-700 text-xs flex my-6 flex justify-between">
            <div className="flex items-center">
              {/* author image */}
                {/* <img
                  className="w-12 h-12 rounded-full mr-2"
                  src={API_URL + post[0].image.url}
                  alt={post.title}
                /> */}
              
              <div className="text-sm">
                <a
                  href="#"
                  className="text-gray-900 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  ali mohammadi
                </a>
                <p className="text-gray-400 text-xs">{post[0].created_at}</p>
              </div>
            </div>
            <div className="flex-row flex">
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer hover:text-gray-500 text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Twitter"
                    d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"
                  ></path>
                </svg>
              </a>
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer hover:text-gray-500 text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Facebook"
                    d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                  ></path>
                </svg>
              </a>
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer hover:text-gray-500 text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    id="Shape"
                    d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 relative px-10">
          <div className="lg:col-span-8">
            <div className="content">
              {post[0].content}
              <div className="tags">
                {
                  post[0].tags && post[0].tags.map((tag) => {
                    return (
                      <Link href={`/tag/${tag.tag_name}`} key={tag.id}>
                          <a className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-1">
                              #{tag.tag_name}
                          </a>
                      </Link>
                    )
                  })
                }
                                
              </div>
            </div>
          </div>
{/* related post */}
          <div className="lg:col-span-4 lg:border-l lg:pl-5 ">
            <div className="border-b mb-5 text-sm">
              <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                <svg
                  className="h-6 mr-3"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 455.005 455.005"
                >
                  <g>
                    <path
                      d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343
          c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428
          c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423
          c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615
          c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595
          l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72
          C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196
          c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956
          c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004
          C455.004,277.119,451.78,270.719,446.158,267.615z"
                    />
                    <path
                      d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126
          c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126
          C350.916,232.303,352.298,232.676,353.664,232.676z"
                    />
                    <path
                      d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82
          c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905
          C320.941,252.21,322.318,252.58,323.68,252.58z"
                    />
                    <path
                      d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062
          c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"
                    />
                    <path
                      d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219
          c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37
          c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464
          c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351
          c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"
                    />
                    <path
                      d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409
          c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132
          C266.219,292.387,268.669,291.131,270.089,288.846z"
                    />
                    <path
                      d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132
          c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455
          C60.338,188.266,55.714,189.346,53.527,192.864z"
                    />
                  </g>
                </svg>
                <a href="#" className="font-semibold inline-block">
                  Related Posts
                </a>
              </div>
            </div>

            {
              
            post_cat &&
          post_cat.map((post) => {
            
            //TODO: how to tell don't show it's own movie in related movies
            return (
              // <div key={post.id} className={classes.related}>
              //   <Link href={`${post.slug}`}>{post.name}</Link>
              // </div>
              <div className="my-4 flex" key={post.id}>
              <span className="text-gray-600 font-bold text-3xl mr-4">{++i}.</span>
              <div className="text-md border-b pb-4">
              <Link href={`/post/${post.slug}`}>
                
                <a className="text-gray-400 hover:text-indigo-300 font-semibold">
                {post.title}  
                </a>
              </Link>
                
                {/* <p className="text-gray-500 text-sm">
                  {post.excerpt}
                </p> */}
              </div>
            </div>
            );
          })}

            
          
          </div>
{/* end of related post */}
        </div>
      </div>
    </>
  );
}


export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts`);
  const posts = await res.json();

  const slugs = [];
  posts.forEach((post) => {
    slugs.push({ params: { slug: post.slug } });
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

  const res = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?slug=${slug}`);
  const cats = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/categories`);

  const categories = await cats.json();
  const post = await res.json();
  let id;
  post[0].categories.map((c) => {
    return (id = c.id);
  });
  

  const post_cats = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?categories=${id}&_sort=created_at:DESC&_limit=4`);
  const post_cat = await post_cats.json();

  return {
    props: { post, categories, post_cat },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
