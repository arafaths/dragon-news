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
      <div className="bg-gray-100 col-span-1">
        <p className="text-gray-800 text-xl font-semibold mb-4">All Category</p>
        <ul className="">
          {
            categoriesData.map(cg => {
              return <li key={cg.category_id}>{cg.category_name}</li>;
            })
          }
        </ul>
      </div>

      <div className="bg-gray-100 col-span-2">
        <p>Dragon News Home</p>
      </div>
      <div className="bg-gray-100 col-span-1">
        <p>Login With</p>
      </div>
    </div>
  );
}
