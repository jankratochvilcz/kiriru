import { Impression } from "../models/impression";

export const getHiddenStateText = (impression: Impression) =>
    impression.impressionType === "cyrillic"
        ? `${impression.letter.upperCase}${impression.letter.lowerCase}`
        : impression.letter.transliteration;

export const getRevealedStateText = (impression: Impression) =>
    impression.impressionType === "transcription"
        ? `${impression.letter.upperCase}${impression.letter.lowerCase}`
        : impression.letter.transliteration;

export const getInstruction = (impression: Impression) =>
    impression.impressionType === "cyrillic"
        ? "Try to remember the latin transcription."
        : "Try to remember the cyrillic.";
