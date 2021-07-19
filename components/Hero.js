import Link from "next/link"
import ImageComponentity from "./ImageComponentity";
import Image from 'next/image'
export default function Hero({ posts}) {
  

  const first = posts.blogs[0]    
  const rest = posts.blogs.slice(1)

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 relative">
        <div className="p-5">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className=" flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
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
              <Link href={`/category/fashion`}>
                <a className="font-semibold inline-block text-indigo-500">
                  Fashion
                </a>
              </Link>
            </div>
            <Link href={`/category/fashion`}>
              <a>See All</a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
              <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center" key={first.id}>
                <Image src={first.image.url} alt={first.title} width={600} height={350}/>
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <Link href={`/post/${first.slug}`}>
                <a className="text-xs bg-indigo-600  px-5 py-2 uppercase hover:text-indigo-600 transition ease-in-out duration-500">
                  Featured
                </a>
                </Link>
              
                <div className="font-regular flex flex-col justify-start">
                  <span className="text-3xl leading-0 font-semibold inline-block text-center">25</span>
                  <span className="mt-1">{first.created_at}</span>
                </div>
              </div>
              <main className="p-5 z-10 absolute">
                <Link href={`/post/${first.slug}`}>
                <a className="text-white text-md tracking-tight font-semibold leading-12 font-regular hover:underline text-2xl">
                  {first.title}
                </a>
                </Link>
              </main>
            </div>

          <div>
          <div className="lg:border-l lg:pl-4">
              {rest.map((post, index) => {
                return (
                  <div className="flex items-start mb-3 pb-3" key={index}>
                    <Link href={`/post/${post.slug}`}>
                      <Image src={post.image.url} alt={post.title} height={80} width={80} />
                    </Link>
                    
                    <div className="text-sm">
                      <p className="text-xs">{post.created_at}</p>
                      <Link href={`/post/${post.slug}`}>
                      <a className="text-gray-400 font-medium hover:text-gray-200 leading-none">
                        {post.title}
                      </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </div>
      </div>
    
    </>
  
  );
}
