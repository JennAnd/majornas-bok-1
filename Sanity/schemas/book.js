import { GiBookshelf } from "react-icons/gi";

export default {
  name: "book",
  title: "Böcker",
  type: "document",
  icon: GiBookshelf,
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
