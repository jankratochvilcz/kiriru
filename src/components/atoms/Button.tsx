import classNames from "classnames";
import "./Button.scss";

type ButtonSize = "normal" | "large";
type ButtonKind = "normal" | "primary";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
    size?: ButtonSize;
    kind?: ButtonKind;
};

const Button = ({ title, onClick, className, size, kind }: ButtonProps) => (
    <button
        onClick={onClick}
        className={classNames("button", className, {
            large: size === "large",
            primary: kind === "primary",
        })}
    >
        {title}
    </button>
);

export default Button;
