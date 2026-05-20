import './Statcard.css';

const StatCard = ({ icon, title, amount, change, changeType, extra, isMenuOpen }) => {
    return (
        <div className={`stat-card  ${isMenuOpen ? 'shifted' : ''}`}>
            <div className="stat-card-left">
                <img src={icon} />
            </div>
            <div className="stat-card-rigt">
                <p className="title">{title}</p>
                <h2>{amount}</h2>
                {change && (
                    <p className={`change ${changeType}`}>
                        {change}
                    </p>
                )}
                {extra && <div className="extra">{extra}</div>}
            </div>

        </div>
    )
}

export default StatCard;