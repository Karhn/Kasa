import FooterImg from "../assets/LOGOFOOTER.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo"> 
                <img src={FooterImg} alt="" />
            </div>
            <p className="footer-text"> © 2020 Kasa. All < br  className="only-mobile"/> rights reserved </p>
        </footer>
    );
}