function displayIdiom(response) {
  new Typewriter("#idiom", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateIdiom(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let idiomElement = document.querySelector("#idiom");

  let apiKey = "d4o318e2ca1b452fe0afa20t13c04035";
  let context =
    "You are an english teacher specilaized on esl Spanish speaking students who struggle with english phrases. Your mission is to write short 3 sentenc and separate each line with a <br /> idioms and sample sentence and ensure to follow user instructions.Finally put a <br /> then sign with SheCodes AI_ Raisa Rosario  inside a <strong> element at the end of the idiom and sample sentence.";
  let prompt = `User Instructions: Generate a english idiom about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  idiomElement.classList.remove("hidden");
  idiomElement.innerHTML = `<span class="generating"> Generating an English idiom about ${instructionsInput.value}...</span>`;

  axios.get(apiURL).then(displayIdiom);
}

let idiomFormElement = document.querySelector("#idiom-generator-form");
idiomFormElement.addEventListener("submit", generateIdiom);
