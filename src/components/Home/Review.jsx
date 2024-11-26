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
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Laura Simmons",
      comment:
        "The team was professional and efficient. My solar system is already saving me money and helping the environment. Highly recommend!",
      profileImg:
        "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
    },
    {
      name: "John Davis",
      comment:
        "Great service from Sai Gayatri Greentech. The solar installation was quick, and I’ve already noticed the savings on my electricity bill.",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Emily Turner",
      comment:
        "Sai Gayatri Greentech made the whole solar installation process easy and stress-free. I’m seeing reduced energy costs and couldn’t be happier.",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      name: "Michael Williams",
      comment:
        "Fantastic experience with Sai Gayatri Greentech. Their team delivered a great solar solution, and I’m already saving on my electricity bill.",
      profileImg:
        "https://media.istockphoto.com/id/1618846975/photo/smile-black-woman-and-hand-pointing-in-studio-for-news-deal-or-coming-soon-announcement-on.jpg?s=612x612&w=0&k=20&c=LUvvJu4sGaIry5WLXmfQV7RStbGG5hEQNo8hEFxZSGY=",
    },
    {
      name: "Sophia Lee",
      comment:
        "Great service from Sai Gayatri Greentech. The team helped me choose the right system, and now I’m saving money with my new solar panels!",
      profileImg:
        "https://media.istockphoto.com/id/1162414604/photo/african-american-business-woman-over-isolated-yellow-background-smiling-showing-both-hands.jpg?s=612x612&w=0&k=20&c=x_yVbRm7dyuz4tD3YGCOD-Luj9lFcRKtiUCYx53y7Es=",
    },
  ];

  return (
    <div className="mx-auto  w-full my-20   px-4 sm:px-6 lg:px-8 ">
      <div className="mb-8">
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
