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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user was previously authenticated (stored in sessionStorage)
    const authStatus = sessionStorage.getItem("symposium_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("symposium_authenticated", "true");
      setError("");
      setPassword("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
          <Card className="w-full max-w-md shadow-lg">
            <CardBody className="p-8">
              <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
                Protected Page
              </Typography>
              <Typography variant="paragraph" color="gray" className="mb-6 text-center">
                Please enter the password to access the symposium page.
              </Typography>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <Input
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  error={!!error}
                  className="w-full"
                />
                {error && (
                  <Typography variant="small" color="red" className="mt-1">
                    {error}
                  </Typography>
                )}
                <Button type="submit" className="w-full" color="blue">
                  Access Page
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      {/* <AboutEvent /> */}
      <Schedule />
      {/* <OurStats /> */}
      <Speakers />
      {/* <Faq /> */}
      {/* <Footer /> */}
    </>
  );
}

