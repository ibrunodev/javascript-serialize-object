# javascript-serialize-object
Simple script to serialize multidimensional object to send via URL in javascript

## Usage

```
var query = {
  "id": 123,
  "search_term": "foo",
  "categories": [ 1, 2, 3 ]
};

var URLEncoded = buildQuery(query); 
// (5) ["id=123", "search_term=foo", "categories[0]=1", "categories[1]=2", "categories[2]=3"]

doSomethingWithMyEncodedUrl ( URLEncoded.join('?') )
// id=123&search_term=foo&categories[0]=1&categories[1]=2&categories[2]=3
```
