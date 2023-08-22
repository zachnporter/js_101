/*
Write a function that will take a short line of text,
and write it to the console log within a box.
*/

function logInBox(str, maxWidth) {
  if (maxWidth && str.length > maxWidth) {
    str = str.slice(0, maxWidth - 4);
  }

  let topAndBottom = `+${'-'.repeat(str.length + 2)}+`;
  let spacing = `|${' '.repeat(str.length + 2)}|`;
  let middle = `| ${str} |`;

  console.log(topAndBottom);
  console.log(spacing);
  console.log(middle);
  console.log(spacing);
  console.log(topAndBottom);
}

logInBox('To boldly go where no one has gone before.', 15);
logInBox('To boldly go where no one has gone before.', 30);
logInBox('To boldly go where no one has gone before.');
logInBox('');


/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

+--+
|  |
|  |
|  |
+--+
*/