"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      {/* <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography> */}
      <Typography variant="h3" className="text-center" color="blue-gray">
        Objective
      </Typography>

      <Typography
        variant="lead"
        className="mt-2 lg:max-w-5xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        To bootstrap AI for Science (AI4S) research in HBKU, the Cluster Team will organize a 2 day workshop in late January 2026. The aim is to introduce the latest AI4S research to HBKU and the wider research community in Qatar. As recommended in the AI4S taskforce, the focus of the Symposium will be on Material Science, Bio-Multimodal Learning and AI  Methods for Science and Engineering. 

      </Typography>
      {/* <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div> */}
    </section>
  );
}

export default AboutEvent;
