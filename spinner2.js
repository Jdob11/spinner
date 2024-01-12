let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"];

let delay = 100;
for (const state of spinner) {
  setTimeout(() => {
    process.stdout.write(state);
  }, delay);
  delay += 200;
}
