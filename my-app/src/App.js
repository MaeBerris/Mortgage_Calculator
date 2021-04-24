import styled from "styled-components";
import Form from "./components/Form/Form";

function App() {
  return (
    <AppWrapper role="app">
      <Form />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
