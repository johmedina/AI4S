"use client";

import { useState } from "react";
import {
  Typography,
  Tab,
  Tabs,
  TabsHeader,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  affiliation?: string;
  introducer?: string;
  moderator?: string;
  speakers?: Array<{ name: string; affiliation?: string }>;
}

const DAY1_SCHEDULE: ScheduleItem[] = [
  {
    time: "8:00 - 8:10",
    title: "Welcome",
    speaker: "Sanjay Chawla",
    affiliation: "QCRI, HBKU",
  },
  {
    time: "8:10 - 2:00",
    title: "Tutorial 1: AI for Science Methods",
    speaker: "Raonic Bogdan",
    affiliation: "ETH Zurich",
    introducer: "Hasan Kurban",
  },
  {
    time: "8:10 - 2:00",
    title: "Tutorial 2: AI for Material Science",
    speaker: "Taylor Sparks",
    affiliation: "University of Utah",
    introducer: "Atef Zekri",
  },
  {
    time: "8:10 - 2:00",
    title: "Tutorial 3: AI for Health/Bio on Materials",
    speaker: "Surya Hari",
    affiliation: "Caltech",
  },
];

const DAY2_SCHEDULE: ScheduleItem[] = [
  {
    time: "8:00 - 8:10",
    title: "Intro and Housekeeping",
    speaker: "Sanjay Chawla",
    affiliation: "QCRI, HBKU",
  },
  {
    time: "8:10 - 8:20",
    title: "HBKU Introductions",
    speakers: [
      { name: "Dr. Eyad Ahmed Masad" , affiliation: "Vice President, HBKU Research" },
      { name: "Dr. Adnan Abu-Dayya", affiliation:"Associate Vice President, HBKU Research" },
    ],
  },
  {
    time: "8:30 - 10:00",
    title: "Materials Talks and Panel (Talks 15 min each)",
    speakers: [
      { name: "Prof. Yu Yang", affiliation: "UCST" },
      { name: "Prof. Taylor Sparks", affiliation: "University of Utah" },
      { name: "Speaker from QEERI" },
    ],
    moderator: "Atef Zekri",
  },
  {
    time: "10:00 - 10:20",
    title: "Break",
  },
  {
    time: "10:20 - 12:00",
    title: "Bio/Health Talks",
    speakers: [
      { name: "Salem", affiliation: "MBZUAI" },
      { name: "Pranam", affiliation: "Penn State" },
      { name: "Raghavendra", affiliation: "QCRI, HBKU" },
      { name: "Surya Hari", affiliation: "Caltech" },
    ],
    moderator: "Kabir Biswas",
  },
  {
    time: "12:00 - 1:00",
    title: "Lunch and Prayers",
  },
  {
    time: "1:00 - 2:30",
    title: "AI Methods",
    speakers: [
      { name: "Gokberk", affiliation: "Turkey" },
      { name: "Alperen", affiliation: "Turkey" },
      { name: "Raonic Bordan", affiliation: "ETH Zurich" },
    ],
    moderator: "Hasan Kurban",
  },
  {
    time: "2:30 - 3:00",
    title: "Break and Prayers",
  },
  {
    time: "3:00 - 4:15",
    title: "AI Infrastructure Keynote",
    speaker: "Addision Snell",
    introducer: "Othmane",
  },
];

function ScheduleCard({ item }: { item: ScheduleItem }) {
  return (
    <Card className="mb-4 shadow-md">
      <CardBody className="p-6">
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
            
            {/* Multiple speakers */}
            {item.speakers && item.speakers.length > 0 && (
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
            
            {/* Moderator */}
            {item.moderator && (
              <Typography variant="small" className="text-gray-500 italic mt-2">
                Moderator: {item.moderator}
              </Typography>
            )}
            
            {/* Introducer */}
            {item.introducer && (
              <Typography variant="small" className="text-gray-500 italic mt-2">
                Introduced by: {item.introducer}
              </Typography>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState("Day1");

  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Typography variant="h3" className="text-center mb-4" color="blue-gray">
            Schedule
          </Typography>
          <Typography
            variant="lead"
            className="text-center lg:max-w-5xl font-normal !text-gray-500"
          >
            Day 1 of the Symposium will be targeted towards students and junior researchers. Invited speakers will give up to a 2 hour lecture on a relevant topic. There will be 3 tutorials, one on each topic on Materials/Bio/Methods. The format will be sequential which will make it possible to attend all the tutorials. 
	    <br /><br />
	    Day 2 will be open to a wider audience. There will be 4 sessions and a keynote. Each session will have a theme and consist of two speakers who will present for 15 minutes each and then a 30 min moderated Q/A Session and panel. The end of Day 2 will also feature a keynote on the AI Infrastructure landscape. We will leave sufficient time for attendees to network and form potential collaborations
  
          </Typography>
        </div>

        <Tabs value={activeTab} className="mb-8">
          <div className="w-full flex mb-8 flex-col items-center">
            <TabsHeader className="h-12 w-72 md:w-96">
              <Tab
                value="Day1"
                className="font-medium"
                onClick={() => setActiveTab("Day1")}
              >
                Day 1
              </Tab>
              <Tab
                value="Day2"
                className="font-medium"
                onClick={() => setActiveTab("Day2")}
              >
                Day 2
              </Tab>
            </TabsHeader>
          </div>
        </Tabs>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === "Day1" && (
            <div>
              {DAY1_SCHEDULE.map((item, idx) => (
                <ScheduleCard key={idx} item={item} />
              ))}
            </div>
          )}

          {activeTab === "Day2" && (
            <div>
              {DAY2_SCHEDULE.length > 0 ? (
                DAY2_SCHEDULE.map((item, idx) => (
                  <ScheduleCard key={idx} item={item} />
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

