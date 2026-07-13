import axios from "axios";

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.get(
      "https://unlimited-google-translate1.p.rapidapi.com/api/google-translate",
      {
        params: {
          source: "en",
          target: targetLanguage,
          text: text,
        },
        headers: {
          "x-rapidapi-key": "d7209286b8msh655ddf8c1ddf015p15cbc3jsn228e0d55dd62",
          "x-rapidapi-host": "unlimited-google-translate1.p.rapidapi.com",
        },
      }
    );

    console.log("API Response:", response.data);

    // API response se translated text nikaalo
    if (response.data.translatedText) {
      return response.data.translatedText;
    }

    if (response.data.translation) {
      return response.data.translation;
    }

    if (response.data.result) {
      return response.data.result;
    }

    if (response.data.text) {
      return response.data.text;
    }

    return response.data.translated_text;
  } catch (error) {
    console.error("Translation Error:", error.response?.data || error.message);
    throw error;
  }
};