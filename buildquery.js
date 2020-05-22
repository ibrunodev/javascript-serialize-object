function buildQuery(params, parent = null) {

    let esc = encodeURIComponent;
    let query = [];

    for (let i in params) {
      let element = params[i];
      if ('object' == typeof element) {
        let qr = buildQuery(element, (parent ? parent + `[${esc(i)}]` : esc(i) ) );

        Object.keys(qr).map(el => {
          query.push(qr[el]);
        })
      } else {
        parent ? query.push(`${parent}[${esc(i)}]=${esc(element)}`) : query.push(`${esc(i)}=${esc(element)}`);
      }
    }

    return query;
}

// usage:

var query = {
  "id": 123,
  "search_term": "foo",
  "categories": [ 1, 2, 3 ],
  "other_info": {
      "foo" : "I have no ideia to put here"
  }
};

var URLEncoded = buildQuery(query);

console.log(URLEncoded.join('&'))
