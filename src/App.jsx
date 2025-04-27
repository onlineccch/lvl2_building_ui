import { Card, Modal, List, withUser, Greeting, Tabs } from "./components";

function App() {
  // for hoc componetn
  const GreetingWithUser = withUser(Greeting);

  return (
    <>
      {/* Children as Props */}
      <span>1. Children as Props</span>
      <Card>
        <h2>Hello World</h2>
        <p>This is inside a card.</p>
      </Card>
      <br />
      <hr />
      {/* Component Injection */}
      <span>2. Component Injection</span>
      <Modal
        header={<h1>Title</h1>}
        body={<p>This is body text.</p>}
        footer={<button>Close</button>}
      />
      <br />
      <hr />
      {/* Render Props */}
      <span>3. Render Props</span>
      <List
        items={["apple", "banana", "cherry"]}
        renderItem={(item) => <strong>{item}</strong>}
      />
      <br />
      <hr />
      {/* Higher-Order Compoent*/}
      <span>4. Higher-Order Component</span>
      <GreetingWithUser />
      <br />
      <hr />
      {/* Compound components*/}
      <span>5. Compound components</span>
      <Tabs>
        <Tabs.Tab label="Tab 1">Content 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">Content 2</Tabs.Tab>
      </Tabs>
    </>
  );
}

export default App;
