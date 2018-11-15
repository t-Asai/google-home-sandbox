const googlehome = require("google-home-notifier");
const language = "ja";

googlehome.device("Google-Home", language);

const hello = async num => {
  googlehome.notify(
    `こんにちは。私はグーグルホームです。${num}回目の挨拶ですね`,
    res => {
      console.log(res);
      setTimeout(hello, 8000, num + 1);
    }
  );
};

hello(1);
