// Random jokes generator
const jokesArray = [];
const createJokes = (question, answer) => {
  return {
    question,
    answer,
  };
};

// jokes data
jokesArray.push(
  createJokes("Why did the bicycle fall over?", "Because it was two tired.")
);
jokesArray.push(createJokes("What do elves learn in school?", "The elf-abet"));
jokesArray.push(
  createJokes("What do sprinters eat before they race?", "Nothing. They fast.")
);

const randomJoke = (arr) => {
  let jokeIndex = Math.floor(Math.random() * arr.length);
  return arr[jokeIndex].question + "\n" + arr[jokeIndex].answer;
};

console.log(randomJoke(jokesArray));
