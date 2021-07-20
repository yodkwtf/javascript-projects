const talkBtn = document.querySelector('.talk');
const speakMsg = document.querySelector('h5');
const result = document.querySelector('.result');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  result.style.display = 'none';
};

recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  result.textContent = transcript;
  result.style.display = 'block';

  readTranscript(transcript);

  talkBtn.style.display = 'block';
  speakMsg.style.display = 'none';
};

// #FUNCTIONS
// read transcript
const readTranscript = (msg) => {
  const finalMsg = checkUserMsg(msg);

  const speech = new SpeechSynthesisUtterance();
  speech.rate = 0.8;
  speech.volume = 0.8;
  speech.pitch = 0.8;
  speech.text = finalMsg;
  window.speechSynthesis.speak(speech);
};

// check user msg
const checkUserMsg = (msg) => {
  if (
    msg.includes('how are you') ||
    msg.includes('what is up') ||
    msg.includes(`what's going on`)
  ) {
    return generateReplyMsg(greetings);
  }

  if (msg.includes('love') || msg.includes('sex') || msg.includes('like me')) {
    return generateReplyMsg(love);
  }

  if (
    msg.includes('gf') ||
    msg.includes('relationship') ||
    msg.includes('girlfriend')
  ) {
    return generateReplyMsg(relationship);
  }

  if (msg.includes('weather')) {
    return generateReplyMsg(weather);
  }

  return msg;
};

// reply to text functions
const generateReplyMsg = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

//# EVENT LISTENERS
talkBtn.addEventListener('click', () => {
  recognition.start();
  talkBtn.style.display = 'none';
  speakMsg.style.display = 'block';
});

// console.log(greetings[Math.floor(Math.random * greetings.length)]);
