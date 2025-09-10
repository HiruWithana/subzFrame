import React from "react";
import NavBar from "./Navbar";
import heroBg from "./assets/gtr.png";
import carHero from "./assets/heroBg.png";
import back from "./assets/back.jpg";
import side from "./assets/side.jpg";
import side2 from "./assets/side2.jpg";
import top from "./assets/top.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import car1 from "./assets/cars/car1.png";
import car4 from "./assets/cars/car2.png";
import car3 from "./assets/cars/car3.png";
import car2 from "./assets/cars/car4.png";
import car5 from "./assets/cars/car5.png";
import car6 from "./assets/cars/car6.png";

import f1 from "./assets/F1/f11.png";
import f2 from "./assets/F1/f12.png";
import f3 from "./assets/F1/f13.png";
import f4 from "./assets/F1/f14.png";

import frame1 from "./assets/frames/frame1.webp";
import frame2 from "./assets/frames/frame2.webp";
import frame3 from "./assets/frames/frame3.webp";
import frame4 from "./assets/frames/frame4.webp";
import frame5 from "./assets/frames/frame5.webp";

import carGTR from "./assets/cars/lambo.png";
import yellow from "./assets/cars/f1.png";
import red from "./assets/cars/f1New.png";
import banner from "./assets/cars/banner.png";

const cars = [
  {
    id: 1,
    name: "Gumpert Apollo IE V12",
    model: "Premium Edition",
    price: "$120",
    scale: "1:18",
    year: 2022,
    manufacturer: "Gumpert",
    production: "Apollo IE",
    engine: "V12",
    image: car1,
  },
  {
    id: 2,
    name: "Aston Martin Vanquish",
    model: "Collector's Edition",
    price: "$95",
    scale: "1:24",
    year: 2021,
    manufacturer: "Aston Martin",
    production: "Vanquish",
    engine: "V8",
    image: car2,
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    model: "SVJ Roadster",
    price: "$150",
    scale: "1:12",
    year: 2023,
    manufacturer: "Lamborghini",
    production: "Aventador SVJ",
    engine: "V12",
    image: car3,
  },
  {
    id: 4,
    name: "Ferrari F40",
    model: "Classic Red",
    price: "$180",
    scale: "1:18",
    year: 1990,
    manufacturer: "Ferrari",
    production: "F40",
    engine: "V8 Twin-Turbo",
    image: car4,
  },
  {
    id: 5,
    name: "Lamborghini Countach",
    model: "Track Edition",
    price: "$140",
    scale: "1:24",
    year: 2020,
    manufacturer: "Porsche",
    production: "911 GT3 RS",
    engine: "4.0L Flat-6",
    image: car5,
  },
  {
    id: 6,
    name: "Porsche 911 GT3 RS",
    model: "Heritage Edition",
    price: "$110",
    scale: "1:18",
    year: 2019,
    manufacturer: "Porsche",
    production: "911 GT3 RS",
    engine: "4.0L Flat-6",
    image: car6,
  },
];

const f1Cars = [
  {
    id: 1,
    name: "Ferrari F40",
    model: "Classic Red",
    price: "$180",
    scale: "1:18",
    year: 1990,
    manufacturer: "Ferrari",
    production: "F40",
    engine: "V8 Twin-Turbo",
    image: f1,
  },
  {
    id: 2,
    name: "Porsche 911 GT3 RS",
    model: "Track Edition",
    price: "$140",
    scale: "1:24",
    year: 2020,
    manufacturer: "Porsche",
    production: "911 GT3 RS",
    engine: "4.0L Flat-6",
    image: f2,
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    model: "SVJ Roadster",
    price: "$150",
    scale: "1:12",
    year: 2023,
    manufacturer: "Lamborghini",
    production: "Aventador SVJ",
    engine: "V12",
    image: f3,
  },
  {
    id: 4,
    name: "Ford Mustang Shelby GT500",
    model: "Heritage Edition",
    price: "$110",
    scale: "1:18",
    year: 2019,
    manufacturer: "Ford",
    production: "Mustang Shelby GT500",
    engine: "V8 Turbo",
    image: f4,
  },
];

const frames = [
  {
    id: 1,
    name: "GTR",
    image: frame1,
  },
  {
    id: 2,
    name: "GTR",
    image: frame2,
  },
  {
    id: 3,
    name: "GTR",
    image: frame3,
  },
  {
    id: 4,
    name: "GTR",
    image: frame4,
  },
  {
    id: 5,
    name: "GTR",
    image: frame5,
  },
];

