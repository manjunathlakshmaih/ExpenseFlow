const UnorderedList = ({ items, className, date }) => {
    return (
        <ul className={className}>
            {items.map((items) => (
                <a href={items.link || "#"}>
                    <li key={items.id}>
                        {items.icon && <span className="list-icon">{items.icon || items.description}</span>}
                        <span className="list-label">{items.label || items.amount}</span>
                        {date && <span className="list-date">{items.date}</span>}
                    </li>
                </a>
            ))}
        </ul>
    );
}

export default UnorderedList;