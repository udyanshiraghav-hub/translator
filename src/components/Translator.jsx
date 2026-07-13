import { useState, useEffect, useCallback } from "react";
import Loader from "./Loader";
import Result from "./Result";
import LanguageSelector from "./LanguageSelector";
import { translateText } from "../services/translateApi";

function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Translator App Loaded");
  }, []);

  const handleTranslate = useCallback(async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const result = await translateText(text, language);

      setTranslatedText(result);
    } catch (error) {
      console.error(error);
      alert("Translation failed!");
    } finally {
      setLoading(false);
    }
  }, [text, language]);

  return (
    <div className="flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[600px]">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          AI Language Translator
        </h2>

        <textarea
          rows="6"
          placeholder="Type your text here..."
          className="w-full mt-6 border rounded-lg p-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />

        <p className="mt-4 text-gray-700">
          You typed:
        </p>

        <div className="bg-gray-100 p-3 rounded-lg mt-2">
          {text}
        </div>

        <button
          onClick={handleTranslate}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Translate
        </button>

        {loading && <Loader />}

        <Result translatedText={translatedText} />
      </div>
    </div>
  );
}

export default Translator;