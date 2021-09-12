import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
import PracticeProgress from "../organisms/PracticeProgress";
import "./Practice.scss";

type PracticeProps = {
    letters: string[];
};

const Practice = ({ letters }: PracticeProps) => {
    const [remainingImpressions, setRemainingImpressions] =
        useState<Impression[]>();

    const [currentImpression, setCurrentImpression] = useState<Impression>();
    const [isRevealed, setIsRevealed] = useState(false);
    const [initialImpressionCount, setInitialImpressionCount] = useState(0);
    const [sputinkSuccess, setSputnikSuccess] = useState(false);

    const history = useHistory();

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

        setInitialImpressionCount(shuffled.length);
        setCurrentImpression(shuffled[0]);
        setRemainingImpressions(shuffled.slice(1));
    }, [letters]);

    const goToNextImpression = (nextRemainingImpressions: Impression[]) => {
        if (!nextRemainingImpressions || nextRemainingImpressions.length < 1) {
            history.push("/recap");
        }

        const nextImpression = nextRemainingImpressions[0];
        const updatedRemainingImpressions = nextRemainingImpressions.slice(1);

        setIsRevealed(false);
        setCurrentImpression(nextImpression);
        setRemainingImpressions(updatedRemainingImpressions);
    };

    const answeredCorrectly = () => {
        goToNextImpression(remainingImpressions ?? []);

        setSputnikSuccess(true);
        setTimeout(() => setSputnikSuccess(false), 150);
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

        const updatedRemainingImpressions: Impression[] =
            alreadyHasAnotherImpressionInstance
                ? [...remainingImpressions, currentImpression]
                : [
                      ...remainingImpressions,
                      currentImpression,
                      currentImpression,
                  ];

        const shuffledRemainingImpressions = shuffleArray(
            updatedRemainingImpressions
        );

        goToNextImpression(shuffledRemainingImpressions);
    };

    if (!currentImpression) {
        return <></>;
    }

    const percentage =
        initialImpressionCount -
        (remainingImpressions?.length ?? 0) / initialImpressionCount;
    console.log(percentage);

    return (
        <div className="practice-root">
            <div className="card-with-progress">
                <PracticeProgress
                    className="practice-progress"
                    percentage={percentage}
                    success={sputinkSuccess}
                />
                <Card
                    className="card"
                    text={
                        !isRevealed
                            ? getHiddenStateText(currentImpression)
                            : getRevealedStateText(currentImpression)
                    }
                    itallic={
                        !isRevealed
                            ? currentImpression.impressionType ===
                              "transcription"
                            : currentImpression.impressionType !==
                              "transcription"
                    }
                />
            </div>
            <div className="instruction">
                {!isRevealed
                    ? getInstruction(currentImpression)
                    : "Did you get it right?"}
            </div>
            {!isRevealed ? (
                <Button
                    title="Reveal answer"
                    size="large"
                    kind="primary"
                    onClick={() => setIsRevealed(true)}
                />
            ) : (
                <div className="result-choices">
                    <Button
                        title="No [n]"
                        size="large"
                        onClick={answeredWrongly}
                        hotkey="n"
                    />
                    <Button
                        title="Yes ↵"
                        size="large"
                        kind="primary"
                        onClick={answeredCorrectly}
                    />
                </div>
            )}
        </div>
    );
};

export default Practice;
