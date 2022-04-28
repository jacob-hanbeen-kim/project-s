require('dotenv').config({ path: require('find-config')('.env') })
const algoliasearch = require("algoliasearch");

// API keys below contain actual values tied to your Algolia account
const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex("users");

// Refer to this link for searh query examples: https://www.algolia.com/doc/api-reference/api-methods/search/#examples

// SIMPLE EXAMPLES

// 1. only query string

const search_string = "basic";

index.search(search_string).then(({ hits }) => {
  console.log(hits);
});

// 2. with params
index
  .search(search_string, {
    attributesToRetrieve: ["name", "usertype", "objectID"],
    hitsPerPage: 50,
  })
  .then(({ hits }) => {
    console.log(hits);
  });
