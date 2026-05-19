const UnorderedList = ({ items, className }) => {
    return (
        <ul className={className}>
            {items.map((items) => (
                <a href={items.link || "#"}>
                    <li key={items.id}>
                        {items.icon && <span className="list-icon">{items.icon}</span>}
                        <span className="list-label">{items.label}</span>
                        
                    </li>
                </a>
            ))}
        </ul>
    );
}

export default UnorderedList;