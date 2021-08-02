export function getStrapiURL(path = "") {
    return `${
      process.env.NEXTJS_PUBLIC_URL || "http://localhost:1212"
    }${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }