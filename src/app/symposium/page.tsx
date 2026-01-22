"use client";

import { useState, useEffect } from "react";
import { Input, Button, Typography, Card, CardBody } from "@material-tailwind/react";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "../sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "../our-stats";
import EventContent from "../event-content";
import Schedule from "./schedule";
import Faq from "../faq";
import Speakers from "./speakers";

const CORRECT_PASSWORD = "ai4s";

export default function Symposium() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      <AboutEvent />
      <Schedule />
      {/* <OurStats /> */}
      <Speakers />
      {/* <Faq /> */}
      {/* <Footer /> */}
    </>
  );
}

