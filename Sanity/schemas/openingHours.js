import { FiClock as icon } from "react-icons/fi";

export default {
  name: "openingHours",
  title: "Öppettider",
  icon,
  type: "document",
  fields: [
    {
      name: "day",
      title: "Dag(ar)",
      type: "string",
    },
    {
      name: "openingHrs",
      title: "Öppettider",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Tryck på 'Generate' för att skapa ett unikt id.",
      options: {
        source: "title",
      },
    },
  ],
};
