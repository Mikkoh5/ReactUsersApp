import './SocialCard.css';
import Location from './Location';
import PhoneNumber from './PhoneNumber';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card_title">{userData.name.first} {userData.name.last}</div>
            <div className="card_body">
                <Location location={userData.address} />
                <PhoneNumber type={"Home"} number={userData.phone}></PhoneNumber>
                <div className="card_image"><img src={userData} alt="user_image"/></div>
            </div>
        </div>
    );
};

export default SocialCard;