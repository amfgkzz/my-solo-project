import { textAlign } from "@material-ui/system";

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
        height: '100%',
        top: '0',
        left: '0',
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1545080423-4295a9c1e625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80" + ")",
        backgroundSize: ' contain, cover',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
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