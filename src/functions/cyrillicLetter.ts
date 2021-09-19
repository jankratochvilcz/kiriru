import { CyrillicLetter } from "../types/CyrillicLetter";
import { Transliteration } from "../types/Transliteration";

const signs: Transliteration[] = ["hard sign", "soft sign"];

export const isSign = (letter: CyrillicLetter) =>
    signs.some((x) => x === letter.transliteration);
