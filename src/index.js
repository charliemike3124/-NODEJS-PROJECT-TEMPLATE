const app = require('./app');

const HTTP_PORT = 3000;
app.listen(HTTP_PORT, () => {
  console.log(`App is running on port ${HTTP_PORT}`)
})