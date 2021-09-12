import classNames from "classnames";
import "./Button.scss";

type ButtonSize = "normal" | "large";
type ButtonKind = "normal" | "primary";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    cssClass?: string;
    size?: ButtonSize;
    kind?: ButtonKind;
};

const Button = ({ title, onClick, cssClass, size, kind }: ButtonProps) => (
    <button
        onClick={onClick}
        className={classNames("button", cssClass, {
            large: size === "large",
            primary: kind === "primary",
        })}
    >
        {title}
    </button>
);

export default Button;
