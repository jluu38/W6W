// function getMood() {
//   const randomNum = Math.floor(Math.random() * 28) + 1;
//   document.getElementById("pix").src = "images/" + randomNum + ".jpg";
// }

const moods = [
  {
    id: 1,
    mood: "You will face an abject horror from your childhood.",
    desc: "beanie baby shirt"
  },
  { 
    id: 2,
    mood: "You will receive attention, whether you want it or not.",
    desc: "trumpet playing cat"  
  },
  {
    id: 3,
    mood: "You will be left speechless.",
    desc: "princess peach, smiling and speechless"
  },
  {
    id: 4,
    mood: "Take care of yourself.",
    desc: "david byrne is your therapist"
  },
  {
    id: 5,
    mood: "It's bad. But you stay cute.",
    desc: "forlorn teddy bear riding backseat of a garbage truck"    
  },
  {
    id: 6,
    mood: "You cross the picket line by online shopping.",
    desc: "karl marx inspired keychain"
  },
  {
    id: 7,
    mood: "What a beautiful day for introspection.",
    desc: "nicole kidman (left), nicole kidman (right"
  },
  {
    id: 8,
    mood: "You will indulge.",
    desc: "cat armour"
  },
  {
    id: 9,
    mood: "It'll be an out-of-body experience.",
    desc: "a painting by guy rose, restored"
  },
  {
    id: 10,
    mood: "Don't listen to your Imposter Syndrome.",
    desc: "nyc public transit interrogates the definition of self"
  },
  {
    id: 11,
    mood: "You will become wiser.",
    desc: "educated billy goat"
  }
]


function getMood() {
  const randomNum = Math.floor(Math.random() * moods.length)

  const moodSrc = `images/${moods[randomNum].id}.jpg`;
  
  document.querySelector(".pix").setAttribute("src", moodSrc);
  document.querySelector("h2").innerHTML = moods[randomNum].mood;
  document.querySelector("figcaption").innerHTML = `(${moods[randomNum].desc})`;
}