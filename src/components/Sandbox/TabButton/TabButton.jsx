function TabButton({ children, ...props,isSelected }) {

    return (
        <li className="tab-button-item">
            <button className={isSelected ? "active" : "tab-button"}{...props}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;
