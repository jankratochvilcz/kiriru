import { useHistory } from "react-router-dom";
import "./Level.scss";

type LevelProps = {
    achievmentTitle: string;
    illustrationPath: string;
    letters: string[];
    achievmentLink: string;
};

const Level = ({
    achievmentTitle,
    illustrationPath,
    letters,
    achievmentLink,
}: LevelProps) => {
    const history = useHistory();

    return (
        <div
            className="level-root"
            onClick={() => history.push(`/practice/${JSON.stringify(letters)}`)}
        >
            <a className="achievment" href={achievmentLink}>
                {achievmentTitle}
            </a>
            <div className="center-column">
                <div className="line" />
                <div className="illustration">
                    <img src={illustrationPath} alt={achievmentTitle} />
                </div>
                <div className="line" />
            </div>
            <div className="letters">
                {letters.map((x) => (
                    <span>{x}</span>
                ))}
            </div>
        </div>
    );
};

export default Level;
