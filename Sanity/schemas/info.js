import { AiOutlineInfoCircle as icon } from "react-icons/ai";

export default {
  name: "info",
  title: "Info",
  icon,
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Företagsnamn",
      type: "string",
    },
    {
      name: "address",
      title: "Adress",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Postnummer",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefon",
      type: "string",
    },
    {
      name: "email",
      title: "E-mail",
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
