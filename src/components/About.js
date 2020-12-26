import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <a href="/">Logo</a>
                </div>
                <nav className="navlinks">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li className="active"><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>This is an About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla commodi eligendi omnis dolorem repellendus illo exercitationem deserunt perspiciatis ipsam eum, recusandae aperiam quod, nesciunt sit corrupti iste laborum laboriosam consequatur atque, fugiat natus. Maxime quod ipsum iure nam. Assumenda eos vitae quaerat facere. Perspiciatis temporibus rerum vero suscipit consequatur cum accusamus! Minima veniam tempora, accusamus animi numquam odio voluptas ab debitis necessitatibus eligendi dolorem nulla quisquam perferendis ducimus sit unde. Vero fugit quae delectus adipisci mollitia quisquam velit eveniet culpa deserunt doloremque, facilis, similique illum porro. Temporibus, doloribus. Similique.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, sit quia. Architecto facilis, necessitatibus cupiditate cumque est blanditiis hic soluta ipsa, repellendus molestiae laudantium ipsum nulla fugiat rerum eveniet dolorem?</p>
            </section>
            <footer>
                <p>Copyright &copy; 2020 | All rights reserved</p>
            </footer>
        </div>
    );
}

export default About;