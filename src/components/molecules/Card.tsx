import classNames from "classnames";
import "./Card.scss";

type CardProps = {
    text: string;
    itallic?: boolean;
};

const Card = ({ text, itallic }: CardProps) => (
    <div
        className={classNames("letter-card", {
            itallic: !!itallic,
        })}
    >
        <span>{text}</span>
    </div>
);

export default Card;