export default function Hero() {
  return (
    <>
      <div className="relative">
        <NavBar />

        <div className="max-w-7xl mx-auto">
          {/* Background image */}
          <img
            src={heroBg}
            alt="Jaguar Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          <div className="h-screen md:h-[88dvh] flex flex-col justify-around items-start p-8">
            <div className="md:w-2xl">
              <h2 className="font-porschav3 text-3xl md:text-6xl text-white">
                Porsche GT3 Gulf Martini
              </h2>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, velit?
              </p>

              <div className="mt-8">
                <button className="slide-btn cursor-pointer group relative inline-flex h-12 items-center justify-center bg-neutral-50 px-6 font-medium text-neutral-900">
                  <span>Learn More</span>
                  <div className="relative ml-1 h-5 w-5 overflow-hidden">
                    <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 -translate-x-4"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-16 space-y-4">
              <div>
                <p className="text-slate-300">Manufacturer</p>
                <p className="text-2xl font-light text-white">Jaguar</p>
              </div>
              <div>
                <p className="text-slate-300">Production</p>
                <p className="text-2xl font-light text-white">2019-F-TYPE</p>
              </div>
              <div>
                <p className="text-slate-300">Engine</p>
                <p className="text-2xl font-light text-white">3.0 L I5 turbo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Image Slider (bottom-right) */}
        <div className="absolute right-4 bottom-4 w-36 md:w-48">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full custom-pagination"
          >
            <SwiperSlide>
              <img src={back} alt="Jaguar Slide 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={side} alt="Jaguar Slide 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={top} alt="Jaguar Slide 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={side2} alt="Jaguar Slide 1" className="w-full h-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* grid */}
      <section className="p-4">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="h-[40dvh] w-full relative flex flex-col justify-center px-4 overflow-hidden rounded">
            {/* title */}
            <h3 className="text-3xl text-white w-full md:w-2/3 relative">
              Lego Technic Chevrolet Corvette Stingray
            </h3>

            {/* Full background image */}
            <img
              src={carGTR}
              className="absolute inset-0 w-full h-full object-cover -z-10"
              alt="card background"
            />

            <div className="flex mt-6 relative z-10">
              <button className="cursor-pointer group relative inline-flex text-neutral-200 underline underline-offset-8">
                <span>Super Car Series</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    {/* Arrow icons */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[40dvh] w-full relative flex flex-col justify-center px-4 overflow-hidden rounded">
            <div className="text-white w-full md:w-2/3 relative">
              {/* title */}
              <h3 className="text-3xl">Lego Technic McLaren P1</h3>

              <p className="text- w-2/3 mt-2">
                An incredible, life-sized Lego version of the British hypercar.
              </p>
            </div>

            {/* Full background image */}
            <img
              src={yellow}
              className="absolute inset-0 w-full h-full object-cover -z-10"
              alt="card background"
            />

            <div className="flex mt-6 relative z-10">
              <button className="cursor-pointer group relative inline-flex text-neutral-200 underline underline-offset-8">
                <span>F1 Car Series</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    {/* Arrow icons */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[40dvh] w-full relative flex flex-col justify-center px-4 overflow-hidden rounded">
            <div className="text-white w-full md:w-2/3 relative">
              {/* title */}
              <h3 className="text-3xl">Lego Technic McLaren P1</h3>

              <p className="text- w-2/3 mt-2">
                An incredible, life-sized Lego version of the British hypercar.
              </p>
            </div>

            {/* Full background image */}
            <img
              src={red}
              className="absolute inset-0 w-full h-full object-cover -z-10"
              alt="card background"
            />

            <div className="flex mt-6 relative z-10">
              <button className="cursor-pointer group relative inline-flex text-neutral-200 underline underline-offset-8">
                <span>F1 Car Series</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    {/* Arrow icons */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="px-4 hidden md:block">
        <div className="w-full mx-auto gap-4">
          <div className="h-[50dvh] md:h-[75dvh] w-full relative flex flex-col justify-center px-4 overflow-hidden rounded">
            <div className="text-white w-full md:w-1/2 relative">
              {/* title */}
              <h3 className="text-2xl md:text-5xl font-porschav3">
                Experience the F1 Car Series with SubFramez
              </h3>

              <p className="w-2/3 mt-2">
                An incredible, life-sized Lego version of the F1 Car Series. The
                F1 Car Series is a series of racing cars that were designed and
                built by the British automobile manufacturers.
              </p>
            </div>

            {/* Full background image */}
            <img
              src={banner}
              className="absolute inset-0 w-full h-full object-cover -z-10"
              alt="card background"
            />

            <div className="flex mt-6 relative z-10">
              <button className="cursor-pointer group relative inline-flex text-neutral-200 underline underline-offset-8">
                <span>Explore F1 Car Series</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    {/* Arrow icons */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* F1 series */}
      {/* sport series */}
      <div className="w-full p-4 md:p-8">
        <h2 className="font-porschav3 mb-8 text-2xl md:text-4xl text-slate-800">
          Sport Series
        </h2>

        <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-slate-100 p-2 md:px-4 md:py-4">
              <h2 className="md:text-xl font-medium text-gray-800">
                {car.name}
              </h2>
              <p className="text-gray-700 text-xs md:text-sm font-mono">
                {car.model}
              </p>

              <img
                src={car.image}
                alt={car.name}
                className="w-full md:h-48 object-cover py-4"
              />

              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="hidden md:block">
                    <p className="text-sm">Company</p>
                    <p className="font-light text-xs">{car.manufacturer}</p>
                  </div>

                  <div>
                    <p className="text-sm">Scale</p>
                    <p className="font-light text-xs">{car.scale}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm">Price</p>
                  <p className="font-bold text-sm">{car.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="h-[10dvh]"></section>
    </>
  );
}
