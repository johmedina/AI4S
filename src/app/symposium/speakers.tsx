"use client";

import {
  Typography,
} from "@material-tailwind/react";
import SpeakerCard from "@/components/speaker-card";

// Example speaker data - replace with actual speaker information
const SPEAKERS = [
  {
    name: "Raonic Bogdan",
    affiliation: "ETH Zurich",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Taylor Sparks",
    affiliation: "University of Utah",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Surya Narayanan Hari",
    affiliation: "California Institute of Technology",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Yu Yang",
    affiliation: "UCST",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Salem",
    affiliation: "MBZUAI",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Pranam",
    affiliation: "Penn State",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Raghavendra",
    affiliation: "QCRI, HBKU",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Gokberk",
    affiliation: "Turkey",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Alperen",
    affiliation: "Turkey",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },
  {
    name: "Addision Snell",
    affiliation: "UCST",
    title: "Professor / Title",
    bio: "Speaker bio goes here. This is a placeholder bio that describes the speaker's background, research interests, and achievements.",
    img: "/image/blank.jpg",
  },

];

export function Speakers() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Typography variant="h3" className="text-center mb-4" color="blue-gray">
            Speakers
          </Typography>
          <Typography
            variant="lead"
            className="text-center max-w-2xl font-normal !text-gray-500"
          >
            Meet our distinguished speakers and experts
          </Typography>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SPEAKERS.map((speaker, idx) => (
              <SpeakerCard key={idx} {...speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
