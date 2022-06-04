require("dotenv").config({ path: require("find-config")(".env") });
const algoliasearch = require("algoliasearch");

// API keys below contain actual values tied to your Algolia account
const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
const user_index = client.initIndex("users");
const profile_index = client.initIndex("profile");

// Refer to this link for searh query examples: https://www.algolia.com/doc/api-reference/api-methods/search/#examples
// Reference API parameters: https://www.algolia.com/doc/api-reference/search-api-parameters/

// Search Examples

// 1. only query string

const search_string = "vip";

user_index.search(search_string).then(({ hits }) => {
  console.log(hits);
});

// 2. query with params
user_index
  .search(search_string, {
    attributesToRetrieve: ["name", "usertype", "objectID"],
    hitsPerPage: 50,
  })
  .then(({ hits }) => {
    console.log(hits);
  });

// 3. search multiple indices simultaneously with filtering as well
const queries = [
  {
    indexName: "users",
    query: "basic",
    params: {
      attributesToRetrieve: "firstName, lastName",
      hitsPerPage: 10,
    },
  },
  {
    indexName: "profile",
    query: "musk",
    params: {
      hitsPerPage: 10,
      filters: "budget > 10000 AND revenue:10000 TO 10000000",
    },
  },
];

client.multipleQueries(queries).then(({ results }) => {
  console.log(results);
  // results.forEach((result) => {
  //   console.log(result.hits);
  // })
});
