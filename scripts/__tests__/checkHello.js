const fs = require("fs");
const fsPromises = require("fs/promises");
const fsExtra = require("fs-extra");

// using fs sync calls
function checkHelloSync(filePath) {
  const fd = fs.openSync(filePath);
  const content = Buffer.alloc(5);
  const bytesRead = fs.readSync(fd, content, 0, 5, 0);
  fs.closeSync(fd);

  if (bytesRead !== 5) return false;
  return content.toString() === "hello";
}

// using fsPromises
async function checkHelloAsync(filePath) {
  const fd = await fsPromises.open(filePath, "r");
  const { buffer, bytesRead } = await fd.read(Buffer.alloc(5), 0, 5, 0);
  await fd.close();

  return bytesRead === 5 && buffer.toString("utf8") === "hello";
}

// using fs-extra
async function checkHelloExtra(filePath) {
  const fd = await fsExtra.open(filePath, "r");
  const { buffer, bytesRead } = await fsExtra.read(
    fd,
    Buffer.alloc(5),
    0, 5, 0
  );
  await fs.close(fd);

  return bytesRead === 5 && buffer.toString("utf8") === "hello";
}

module.exports = {
  checkHelloSync,
  checkHelloAsync,
  checkHelloExtra,
};