function TabButton({ children, isSelected, ...props }) {
  return (
    <li className="tab-button-item">
      <button className={isSelected ? 'active' : 'tab-button'} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
