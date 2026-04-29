import RightSiteBar from '@/components/header/rightsitebar';
import { getNews } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNews(id);
  console.log(news);
  if (!news) {
    return <p>not found</p>;
  }
  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto px-5 mt-4">
      {/* news */}
      <div className="col-span-3">
        <p className="text-gray-800 text-xl font-semibold mb-4">Dragon News</p>
        <div className="mx-auto bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          {/* Image */}
          <div className="w-full">
            <Image
              unoptimized
              src={news.image_url}
              alt={news.title}
              width={900}
              height={500}
              className="rounded-lg w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800 leading-snug">
            {news.title}
          </h1>

          {/* Meta */}
          <p className="text-sm text-gray-500 mt-2">
            {news.author?.published_date} | Tags: {news.tags?.join(', ')}
          </p>

          {/* Content */}
          <div className="mt-4 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>{news.details}</p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link href={`/category/${news.category_id}`}>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm font-medium transition">
                ← All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* right site bar */}
      <div className="col-span-1">
        <RightSiteBar />
      </div>
    </div>
  );
};

export default NewsPage;
