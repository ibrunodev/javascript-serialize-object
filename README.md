# Javascript Serialize Object
Simple script to serialize multidimensional object to send via URL in javascript

## Usage

```
var query = {
  "id": 123,
  "search_term": "foo",
  "categories": [ 1, 2, 3 ],
  "other_info": {
      "foo" : "I have no ideia to put here"
  }
};

var URLEncoded = buildQuery(query);
// get: ["id=123", "search_term=foo", "categories[0]=1", "categories[1]=2", "categories[2]=3", "other_info[foo]=I%20have%20no%20ideia%20to%20put%20here"]

console.log(URLEncoded.join('&'))
//id=123&search_term=foo&categories[0]=1&categories[1]=2&categories[2]=3&other_info[foo]=I%20have%20no%20ideia%20to%20put%20here
```
