import { ref } from 'vue';

import axios from 'axios';

let phrase = ref();

const api = axios.create({
    baseURL: "https://api.funtranslations.com/",
});

export const  useTranslator = () => {
    console.log("test message");
    const search = async (text) => {
        const res = await api.get(`/translate/yoda.json?text=${text}`);

          phrase.value = res.data.contents.translated;
          console.log(phrase);
      };
      return { phrase, search };
};
