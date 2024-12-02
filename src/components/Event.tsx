"use client";
import React, { useEffect, useState } from "react";

interface Event {
  title: string;
  description: string;
  image: string;
}

const eventsData: Event[] = [
  {
    title: "E-Summit",
    description:
      "Annually, Team E-Cell MANIT sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event2.jpg",
  },
  {
    title: "E-Carnival",
    description:
      "Annually, Team E-Cell MANIT sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event2.jpg",
  },
  {
    title: "Pe-Charcha",
    description:
      "Annually, Team E-Cell MANIT sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event3.jpg",
  },
  {
    title: "Pe-Charcha",
    description:
      "Annually, Team E-Cell MANIT sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event3.jpg",
  },
  {
    title: "Pe-Charcha",
    description:
      "Annually, Team E-Cell MANIT sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event3.jpg",
  },
];
function Event() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section id="Events" className="pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[#0064E0] text-6xl flex justify-center p-10">
          Events
        </h2>{" "}
         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-8 mx-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-[#0064E0] rounded-lg shadow-md overflow-hidden group transition-all duration-500 ease-in-out transform hover:scale-105 h-[18rem]"
            >
              {/* Title and Description */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#0064E0] group-hover:to-[#000000] p-6 transition-all duration-500 ease-in-out">
                {/* Title */}
                <h3 className="text-white text-2xl font-bold group-hover:translate-y-[-20px] transition-transform duration-300 ease-in-out">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-4">
                  {event.description}
                </p>
              </div>

              {/* Hover Effects - Border and Glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white rounded-lg transition-all duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Event;