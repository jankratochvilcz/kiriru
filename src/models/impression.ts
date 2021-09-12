import { CyrillicLetter } from "../types/CyrillicLetter";

export type ImpressionType = "cyrillic" | "transcription";

export type Impression = {
    letter: CyrillicLetter;
    impressionType: ImpressionType;
};
