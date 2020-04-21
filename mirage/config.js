export default function() {
  this.namespace = 'api';

  this.get('/items', (schema) => {
    return schema.items.all();
  });

  this.get('/items/:id', (schema, request) => {
    return schema.items.find(request.params.id);
  });

  this.post('/carts', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).data.attributes;
  
    return schema.carts.create(attrs);
  });

  this.get('/carts', (schema) => {
    return schema.carts.all();
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
