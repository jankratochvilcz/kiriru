import classNames from "classnames";
import "./Card.scss";

type CardProps = {
    text: string;
    itallic?: boolean;
    className?: string;
};

const Card = ({ text, itallic, className }: CardProps) => (
    <div
        className={classNames(
            "letter-card",
            {
                itallic: !!itallic,
            },
            className
        )}
    >
        <span>{text}</span>
    </div>
);

export default Card;
