const UnorderedList = ({ items, className, date }) => {
    return (
        <ul className={className}>
            {items.map((items) => (
                <li key={items.id}>
                    <a href={items.link || "#"}>
                        {items.icon && <span className="list-icon">{items.icon}</span>}
                        <span className="list-label">{items.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default UnorderedList;