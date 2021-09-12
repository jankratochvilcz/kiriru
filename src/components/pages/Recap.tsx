import { GiphyFetch } from "@giphy/js-fetch-api";
import "./Recap.scss";
import { useEffect, useState } from "react";
import { IGif } from "@giphy/js-types";
import { Gif } from "@giphy/react-components";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import { randomIntFromInterval } from "../../functions/number";

// Not great that we're exposing the key, but can't help it until I have a backend.
// It's a rate-limited key, so shouldn't be a problem
const giphyFetch = new GiphyFetch("lEixEwilqOA28pypd0XGigfcIpcVU3Jr");

const Recap = () => {
    const [gif, setGif] = useState<IGif | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await giphyFetch.search("russian dance");
            setGif(data[randomIntFromInterval(0, data.length - 1)]);
        };

        fetch();
    }, []);

    if (!gif) {
        return <></>;
    }

    return (
        <div>
            <h1>Nice work, keep it up! 🙌</h1>
            <Gif gif={gif} width={360} />
            <Link to="/">
                <Button
                    size="large"
                    kind="primary"
                    title="Back to homepage"
                    className="return-button"
                />
            </Link>
        </div>
    );
};

export default Recap;
