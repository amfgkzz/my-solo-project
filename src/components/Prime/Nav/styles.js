import Background from '../../../images/fantasy_football_example.jpg';

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
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        opacity: '0.6',
        filter: 'contrast(200%) grayscale(20%) drop-shadow(1px 1px 1px black)',
    },
    /* General sidebar styles */
    bmMenu: {
        // background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    /* Morph shape necessary with bubble or elastic */
    bmMorphShape: {
        fill: '#373a47'
    },
    /* Wrapper for item list */
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    /* Individual item */
    bmItem: {
        display: 'inline-block',
    },
}

export default styles;