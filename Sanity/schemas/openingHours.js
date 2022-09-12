import { FiClock as icon } from "react-icons/fi";

export default {
  name: "openingHours",
  title: "Opening Hours",
  icon,
  type: "document",
  fields: [
    {
      name: "Day",
      title: "Day",
      type: "string",
    },
    {
      name: "openingHrs",
      title: "Opening Hours",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
  ],
};
