import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { CheckIcon } from "@heroicons/react/24/outline";
   
  export default function Cards() {
    return (
      <Card variant="gradient" className="rounded-lg w-full max-w-[20rem] p-8 bg-gradient-to-b from-neutral-800 via-blue-900 to-blue-600">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          {/* <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            1st Topic
          </Typography> */}
          <Typography
            variant="h1"
            color="white"
            className=" flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl font-semibold">Derivatives</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0 text-white">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Important Formulas</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Practice Quiz</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Step by step examples</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-16 p-0">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-white"
            ripple={false}
            fullWidth={true}
          >
            Go to Page
          </Button>
        </CardFooter>
      </Card>
    );
  }