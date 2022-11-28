import { Link } from 'react-router-dom'

const Public = () => { // landing page
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to the <span className="nowrap">IT help desk ticketing system!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in beautiful Utah, eAssist Dental Solutions provides a dental billing platform created by dentists, for dentists.</p>
                <address className="public__addr">
                    eAssist Dental Solutions<br />
                    665 W 750 N <br />
                    American Fork, UT 84003<br />
                    <a href="tel:+15555555555">(844) 327-7478</a>
                </address>
                <br />
                <p>To submit or work on a ticket click on the button below</p>
            </main>
            <footer>
                <Link to="/dash">Tickets</Link>
            </footer>
        </section>

    )
    return content
}
export default Public