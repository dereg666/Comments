const app = require('./app');

const PORT = process.env.PORT || 9000;

const a = new Date();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
