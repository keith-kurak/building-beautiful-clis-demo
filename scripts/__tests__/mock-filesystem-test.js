// fs-extra is used for demonstrational purposes
const fs = require("fs-extra");
const { vol } = require("memfs");

// mock `fs` if you use either `fs` or `fs-extra`
jest.mock("fs");
// mock `fs/promises` if you use it either in code or tests
jest.mock("fs/promises");

const { checkHelloAsync, checkHelloExtra } = require("./checkHello");

describe(checkHelloAsync, () => {
  beforeEach(() => {
    // we reset virtual filesystem before each test
    vol.reset();
  });

  it("should return true if file starts with hello", async () => {
    const filePath = "/file.txt";
    //we save file in virtual filesystem
    await fs.writeFile(filePath, "hello Test");

    /**
     * You can swap lines below for different implementation
     * and this test will work anyway
     */
    // const result = await checkHelloExtra(filePath)
    const result = await checkHelloAsync(filePath);
    expect(result).toBe(true);
  });

  it("tests checkHelloAsync on multiple files", async () => {
    vol.fromJSON(
      {
        "./some/file1.txt": "hello world",
        "./other/file2.txt": "h3ll0 w0rld",
      },
      "/tmp" // cwd (current working directory)
    );

    await expect(checkHelloAsync("/tmp/some/file1.txt")).resolves.toBe(true);
    await expect(checkHelloAsync("/tmp/other/file2.txt")).resolves.toBe(false);
  });
});