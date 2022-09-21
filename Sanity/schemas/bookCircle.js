import { AiOutlineCalendar } from "react-icons/ai";

export default {
  name: "bookCircle",
  title: "Bokcirkel",
  type: "document",
  icon: AiOutlineCalendar,
  fields: [
    {
      name: "name",
      title: "Namn",
      type: "string",
      description: "Ge bokcirkeln ett namn.",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "string",
      description: "Ge bokcirkeln en kort beskrivning.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Tryck på 'Generate' för att skapa ett unikt id för bokcirkeln.",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
