import classNames from "classnames";
import rocket from "../../assets/illustrations/noun_Sputnik_190534_gray.svg";

import "./PracticeProgress.scss";

type PracticeProgressProps = {
    percentage: number;
    className?: string;
};

const RADIUS = 168;
const IMG_WIDTH = 36;

const PracticeProgress = ({ percentage, className }: PracticeProgressProps) => {
    const degree = 360 * percentage + 180;
    const size = RADIUS * 2 + IMG_WIDTH;

    const x = RADIUS * Math.sin((degree * Math.PI) / 180);
    const y = RADIUS * Math.cos((degree * Math.PI) / 180) * -1;

    const marginLeft = (x - RADIUS) * -1;
    const marginTop = (y - RADIUS) * -1;

    return (
        <div
            className={classNames("root", className)}
            style={{ width: size, height: size }}
        >
            <img
                src={rocket}
                className="rocket"
                style={{
                    width: IMG_WIDTH,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    transform: `rotate(${360 * percentage}deg)`,
                }}
                alt="rocket"
            />
        </div>
    );
};

export default PracticeProgress;
