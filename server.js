const express = require('express');
const { createServer } = require('@shopify/hydrogen/dist/esnext/server');
const app = express();
const port = process.env.PORT || 3000;

app.use(createServer());

app.listen(port, () => {
  console.log(Server running on port );
});
