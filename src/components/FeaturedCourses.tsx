"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

function FeaturedCourses() {
  const Courses = [
    {
      image: "https://picsum.photos/200",
      title: "React for Beginners",
      description: "Learn the basics of React",
    },
    {
      image: "https://picsum.photos/200",
      title: "React for Beginners",
      description: "Learn the basics of React",
    },
    {
      image: "https://picsum.photos/200",
      title: "React for Beginners",
      description: "Learn the basics of React",
    },
    {
      image: "https://picsum.photos/200",
      title: "React for Beginners",
      description: "Learn the basics of React",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-5xl antialiased text-center font-bold text-neutral-300 ">
          Featured Courses
        </h2>
        <p className="text-center text-xl antialiased font-semibold text-lime-600 mt-4">
          Learn from the best
        </p>
      </div>
      <div className="mt-16 flex justify-center items-center mx-auto w-full flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {Courses.map((course, index) => (
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <div
                key={index}
                className="flex flex-col bg-white dark:bg-zinc-900 overflow-hidden h-full rounded-[22px] shadow-lg w-full"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-contain"
                />
                <div className="p-4">
                  <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                </div>
                <div className="flext mx-auto">
                  <button className="bg-white text-black rounded-md py-1 px-2">
                    learn more
                  </button>
                </div>
              </div>{" "}
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Link href="/courses">
          <button className="text-black bg-white rounded-md py-1 px-2 font-semibold">
            All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
