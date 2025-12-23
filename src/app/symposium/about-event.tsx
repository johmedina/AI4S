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
      {/* <Typography variant="h3" className="text-center" color="blue-gray">
        Objective
      </Typography> */}

      <Typography
        variant="lead"
        className="mt-2 lg:max-w-5xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        The aim of the symposium is to bootstrap AI for Science (AI4S) research in HBKU and Qatar. Based on the recommendation of the AI4S Taskforce, the focus of the workshop will be on: AI infrastructure, AI Methods for Science, Material Science and Biomedical Learning. We have a strong international line-up of speakers. Day 1 is dedicated to tutorials and Day 2 to talks and panels. Attendance to the Symposium is by invitation.
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
