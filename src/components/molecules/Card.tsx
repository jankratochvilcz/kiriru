import classNames from "classnames";
import { isSign } from "../../functions/cyrillicLetter";
import {
    getCyrillicLabel,
    getTextTypeToShow,
    getTranscriptionLabel,
} from "../../functions/impression";
import { Impression } from "../../models/impression";
import "./Card.scss";

type CardProps = {
    impression: Impression;
    className?: string;
    revealed: boolean;
};

const Card = ({ impression, className, revealed }: CardProps) => {
    const { letter } = impression;

    const showCyrillic = getTextTypeToShow(impression, revealed) === "cyrillic";

    const textToShow = showCyrillic
        ? getCyrillicLabel(letter)
        : getTranscriptionLabel(letter);

    return (
        <div
            className={classNames(
                "letter-card",
                {
                    itallic: !showCyrillic && isSign(letter),
                },
                className
            )}
        >
            <span>{textToShow}</span>
        </div>
    );
};

export default Card;
