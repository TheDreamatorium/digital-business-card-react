import twitterIcon from '../../src/images/twitter.png'
import facebookIcon from '../../src/images/facebook.png'
import instagramIcon from '../../src/images/instagram.png'
import githubIcon from '../../src/images/github.png'



export default function Footer() {
    return (
        <div className="footer container">
            <img alt='twitter' src={twitterIcon}/>
            <img alt='facebook' src={facebookIcon}/>
            <img alt='instagram' src={instagramIcon}/>
            <img alt='github' src={githubIcon}/>
        </div>
    );
}
