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
      <nav class="navigation">
        <div class="nav-brand">Emoji Checker</div>
        <ul class="list-non-bullet nav-pills list-on-one-line">
          <li class="list-item-inline">
            <a class="link link-active" href="https://zoef-shaikh.netlify.app/">
              Home
            </a>
          </li>
          <li class="list-item-inline">
            <a
              class="link"
              href="https://zoef-shaikh.netlify.app/projects.html"
            >
              Projects
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://zoef-shaikh.netlify.app/blog.html">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class={"container"}>
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
      <footer class="footer">
        <div class="footer-heading">social media presence</div>
        <ul class="social-links list-non-bullet list-on-one-line">
          <li class="list-item-inline">
            <a class="link" href="https://github.com/zoef-yt">
              Github
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/zoef_yt">
              Twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a
              class="link"
              href="https://www.linkedin.com/in/zoef-shaikh-279340201/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

var emojiDictionary = {
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
  "😒": "unamused face	",
  "🙄": "face with rolling eyes	eyeroll  ",
  "😬": "grimacing face	 ",
  "🤥": "lying face	",
  "😌": "relieved face	",
  "😔": "pensive face	 ",
  "😪": "sleepy face	 ",
  "🤤": "drooling face	",
  "😴": "sleeping face	 ",
  "😷": "face with medical mask	cold",
  "🤒": "face with thermometer	",
  "🤕": "face with head-bandage	  ",
  "🤢": "nauseated face	",
  "🤮": "face vomiting	  ",
  "🤧": "sneezing face	",
  "🥵": "hot face	feverish  ",
  "🥶": "cold face	blue-faced ",
  "🥴": "woozy face	dizzy",
  "😵": "face with crossed-out eyes	",
  "😕": "confused face	confused ",
  "😟": "worried face	",
  "🙁": "slightly frowning face	 ",
  "😮": "face with open mouth	 ",
  "😯": "hushed face	",
  "😲": "astonished face	astonished",
  "😳": "flushed face	dazed ",
  "🥺": "pleading face	begging  ",
  "😦": "frowning face with open mouth",
  "😧": "anguished face	anguished ",
  "😨": "fearful face	 ",
  "😰": "anxious face with sweat",
  "😥": "sad but relieved face	 ",
  "😢": "crying face	",
  "😭": "loudly crying face	 ",
  "😱": "face screaming in fear	 ",
  "😖": "confounded face	confounded ",
  "😣": "persevering face	face ",
  "😞": "disappointed face	",
  "😓": "downcast face with sweat	cold",
  "😩": "weary face	",
  "😫": "tired face	 ",
  "🥱": "yawning face	bored ",
  "": ""
};
