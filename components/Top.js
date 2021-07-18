import Link from 'next/link'
import Image from 'next/image'
export default function Top({posts}) {
    const top = posts.blogs

    return (
        <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        {top && top.map((t,index) => {
                return (
                  <div className="rounded overflow-hidden max-w-screen-xl mx-auto" key={index}>
            
                  <div className="sm:flex justify-between items-center pt-4 px-2">
                    <Link href={`post/${t.slug}`}>
                    <a className="sm:w-8/12 font-medium text-md inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                      {t.title}
                    </a>
                    </Link>
                    
                    <div className="sm:w-4/12 flex items-center sm:px-6 pb-4">
                      <a 
                      // href="#"
                      >
                        <img
                          className="w-10 h-10 rounded-full mr-2"
                          src="https://tailwindcss.com/img/jonathan.jpg"
                          alt="Avatar of Jonathan Reinink"
                        />
                      </a>
                      <div className="text-xs">
                        <a
                          // href="#"
                          className="text-gray-900 font-medium leading-none hover:text-indigo-600"
                        >
                            Ali Mohammadi
                          </a>
                        <p className="text-gray-600 text-xs">{t.created_at}</p>
                      </div>
                    </div>
                  </div>
        
                  <div className="relative mx-auto">
                    <Link href={`post/${t.slug}`}>
                    <a>
                      <Image src={t.image.url} width={800} height={400} className="w-full"/>
                    </a>
                    </Link>
                    <Link href={`category/top`}>
                    <a className="hidden absolute z-10 text-xs absolute bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center">
                      <span className="text-lg">|</span>&nbsp;&nbsp;<span>TOP</span>
                    </a>
                    </Link>
                  </div>
                  <span
                    className="p-5 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      height="13px"
                      width="13px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
              c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
              c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="ml-1">6 mins ago</span>
                  </span>
                </div>
                      
                )
            })}
          
        </div>
  
    )

}