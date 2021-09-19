import { Impression, ImpressionType } from "../models/impression";
import { CyrillicLetter } from "../types/CyrillicLetter";
import { isSign } from "./cyrillicLetter";

export const getInstruction = (impression: Impression) =>
    impression.impressionType !== "cyrillic"
        ? "Try to remember the latin transcription."
        : "Try to remember the cyrillic.";

export const getTextTypeToShow = (
    impression: Impression,
    revealed: boolean
): ImpressionType => {
    const { impressionType } = impression;
    return (!revealed && impressionType !== "cyrillic") ||
        (revealed && impressionType === "cyrillic")
        ? "cyrillic"
        : "transcription";
};

export const getCyrillicLabel = (letter: CyrillicLetter) =>
    `${letter.upperCase ?? ""}${letter.lowerCase ?? ""}`;

export const getTranscriptionLabel = (letter: CyrillicLetter) =>
    isSign(letter) ? letter.transliteration : `/${letter.transliteration}/`;
