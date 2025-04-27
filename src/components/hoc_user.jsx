function withUser(Component) {
  return function WrappedComponent(props) {
    const user = { name: "Alice" }; // pretend we fetched it
    return <Component {...props} user={user} />;
  };
}

export default withUser;
