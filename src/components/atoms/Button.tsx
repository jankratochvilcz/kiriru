import classNames from "classnames";
import Hotkeys from "react-hot-keys";
import "./Button.scss";

type ButtonSize = "normal" | "large";
type ButtonKind = "normal" | "primary";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
    size?: ButtonSize;
    kind?: ButtonKind;
    hotkey?: string;
};

const Button = ({
    title,
    onClick,
    className,
    size,
    kind,
    hotkey,
}: ButtonProps) => (
    <Hotkeys
        keyName={hotkey ?? (kind === "primary" ? "Enter" : hotkey)}
        onKeyDown={onClick}
    >
        <button
            onClick={onClick}
            className={classNames("button", className, {
                large: size === "large",
                primary: kind === "primary",
            })}
        >
            {title}
        </button>
    </Hotkeys>
);

export default Button;
