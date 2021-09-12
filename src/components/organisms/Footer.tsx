import "./Footer.scss";

const Footer = () => (
    <div className="footer-root">
        <a
            href="https://www.buymeacoffee.com/janjanxyz"
            target="_blank"
            rel="noreferrer"
        >
            <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className="buymeacoffee"
            />
        </a>
        <div>
            attributions and source on{" "}
            <a href="https://github.com/jankratochvilcz/kiriru/">GitHub</a>
        </div>
    </div>
);

export default Footer;
