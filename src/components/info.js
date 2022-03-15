import profilePic from '../../src/images/profile.jpeg'
import linkedinIcon from '../../src/images/linkedin.ico'
import emailIcon from '../../src/images/email.ico'

export default function Info() {
    return (
        <div className="info container">
            <img className="profile-photo" src={profilePic} alt="profile"/>
            <h3 className="name">David Seesahaye</h3>
            <label className="job-title">Software Developer</label>
            <label className="website">david.thedreamatorium.mu</label>
            <div className="contact-actions">
                <button className="email-btn"><img src={emailIcon} alt="linkedIn icon" />Email</button>
                <button className="linkedin-btn"><img src={linkedinIcon} alt="linkedIn icon" />Linkedin</button>
            </div>
        </div>
    );
}
