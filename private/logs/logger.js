const loggerFile = (fileName = 'access.log') => {
  const time = new Date();
  const year = time.getFullYear();
  const month =
    time.getMonth() + 1 < 10
      ? '0' + (time.getMonth() + 1)
      : time.getMonth() + 1;
  const day = time.getDate();
  return __dirname + `/${year}-${month}-${day}_${fileName}`;
};

module.exports = loggerFile;
