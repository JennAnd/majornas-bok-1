import { UserIcon } from "@sanity/icons";

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Namn",
      type: "string",
      description: "Vänligen använd Förnamn Efternamn format.",
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
      description: "Vänligen ange datum för eventet.",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "blockContent",
      description:
        "Vänligen ange en kort beskrivning av eventet. (max 100 tecken)",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Tryck på 'Generate' för att skapa ett unikt id för bokcirkeln.",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      description: "Vänligen ladda upp en bild för eventet.",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
