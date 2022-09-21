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
      description: "Vänligen använd Förnamn Efternamn format (max 28 tecken).",
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error("A title of min. 3 characters is required"),
        Rule.max(28).error("Namnet är för långt. Försök korta ner det."),
      ],
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
      type: "text",
      description:
        "Vänligen ange en kort beskrivning av eventet (max 225 tecken).",
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error("A title of min. 3 characters is required"),
        Rule.max(225).error(
          "Beskrivningen är för lång. Var god korta ner den."
        ),
      ],
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
