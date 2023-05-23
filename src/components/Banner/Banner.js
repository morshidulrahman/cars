import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full my-5">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src="/images/banner/1.jpg" className="w-full h-full rounded-xl" />
        <div className="absolute flex flex-col w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515ad] to-[#15151518] rounded-xl">
          <div className="w-1/3 text-white mt-40 ml-12 space-y-8">
            <h2 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 mt-4 items-center">
              <button className="border border-[#FF3811] px-4 py-3 rounded-md text-white bg-[#FF3811] font-semibold">
                Discover more
              </button>
              <button className="border  px-4 py-3 rounded-md text-white font-semibold">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-10  bottom-14 space-x-4">
          <a href="#slide4" className="btn btn-circle bg-opacity-70">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src="/images/banner/2.jpg" className="w-full h-full rounded-xl" />
        <div className="absolute flex flex-col w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515ad] to-[#15151518] rounded-xl">
          <div className="w-1/3 text-white mt-40 ml-12 space-y-8">
            <h2 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 mt-4 items-center">
              <button className="border border-[#FF3811] px-4 py-3 rounded-md text-white bg-[#FF3811] font-semibold">
                Discover more
              </button>
              <button className="border  px-4 py-3 rounded-md text-white font-semibold">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-10  bottom-14 space-x-4">
          <a href="#slide1" className="btn btn-circle bg-opacity-70">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src="/images/banner/3.jpg" className="w-full h-full rounded-xl" />
        <div className="absolute flex flex-col w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515ad] to-[#15151518] rounded-xl">
          <div className="w-1/3 text-white mt-40 ml-12 space-y-8">
            <h2 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 mt-4 items-center">
              <button className="border border-[#FF3811] px-4 py-3 rounded-md text-white bg-[#FF3811] font-semibold">
                Discover more
              </button>
              <button className="border  px-4 py-3 rounded-md text-white font-semibold">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-10  bottom-14 space-x-4">
          <a href="#slide2" className="btn btn-circle bg-opacity-70">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src="/images/banner/4.jpg" className="w-full h-full rounded-xl" />
        <div className="absolute flex flex-col w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515ad] to-[#15151518] rounded-xl">
          <div className="w-1/3 text-white mt-40 ml-12 space-y-8">
            <h2 className=" font-bold text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 mt-4 items-center">
              <button className="border border-[#FF3811] px-4 py-3 rounded-md text-white bg-[#FF3811] font-semibold">
                Discover more
              </button>
              <button className="border  px-4 py-3 rounded-md text-white font-semibold">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-10  bottom-14 space-x-4">
          <a href="#slide3" className="btn btn-circle bg-opacity-70">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
