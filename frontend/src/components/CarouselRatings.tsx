"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import "swiper"
// @ts-ignore
import 'swiper/css'



const ratings = [
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Absolutely fantastic! The staff was friendly, and the ride was breathtaking.",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment: "Had a great time! The views were stunning, but I wish there were more shade stops.",
  },
  {
    name: "Robert Wilson",
    rating: 5,
    comment: "Perfect experience! The horses were well cared for, and the guide was very knowledgeable.",
  },
  {
    name: "Sophia Martinez",
    rating: 3,
    comment: "Decent ride, but the saddle was a bit uncomfortable for a long journey.",
  },
  {
    name: "David Anderson",
    rating: 5,
    comment: "A wonderful adventure! Would highly recommend it to anyone looking for a peaceful escape.",
  }
];


const CarouselRatings = () => {
  return (
    <div className="w-full px-4 mb-7">
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: {
          slidesPerView: 3, // Show 3 slides on screens larger than 640px
        },
        0: {
          slidesPerView: 1, // Show 1 slide on small screens (default)
        },
      }}
    >
        {ratings.map((review, index) => (
          <SwiperSlide key={index} className="p-8 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col items-center gap-2 mb-2">
              <span className="text-xl font-semibold text-stone-600">{review.name}</span>
              <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-700 line-clamp-3 text-center">{review.comment}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselRatings;
