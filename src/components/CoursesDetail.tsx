"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const coachingClassContent = [
    {
      title: "Class 9th Coaching",
      description:
        "Prepare for your 9th-grade exams with our comprehensive coaching program. Master the fundamentals of various subjects and excel in your academics.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://source.unsplash.com/random/300x300"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Class 9th Coaching Image"
          />
        </div>
      ),
    },
    {
      title: "Class 10th Coaching",
      description:
        "Get ready for your 10th-grade examinations with our expert guidance. Strengthen your knowledge base and boost your confidence for the upcoming challenges.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://source.unsplash.com/random/300x301/"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Class 10th Coaching Image"
          />
        </div>
      ),
    },
    {
      title: "Class 11th & 12th Coaching",
      description:
        "Ace your 11th and 12th-grade studies with our specialized coaching. We provide comprehensive support to help you succeed in your academic pursuits and beyond.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://source.unsplash.com/random/300x302/"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Class 11th & 12th Coaching Image"
          />
        </div>
      ),
    },
  ];
  
  

function CoursesDetail() {
    
  return (
    <div className=" mt-8 overflow-hidden">
        <StickyScroll content={coachingClassContent} />
      
    </div>
  )
}

export default CoursesDetail
