import React from 'react';
import styled from 'styled-components';
import Register from './features/register/template/Register';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const App = () => {
  return (
    <Container>
      <Register />
    </Container>
  );
};

export default App;
