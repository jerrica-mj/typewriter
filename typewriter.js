// Animated Sentence Activity
// In this activity we'll take a sentence and display it as an animation.

const sentence = "hello there from lighthouse labs";

// *Switched from for..of loop to for loop to use count in function
for (let i = 0; i < sentence.length; i++) {
  // Increase the timeout to add a delay between each letter output
  const timeout = i * 50;

  // Add a setTimeout to add a delay between character outputs
  setTimeout(() => {
    // console.log() adds a new line character (\n) after the string
    // // In Node, use process.stdout.write to have more control over
    // // the appearance of the 'printout'
    process.stdout.write(sentence[i]);
    // Add a newline after all text, so the prompt is on its own line
    if (i === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, timeout);
}
