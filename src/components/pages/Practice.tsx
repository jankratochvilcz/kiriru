import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { shuffleArray } from "../../functions/array";
import {
    getInstruction,
    getHiddenStateText,
    getRevealedStateText,
} from "../../functions/impression";
import { cyrillicAlphabet } from "../../models/cyrillicAlphabet";
import { Impression, ImpressionType } from "../../models/impression";
import Button from "../atoms/Button";
import Card from "../molecules/Card";
import "./Practice.scss";

type PracticeProps = {
    letters: string[];
};

const Practice = ({ letters }: PracticeProps) => {
    const [remainingImpressions, setRemainingImpressions] =
        useState<Impression[]>();

    const [currentImpression, setCurrentImpression] = useState<Impression>();
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const lettersToPractice = cyrillicAlphabet.filter((x) =>
            letters.some((y) => y === x.upperCase)
        );

        const letterToPracticeDuplicated = [
            ...lettersToPractice.map((x) => ({
                letter: x,
                impressionType: "cyrillic" as ImpressionType,
            })),
            ...lettersToPractice.map((x) => ({
                letter: x,
                impressionType: "transcription" as ImpressionType,
            })),
        ];

        const shuffled = shuffleArray(letterToPracticeDuplicated);

        setCurrentImpression(shuffled[0]);
        setRemainingImpressions(shuffled.slice(1));
    }, [letters]);

    const goToNextImpression = (nextRemainingImpressions: Impression[]) => {
        if (!nextRemainingImpressions || nextRemainingImpressions.length < 1) {
            return <Redirect to="/" />;
        }

        const nextImpression = nextRemainingImpressions[0];
        const updatedRemainingImpressions = nextRemainingImpressions.slice(1);

        console.log(updatedRemainingImpressions);
        setIsRevealed(false);
        setCurrentImpression(nextImpression);
        setRemainingImpressions(updatedRemainingImpressions);
    };

    const answeredCorrectly = () => {
        goToNextImpression(remainingImpressions ?? []);
    };

    const answeredWrongly = () => {
        if (remainingImpressions === undefined) {
            throw new Error(
                "Remaining impressions shouldn't be undefined at this point"
            );
        }

        if (currentImpression === undefined) {
            throw new Error(
                "Remaining impressions shouldn't be undefined at this point"
            );
        }

        const alreadyHasAnotherImpressionInstance = remainingImpressions?.some(
            (x) =>
                x.impressionType === currentImpression?.impressionType &&
                x.letter === currentImpression.letter
        );

        console.log(alreadyHasAnotherImpressionInstance);

        const updatedRemainingImpressions: Impression[] =
            alreadyHasAnotherImpressionInstance
                ? [...remainingImpressions, currentImpression]
                : [
                      ...remainingImpressions,
                      currentImpression,
                      currentImpression,
                  ];

        console.log(updatedRemainingImpressions);

        const shuffledRemainingImpressions = shuffleArray(
            updatedRemainingImpressions
        );

        goToNextImpression(shuffledRemainingImpressions);
    };

    if (!currentImpression) {
        return <></>;
    }

    console.log(remainingImpressions);

    if (!isRevealed) {
        return (
            <div className="practice-root">
                <Card
                    text={getHiddenStateText(currentImpression)}
                    itallic={
                        currentImpression.impressionType === "transcription"
                    }
                />
                <div className="instruction">
                    {getInstruction(currentImpression)}
                </div>
                <Button
                    title="Reveal answer"
                    size="large"
                    kind="primary"
                    onClick={() => setIsRevealed(true)}
                />
            </div>
        );
    }

    return (
        <div className="practice-root">
            <Card
                text={getRevealedStateText(currentImpression)}
                itallic={currentImpression.impressionType !== "transcription"}
            />
            <div className="instruction">Did you get it right?</div>
            <div className="result-choices">
                <Button title="No" size="large" onClick={answeredWrongly} />
                <Button
                    title="Yes"
                    size="large"
                    kind="primary"
                    onClick={answeredCorrectly}
                />
            </div>
        </div>
    );
};

export default Practice;
