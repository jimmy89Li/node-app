const { writeFile } = require('fs').promises;
const logger = (request, result, next) => {
  const method = request.method;
  const url = request.url;
  const time = new Date();
  const logDate = `${time.getFullYear()}-${
    time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
  }-${time.getDate()}`;
  writeFile(
    __dirname + `/${logDate}_access-log.txt`,
    `${method} ${url} ${time}\n`,
    { flag: 'a' }
  );
  next();
};

module.exports = logger;
