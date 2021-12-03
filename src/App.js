import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojis = Object.keys(emojiDictionary);
  const [showText, setShowText] = useState(
    "Click or Type to see which emoji is this"
  );
  function inputHandler(event) {
    if (event.target.value in emojiDictionary) {
      setShowText(emojiDictionary[event.target.value]);
    } else {
      setShowText("We Don't Have This Emoji. Sorry!");
    }
  }
  function clickEmoji(index) {
    setShowText(emojiDictionary[index]);
  }
  return (
    <div className="App">
      <h1>Emoji Checker</h1>
      <input onChange={inputHandler}></input>
      <h1>{showText} </h1>
      <div class={"emojiHolder"}>
        {emojis.map((e, index) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
              key={e}
              onClick={() => clickEmoji(e)}
            >
              {e}
            </span>
          );
        })}
      </div>
    </div>
  );
}

var emojiDictionary = {
  "": "",
  "😀": "grinning face",
  "😃": "grinning face with big eyes	face ",
  "😄": "grinning face with smiling eyes	eye ",
  "😁": "beaming face with smiling eyes",
  "😆": "grinning squinting face	face",
  "😅": "grinning face with sweat	cold",
  "🤣": "rolling on the floor laughing	face ",
  "😂": "face with tears of joy	face ",
  "🙂": "slightly smiling face	face ",
  "🙃": "upside-down face	face ",
  "😉": "winking face	face ",
  "😊": "smiling face with smiling eyes	blush ",
  "😇": "smiling face with halo	angel ",
  "🥰": "smiling face with hearts	adore ",
  "😍": "smiling face with heart-eyes	eye",
  "🤩": "star-struck	eyes ",
  "😘": "face blowing a kiss	face ",
  "😗": "kissing face	face ",
  "😚": "kissing face with closed eyes	closed ",
  "😙": "kissing face with smiling eyes	eye",
  "🥲": "smiling face with tear	grateful",
  "😋": "face savoring food	delicious ",
  "😛": "face with tongue	face ",
  "😜": "winking face with tongue	eye",
  "🤪": "zany face	eye",
  "😝": "squinting face with tongue	eye",
  "🤑": "money-mouth face	face",
  "🤗": "smiling face with open hands	face",
  "🤭": "face with hand over mouth	face with hand over mouth",
  "🤫": "shushing face	quiet ",
  "🤔": "thinking face	face",
  "🤐": "zipper-mouth face	face ",
  "🤨": "face with raised eyebrow	distrust ",
  "😐": "neutral face	deadpan ",
  "😑": "expressionless face	expressionless ",
  "😶": "face without mouth	face ",
  "😏": "smirking face",
  "😒": "unamused face	face",
  "🙄": "face with rolling eyes	eyeroll  ",
  "😬": "grimacing face	face ",
  "🤥": "lying face	",
  "😌": "relieved face	face",
  "😔": "pensive face	dejected ",
  "😪": "sleepy face	face ",
  "🤤": "drooling face	drooling",
  "😴": "sleeping face	face ",
  "😷": "face with medical mask	cold",
  "🤒": "face with thermometer	face",
  "🤕": "face with head-bandage	bandage  ",
  "🤢": "nauseated face	face",
  "🤮": "face vomiting	face vomiting ",
  "🤧": "sneezing face	face",
  "🥵": "hot face	feverish  ",
  "🥶": "cold face	blue-faced ",
  "🥴": "woozy face	dizzy",
  "😵": "face with crossed-out eyes	",
  "😕": "confused face	confused ",
  "😟": "worried face	face",
  "🙁": "slightly frowning face	face ",
  "😮": "face with open mouth	face ",
  "😯": "hushed face	face",
  "😲": "astonished face	astonished",
  "😳": "flushed face	dazed ",
  "🥺": "pleading face	begging  ",
  "😦": "frowning face with open mouth",
  "😧": "anguished face	anguished ",
  "😨": "fearful face	face ",
  "😰": "anxious face with sweat",
  "😥": "sad but relieved face	disappointed ",
  "😢": "crying face	cry",
  "😭": "loudly crying face	cry ",
  "😱": "face screaming in fear	face ",
  "😖": "confounded face	confounded ",
  "😣": "persevering face	face ",
  "😞": "disappointed face	disappointed",
  "😓": "downcast face with sweat	cold",
  "😩": "weary face	face",
  "😫": "tired face	face ",
  "🥱": "yawning face	bored "
};
