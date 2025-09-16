import { useEffect } from "react";

const Footer = () => {

    const year = new Date().getFullYear();
    const month = new Date().toLocaleString('default', { month: 'long' });

    return (
        <footer>
            <div className="w-4/5 mx-auto py-8">
                <div className="footer-main flex justify-between">
                    <div className="footer-left w-1/2">
                        <div className="footer-logo">
                            <img src="../assets/brand.png" alt="Quiz Logo" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed de euismod tempor incididunt ut labore et
                            dolore
                            magna aliqua.</p>
                    </div>

                    <div className="footer-menu w-1/4 space-y-2">
                        <div className="text-2xl font-bold">Menu</div>
                        <ul>
                            <li className="*:hover:text-blue-500"><a href="home.html">Home</a></li>
                            <li className="*:hover:text-blue-500"><a href="quizzes.html">Quizzes</a></li>
                            <li className="*:hover:text-blue-500"><a href="about.html">About</a></li>
                            <li className="*:hover:text-blue-500"><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact w-1/4 *:block space-y-2">
                        <div className="text-2xl font-bold">Contact</div>
                        <ul>
                            <li className="*:hover:text-blue-500"><a href="mailto:copthink2021@gmail.com"><i className="fas fa-envelope"></i> copthink2021@gmail.com</a></li>
                            <li className="*:hover:text-blue-500"><a href="tel:+84944551356"><i className="fas fa-phone"></i> +84 944 551 356</a></li>
                            <li className="*:hover:text-blue-500"><a href="#"><i className="fas fa-map-marker-alt"></i> 123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom text-center mt-8">
                    <p>&copy; {month} {year} Quiz App. All rights reserved.</p>
                </div></div>
        </footer>
    )
}

export default Footer;