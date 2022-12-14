// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas

import openingHours from "./openingHours";
import info from "./info";
import costumerReview from "./constumerReview";
import event from "./event";
import newsHero from "./newsHero";
import book from "./book";
import bookCircle from "./bookCircle";
import about from "./about";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    newsHero,
    info,
    openingHours,
    event,
    book,
    bookCircle,
    about,
    costumerReview,
  ]),
});
