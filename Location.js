import './Location.css';
const Location = ({ location }) => {
    return (
        <div className="location">
            <p>{location.street} {location.name}</p>
            <p>{location.suite}</p>
            <p>{location.city}</p>
            <p>{location.zipcode}</p>
        </div>
    )
};

export default Location;