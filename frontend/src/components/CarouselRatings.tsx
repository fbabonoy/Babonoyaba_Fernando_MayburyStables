"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import "swiper"
// @ts-ignore
import 'swiper/css'



const ratings = [
  {
    name: "Ann T.",
    rating: 5,
    comment: "We had a wonderful time today on a trail ride with Brandy. She was a great guide, our horses were so well behaved and the land was beautiful. I cannot praise them enough!! Thank you for a special day ❤️"
  },
  {
    name: "Wendy M.",
    rating: 5,
    comment: "Fantastic ride! Our guide was so friendly and really made sure we had a comfortable ride and experience. They are great! Highly recommend! The trails and fields are beautiful. A great escape into nature ❤️🐎"
  },
  {
    name: "Lisa P.",
    rating: 5,
    comment: "Our experience at Maybury Stables was fantastic! From start to finish, the whole day was enjoyable. The trail ride was awesome and the staff are knowledgeable and answered any questions the riders may have. I HIGHLY recommend this stable. Trish and her staff are top notch."
  },
  {
    name: "Susan S.",
    rating: 5,
    comment: "I had a great ride with Haley! The trails were clear and clean. Zac was a perfect gentleman throughout the ride. It was very evident that the horses and riders well-being were a high priority for Trish and her staff. Looking forward to riding with them again."
  },
  {
    name: "Lisa K.",
    rating: 5,
    comment: "So happy to have Maybury Stables open again. Our group had an amazing time on our ride. Can’t wait to do it again. New owner and staff were all so friendly and helpful. Highly recommend!"
  },
  {
    name: "Lisa S.",
    rating: 5,
    comment: "It was an awesome trail ride. They took good care of me, everyone is very friendly, the horses are in very good condition, reliable and it was pure fun. I highly recommend Maybury Stables ♥️ I will come back for another trail ride. It‘s absolutely worth it."
  },
  {
    name: "Rachel D.",
    rating: 5,
    comment: "My family and I had the pleasure of participating in both the pony experience and a trail ride for my older daughter. The staff were amazing and very knowledgeable and patient with my kiddos. I definitely recommend Maybury Stables."
  }
];



const CarouselRatings = () => {
  return (
    <div className="w-full px-4 md:px-6 mb-7">
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        1500: {
          slidesPerView: 3, // Show 3 slides on screens larger than 640px
        },
        640: {
          slidesPerView: 2, // Show 3 slides on screens larger than 640px
        },
        0: {
          slidesPerView: 1, // Show 1 slide on small screens (default)
        },
      }}
    >
        {ratings.map((review, index) => (
          <SwiperSlide
          key={index}
          className="p-8 border rounded-lg shadow-lg bg-cyan-800 border-b-cyan-700 flex items-stretch"
        >
          <div className="flex flex-col items-center mb-1 h-full justify-between min-h-[180px]">
            <span className="text-xl font-semibold text-amber-50">{review.name}</span>
            {/* <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span> */}
            <span className="text-amber-50 line-clamp-6 text-center min-h-full">{review.comment}</span>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselRatings;
