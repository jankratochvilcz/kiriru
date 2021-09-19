import { Transliteration } from "./Transliteration";

export type CyrillicLetter = {
    upperCase?: string;
    lowerCase: string;
    transliteration: Transliteration;
};
