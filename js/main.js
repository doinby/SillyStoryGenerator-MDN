const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText =
"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
    "Willy the Goblin", 
    "Big Daddy", 
    "Father Christmas"
];
const insertY = [
    "the soup kitchen", 
    "Disneyland", 
    "the White House"
];
const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory
      .replace(":insertx:", xItem)
      .replace(":inserty:", yItem)
      .replace(":insertz:", zItem)
      .replace(":insertx:", xItem);
    
    // if(customName.value !== '') {
    //     let name = customName.value;
        
    // }
    
    // if(document.getElementById("uk").checked) {
    //     let weight = Math.round(300);
    //     let temperature =  Math.round(94);
        
    // }
    
    // story.textContent = ;
    // story.style.visibility = 'visible';
}