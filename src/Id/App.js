function App() {
  // below are 2 custom component with the same id if ids are hard-coded in EmailForm
  // its buggish that the 2nd EmailForm will not be reachable
  return (
    <div>
      <EmailForm></EmailForm>
      <article style={{ marginBlock: "1rem" }}>An essay</article>
      <EmailForm></EmailForm>
    </div>
  );
}

export default App;
