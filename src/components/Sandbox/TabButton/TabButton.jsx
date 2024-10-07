import "./TabButton.css";


function TabButton({ children, onSelect,isSelected }) {

    return (
        <li className="tab-button-item">
            <button onClick={onSelect} className={isSelected ? "active" : "tab-button"}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;
