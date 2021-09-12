import { Impression } from "../models/impression";

const getUpperCase = (impression: Impression) =>
    impression.letter.upperCase ?? "";

export const getHiddenStateText = (impression: Impression) =>
    impression.impressionType === "cyrillic"
        ? `${getUpperCase(impression)}${impression.letter.lowerCase}`
        : impression.letter.transliteration;

export const getRevealedStateText = (impression: Impression) =>
    impression.impressionType === "transcription"
        ? `${getUpperCase(impression)}${impression.letter.lowerCase}`
        : impression.letter.transliteration;

export const getInstruction = (impression: Impression) =>
    impression.impressionType === "cyrillic"
        ? "Try to remember the latin transcription."
        : "Try to remember the cyrillic.";
