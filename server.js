const app = require('./app');

const PORT = 3000;

function connectServer() {
  app.listen(PORT, () => console.log(`Соединение с сервером прошло успешно PORT: ${PORT}`));
}
connectServer()