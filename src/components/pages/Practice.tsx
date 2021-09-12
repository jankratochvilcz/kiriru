import "./Practice.scss";

type PracticeProps = {
    letters: string[];
};

const Practice = ({ letters }: PracticeProps) => {
    return <div>{letters[0]}</div>;
};

export default Practice;
