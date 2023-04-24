import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";

export default function HeadingPage(props) {
  return (
    <div className="flex items-center justify-between min-h-[9rem] p-3 mb-2 border-b-4 border-slate-800 ">
      <div className="min-w-0 flex flex-col">
        <div className="flex items-center text-teal-700 ml-2 h-8">
          <h2 className="mb-1 text-sm">{props.name}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <h2 className="mb-1 text-sm">{props.page}</h2>
        </div>
        <h2 className="text-5xl font-bold text-teal-400 ">Quiz</h2>
      </div>
    </div>
  );
}
