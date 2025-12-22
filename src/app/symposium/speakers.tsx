"use client";

import {
  Typography,
} from "@material-tailwind/react";
import SpeakerCard from "@/components/speaker-card";
import infoData from "./info.json";

const SPEAKERS = infoData.speakers;

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
          <div className="grid grid-cols-1  gap-8">
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
