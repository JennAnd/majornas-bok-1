import { SiBookstack } from "react-icons/si";

export default {
  name: "book",
  title: "Böcker",
  type: "document",
  icon: SiBookstack,
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },

    {
      name: "author",
      title: "Författare",
      type: "string",
    },

    {
      name: "cover",
      title: "Bokomslag",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "title", media: "cover" },
  },
};
