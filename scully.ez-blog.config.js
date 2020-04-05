exports.config = {
  projectRoot: "./src",
  projectName: "ez-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/user/:userId": {
      type: "json",
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id'
      }
    }
  }
};
