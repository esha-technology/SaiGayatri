import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = [
    {
      name: "Benjamin Martinez",
      comment:
        "Sai Gayatri Greentech provided excellent service and a seamless installation. My energy bills have gone down, and I’m proud to go green with their solar solutions!",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Laura Simmons",
      comment:
        "The team was professional and efficient. My solar system is already saving me money and helping the environment. Highly recommend!",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "John Davis",
      comment:
        "Great service from Sai Gayatri Greentech. The solar installation was quick, and I’ve already noticed the savings on my electricity bill.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Emily Turner",
      comment:
        "Sai Gayatri Greentech made the whole solar installation process easy and stress-free. I’m seeing reduced energy costs and couldn’t be happier.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Michael Williams",
      comment:
        "Fantastic experience with Sai Gayatri Greentech. Their team delivered a great solar solution, and I’m already saving on my electricity bill.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Sophia Lee",
      comment:
        "Great service from Sai Gayatri Greentech. The team helped me choose the right system, and now I’m saving money with my new solar panels!",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
  ];

  return (
    <div className="mx-auto  w-full my-20   px-4 sm:px-6 lg:px-8 ">
      <div className="mb-16">
        <span className="text-sm text-gray-500 font-medium text-center block mb-2">
          TESTIMONIAL
        </span>
        <h2 className="text-4xl text-center font-bold text-gray-900">
          What our happy users say!
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              key={index}
              name={review.name}
              comment={review.comment}
              profileImg={review.profileImg}
            />
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
};

export default Review;
