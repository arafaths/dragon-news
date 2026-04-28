import LeftSiteBar from "@/components/header/leftsitebar";
import RightSiteBar from "@/components/header/rightsitebar";
import Image from "next/image";

const getCategory = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categoriesData = await getCategory();
  
  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto px-5 mt-4">
      {/* left site bar */}
      <div className="col-span-1">
        <LeftSiteBar categoriesData={categoriesData} activeId={'01'}/>
      </div>

      {/* center bar */}
      <div className="bg-gray-100 col-span-2">
        <p>Dragon News Home</p>
      </div>

      {/* right site bar */}
      <div className="col-span-1">
        <RightSiteBar/>
      </div>
    </div>
  );
}
