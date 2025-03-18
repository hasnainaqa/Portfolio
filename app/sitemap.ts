import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hasnainafzal.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hasnainafzal.vercel.app/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hasnainafzal.vercel.app/services",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hasnainafzal.vercel.app/admission-process",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://hasnainafzal.vercel.app/contact",
      lastModified: new Date().toISOString(),
    },
  ];
}

export const headers = () => {
  return {
    "Content-Type": "application/xml",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  };
};
