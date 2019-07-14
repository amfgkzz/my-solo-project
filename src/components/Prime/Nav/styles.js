import Background from '../../../images/bg.jpg';

let styles = {
    bmBurgerBars: {
        background: '#373a47'
    },
    /* Color/shape of burger icon bars on hover*/
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmMenuWrap: {
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundImage: `linear-gradient(to top, rgba(118, 76, 214, 0.18), rgba(110, 45, 181, 0.83)), url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
    },
    /* General sidebar styles */
    bmMenu: {
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    /* Morph shape necessary with bubble or elastic */
    bmMorphShape: {
        fill: '#373a47'
    },
    /* Wrapper for item list */
    bmItemList: {
        position: 'fixed',
        color: '#b8b7ad',
        padding: '0.8em',
    },
    /* Individual item */
    bmItem: {
        display: 'inline-block',
    },
}

export default styles;