"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Typography,
  Tab,
  Tabs,
  TabsHeader,
  Card,
  CardBody,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import scheduleData from "./info.json";

interface SubtimingItem {
  time: string;
  title: string;
  speaker: string;
  affiliation?: string;
  abstract?: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  affiliation?: string;
  introducer?: string;
  moderator?: string;
  speakers?: Array<{ name: string; affiliation?: string }>;
  abstract?: string;
  subtimings?: SubtimingItem[];
  setup?: string;
  location?: string;
}

const DAY1_SCHEDULE: ScheduleItem[] = scheduleData.schedule.day1 as ScheduleItem[];
const DAY2_SCHEDULE: ScheduleItem[] = scheduleData.schedule.day2 as ScheduleItem[];

function linkifyText(
  text: string,
  linkLabel: string = "(Open link)"
): ReactNode {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
  const matches = Array.from(text.matchAll(urlRegex));
  if (matches.length === 0) return text;

  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const raw = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    let urlText = raw;
    let trailing = "";
    while (urlText.length > 0 && ".,);:!?]".includes(urlText[urlText.length - 1])) {
      trailing = urlText[urlText.length - 1] + trailing;
      urlText = urlText.slice(0, -1);
    }

    const href = urlText.startsWith("http") ? urlText : `https://${urlText}`;

    nodes.push(
      <a
        key={`link-${i}-${index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        {linkLabel}
      </a>
    );

    if (trailing) nodes.push(trailing);
    lastIndex = index + raw.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}


function SubtimingCard({ 
  subtiming, 
  parentIndex, 
  subtimingIndex, 
  openSubtimingIndex, 
  onToggleSubtiming 
}: { 
  subtiming: SubtimingItem;
  parentIndex: number;
  subtimingIndex: number;
  openSubtimingIndex: string | null;
  onToggleSubtiming: (index: string) => void;
}) {
  const uniqueIndex = `${parentIndex}-${subtimingIndex}`;
  const isOpen = openSubtimingIndex === uniqueIndex;
  const hasAbstract = !!subtiming.abstract;

  return (
    <Card className="mb-3 shadow-sm">
      <Accordion open={isOpen}>
        <AccordionHeader
          onClick={() => hasAbstract && onToggleSubtiming(uniqueIndex)}
          className={`p-0 border-0 ${hasAbstract ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <CardBody className="p-4 w-full">
            <div className="flex flex-col md:flex-row md:items-start gap-3">
              <div className="flex-shrink-0">
                <Typography
                  variant="small"
                  className="font-semibold text-blue-gray-700"
                >
                  {subtiming.time}
                </Typography>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Typography variant="paragraph" color="blue-gray" className="mb-1 font-semibold">
                      {subtiming.title}
                    </Typography>
                    <Typography variant="small" className="font-medium mb-1">
                      {subtiming.speaker}
                    </Typography>
                    {subtiming.affiliation && (
                      <Typography
                        variant="small"
                        className="text-gray-600"
                      >
                        {subtiming.affiliation}
                      </Typography>
                    )}
                  </div>
                  
                  {hasAbstract && (
                    <div className="flex-shrink-0">
                      <ChevronDownIcon
                        className={`h-4 w-4 text-gray-600 transition-transform ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {hasAbstract && (
                <AccordionBody className="px-6 pb-6 pt-0">
                  <div>
                    <Typography variant="paragraph" className="font-medium mb-1">Abstract</Typography>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-gray-600 whitespace-pre-line"
                  >
                    {subtiming.abstract}
                  </Typography>
                </AccordionBody>
              )}

          </CardBody>
        </AccordionHeader>
        
      </Accordion>
    </Card>
  );
}

function ScheduleCard({ item, index, openIndex, onToggle, openSubtimingIndex, onToggleSubtiming }: { 
  item: ScheduleItem; 
  index: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
  openSubtimingIndex: string | null;
  onToggleSubtiming: (index: string) => void;
}) {
  const isOpen = openIndex === index;
  const hasAbstract = !!item.abstract && !item.subtimings;
  const hasSubtimings = !!item.subtimings && item.subtimings.length > 0;

  return (
    <Card className="mb-4 shadow-md overflow-hidden">
      <Accordion open={isOpen}>
        <AccordionHeader
          onClick={() => hasAbstract && onToggle(index)}
          className={`p-0 border-0 ${hasAbstract ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <CardBody className="p-6 w-full">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <Typography
                  variant="small"
                  className="font-semibold text-blue-gray-900"
                >
                  {item.time}
                </Typography>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      {item.title}
                    </Typography>
                    
                    {/* Single speaker */}
                    {item.speaker && !item.speakers && (
                      <>
                        <Typography variant="paragraph" className="font-medium mb-1">
                          {item.speaker}
                        </Typography>
                        {item.affiliation && (
                          <Typography
                            variant="small"
                            className="text-gray-600 mb-2"
                          >
                            {item.affiliation}
                          </Typography>
                        )}
                      </>
                    )}
                    
                    {/* Multiple speakers (only if no subtimings) */}
                    {item.speakers && item.speakers.length > 0 && !hasSubtimings && (
                      <div className="mb-2">
                        {item.speakers.map((speaker, idx) => (
                          <div key={idx} className="mb-1 flex items-baseline gap-2">
                            <Typography variant="paragraph" className="font-medium">
                              {speaker.name}
                            </Typography>
                            {speaker.affiliation && (
                              <Typography
                                variant="small"
                                className="text-gray-600"
                              >
                                ({speaker.affiliation})
                              </Typography>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Subtimings */}
                    {hasSubtimings && (
                      <div className="mt-4">
                        {item.subtimings!.map((subtiming, idx) => (
                          <SubtimingCard
                            key={idx}
                            subtiming={subtiming}
                            parentIndex={index}
                            subtimingIndex={idx}
                            openSubtimingIndex={openSubtimingIndex}
                            onToggleSubtiming={onToggleSubtiming}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Moderator */}
                    {item.moderator && (
                      <Typography variant="small" className="text-gray-600 italic mt-2">
                        Moderator: {item.moderator}
                      </Typography>
                    )}
                    
                    {/* Introducer */}
                    {item.introducer && (
                      <Typography variant="small" className="text-gray-600 italic mt-2">
                        Introduced by: {item.introducer}
                      </Typography>
                    )}

                    {item.location && (
                      <Typography variant="small" className="text-gray-600 mt-2">
                        Location: {item.location}
                      </Typography>
                    )}
                  </div>
                  
                  {/* Chevron icon - only show if abstract exists */}
                  {hasAbstract && (
                    <div className="flex-shrink-0">
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-600 transition-transform ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardBody>
        </AccordionHeader>
        
        {hasAbstract && (
          <AccordionBody className="px-6 pb-6 pt-0">
            <div>
              <Typography variant="paragraph" className="font-medium mb-1 font-bold">Abstract</Typography>
            </div>
            <Typography
              color="blue-gray"
              className="font-normal text-gray-600 whitespace-pre-line"
            >
              {item.abstract}
            </Typography>
          </AccordionBody>
        )}

        {item.setup && (
          <AccordionBody className="px-6 pb-6 pt-0">
            <div>
              <Typography variant="paragraph" className="font-medium mb-1 font-bold">Tutorial Setup Requirements</Typography>
            </div>
            <Typography
              color="blue-gray"
              className="font-normal text-gray-600 whitespace-pre-line"
            >
              {linkifyText(item.setup)}
            </Typography>
          </AccordionBody>
        )}

        {item.location_instructions && (
          <AccordionBody className="px-6 pb-6 pt-0">
            <div>
              <Typography variant="paragraph" className="font-medium mb-1 font-bold">Location Instructions</Typography>
            </div>
            <Typography
              color="blue-gray"
              className="font-normal text-gray-600 whitespace-pre-line"
            >
              {item.location_instructions}
            </Typography>
          </AccordionBody>
        )}
      </Accordion>
    </Card>
  );
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState("Day1");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubtimingIndex, setOpenSubtimingIndex] = useState<string | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleSubtiming = (index: string) => {
    setOpenSubtimingIndex(openSubtimingIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Typography variant="h3" className="text-center mb-4" color="blue-gray">
            Schedule
          </Typography>
        </div>

        <Tabs value={activeTab} className="mb-8">
          <div className="w-full flex mb-8 flex-col items-center">
            <TabsHeader className="h-12 w-72 md:w-96">
              <Tab
                value="Day1"
                className="font-medium"
                onClick={() => {
                  setActiveTab("Day1");
                  setOpenIndex(null); // Reset accordion when switching tabs
                  setOpenSubtimingIndex(null); // Reset subtiming accordions
                }}
              >
                Day 1
              </Tab>
              <Tab
                value="Day2"
                className="font-medium"
                onClick={() => {
                  setActiveTab("Day2");
                  setOpenIndex(null); // Reset accordion when switching tabs
                  setOpenSubtimingIndex(null); // Reset subtiming accordions
                }}
              >
                Day 2
              </Tab>
            </TabsHeader>
          </div>
        </Tabs>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === "Day1" && (
            <div>
              <Typography
                variant="lead"
                className="font-normal !text-gray-500"
              >
                All tutorials are in parallel.
              </Typography>
              {DAY1_SCHEDULE.map((item, idx) => (
                <ScheduleCard 
                  key={idx} 
                  item={item} 
                  index={idx}
                  openIndex={openIndex}
                  onToggle={handleToggle}
                  openSubtimingIndex={openSubtimingIndex}
                  onToggleSubtiming={handleToggleSubtiming}
                />
              ))}
            </div>
          )}

          {activeTab === "Day2" && (
            <div>
              {DAY2_SCHEDULE.length > 0 ? (
                DAY2_SCHEDULE.map((item, idx) => (
                  <ScheduleCard 
                    key={idx} 
                    item={item}
                    index={idx}
                    openIndex={openIndex}
                    onToggle={handleToggle}
                    openSubtimingIndex={openSubtimingIndex}
                    onToggleSubtiming={handleToggleSubtiming}
                  />
                ))
              ) : (
                <Card className="shadow-md">
                  <CardBody className="p-6 text-center">
                    <Typography variant="paragraph" className="text-gray-500">
                      Day 2 schedule coming soon...
                    </Typography>
                  </CardBody>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Schedule;

