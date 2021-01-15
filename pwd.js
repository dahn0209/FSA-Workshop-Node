// module.exports = function () {
//   // Output a prompt
//   process.stdout.write('prompt >');

//   //The stdin 'data' event fires after a user types in a line
//   process.stdin.on('data', function (data) {
//     const cmd = data.toString().trim();

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   });
//   // arg.process.cwd();
//   console.log(`Current directory: ${process.cwd()}`);
// };

function pwd() {
  // Output a prompt
  process.stdout.write('prompt >');

  //The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', function (data) {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });
  // arg.process.cwd();
  console.log(`Current directory: ${process.cwd()}`);
}

module.exports = { pwd };
