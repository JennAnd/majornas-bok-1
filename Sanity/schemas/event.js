import { UserIcon } from "@sanity/icons";

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Please choose a date below",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      description:
        "Please write a short description of the event and/or the person",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Please press the 'Generate' button to create a unique slug for this event",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please choose an image for this event",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
