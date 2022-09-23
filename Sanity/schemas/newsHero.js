import { AiOutlineHome } from "react-icons/ai";

export default {
  name: "newsHero",
  title: "Startsida",
  type: "document",
  icon: AiOutlineHome,
  fields: [
    {
      name: "h1",
      title: "Välkomsttext",
      type: "string",
    },
    {
      name: "firstText",
      title: "Detalj text översta",
      type: "string",
    },
    {
      name: "secondText",
      title: "Detalj text mitten",
      type: "string",
    },
    {
      name: "thirdText",
      title: "Detalj text understa",
      type: "string",
    },
  ],
};
