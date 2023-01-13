// THESE ARE JUST EXAMPLES, they don't actually run, sorry! (too many deps, not enough time)

import shell from "shelljs";

// just an implementation of shell commands you can use easily in JS

// use with other built-ins to avoid gnarly string concatenation
shell.cp(
  "-R",
  path.join(sourceRoot, "app-files/icons/android/*"),
  path.join("android/app/src/main/res")
);

if (!fs.existsSync("android/app/src/main/res/values/someresource.xml")) {
  shell.mkdir("-p", "android/app/src/main/res/values");
  shell.touch("android/app/src/main/res/values/someresource.xml");
}

// Run arbitrary shell commands synchronously and inspect their results
const res = shell.exec('git commit -am "Auto-commit"');
if (res.code !== 0) {
  shell.echo("Error: Ruh roh!");
  shell.exit(1);
}

// OR run asynchronously and inspect the console output and do stuff with that
const child = shell.exec("yarn start-app-in-screenshot-mode", { async: true });

child.stdout.on("data", function (data) {
  const dataLines = data.split(/\r?\n/);
  dataLines.forEach((line) => {
    const match = line.match(".*TAKE_A_SCREENSHOT.*");
    if (match) {
      shell.mkdir('-p', `${rootFolder}/${brand}/${device}`);
      if (platform === 'ios') {
        shell.exec(
          `xcrun simctl io ${getSimulatorId(
            device
          )} screenshot --type=jpeg "${basefilename}.jpg"`,
          { async: true }
        );
      } else {
        shell.exec(
          `adb exec-out screencap -p > "${basefilename}.png" && convert "${basefilename}.png" "${basefilename}.jpg" && rm "${basefilename}.png"`,
          {
            async: true,
          }
        );
      }
    }
  });
});
