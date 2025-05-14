let str = prompt("Enter any text?").toLocaleLowerCase();
let userChoiceLetter = prompt(
  "Enter a letter you want to know the no of appearance of it in the given string/text?"
).toLocaleLowerCase();
let count = 0;
let flag = false;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] === userChoiceLetter ||
    str.slice(i, i + userChoiceLetter.length) == userChoiceLetter
  ) {
    count++;
    flag = true;
  }
}
flag? console.log(`${userChoiceLetter} appeared ${count} times in the given text.`): console.log(`${userChoiceLetter} is not in the text`);
