function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}

Tabs.Tab = function Tab({ label, children }) {
  return (
    <div>
      <h2>{label}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Tabs;
