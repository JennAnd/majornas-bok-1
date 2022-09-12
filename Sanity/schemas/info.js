import { AiOutlineInfoCircle as icon } from "react-icons/ai";

export default {
  name: "info",
  title: "Info",
  icon,
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Zip code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
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
      options: {
        source: "title",
      },
    },
  ],
};
