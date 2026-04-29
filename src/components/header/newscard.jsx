import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <Image
            src={news.author.img}
            alt={news?.author.name || ''}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{news.author.name}</h3>
            <p className="text-sm text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{news.title}</h2>
      </div>

      {/* Image */}
      <div className="px-4">
        <Image
          unoptimized
          src={news?.image_url}
          alt={news.title}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-500 text-sm line-clamp-2">{news.details}</p>

        <Link href={`/news/${news._id}`}>
          <button className="text-orange-500 font-semibold mt-2">
            Read More
          </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t-2 border-t-gray-200">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-gray-600 ml-2">{news.rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;