import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash') // naviage to dashboard when clicked

    let goHomeButton = null
    if (pathname !== '/dash') { // go home if not
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            {/* <p>Current User:</p>
            <p>Status:</p> */}
            {/* FUTURE: add such functionality */}
        </footer>
    )
    return content
}
export default DashFooter