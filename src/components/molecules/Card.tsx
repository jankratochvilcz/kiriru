import classNames from "classnames";
import "./Card.scss";

type CardProps = {
    text: string;
    isTranscription?: boolean;
    className?: string;
};

const Card = ({ text, isTranscription, className }: CardProps) => (
    <div className={classNames("letter-card", className)}>
        <span>{isTranscription ? `/${text}/` : text}</span>
    </div>
);

export default Card;
