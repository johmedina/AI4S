"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative h-[70vh] w-full bg-[url('/image/banner.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid h-full px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="white" className="mb-2">
          21-22 January 2026
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          HBKU AI for Science Symposium
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-5 w-full md:max-w-full lg:max-w-2xl"
        >
          Multipurpose Hall, Ground floor, B1
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="w-full md:max-w-full lg:max-w-2xl"
        >
          Research and Development Complex (RDC), HBKU {" "}
          <a
            href="https://maps.app.goo.gl/E3MtoX3sxuckUwne7?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200 transition-colors"
          >
            (view map)
          </a>
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Doha, Qatar
        </Typography>
        {/* <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div> */}
      </div>
    </div>
  </div>
  );
}

export default Hero;
