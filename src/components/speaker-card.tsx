import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

interface SpeakerCardProps {
  name: string;
  affiliation: string;
  title?: string;
  bio: string;
  img: string;
}

export function SpeakerCard({
  name,
  affiliation,
  title,
  bio,
  img,
}: SpeakerCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col lg:flex-row lg:items-start mb-0"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[16rem] w-full lg:w-[16rem] lg:max-w-[16rem] shrink-0"
      >
        <Image
          width={400}
          height={400}
          src={img}
          alt={name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex-1">
        <Typography variant="h4" color="blue-gray" className="mb-2 font-medium">
          {name}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {affiliation}
        </Typography>
        {title && (
          <Typography variant="small" color="blue-gray" className="mb-4 font-semibold">
            {title}
          </Typography>
        )}
        <Typography className="font-normal !text-gray-500">
          {bio}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SpeakerCard;

