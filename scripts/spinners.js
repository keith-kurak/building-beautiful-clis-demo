import ora from 'ora';

console.clear();

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

(async function(){
  const spinner = ora('Loading stuff, gonna go away').start();
  await delay(3000);
  spinner.stop();

  const spinner2 = ora('Loading stuff, gonna stay').start();
  await delay(3000);
  spinner2.stopAndPersist({ symbol: '✅'});
})();