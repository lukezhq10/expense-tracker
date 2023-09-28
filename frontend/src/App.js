import styled from 'styled-components';
import bg from './img/bg.png';
import {MainLayout} from './styles/layouts';

function App() {
  return (
    <AppStyled bg={bg} className='App'>
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relatve;
`;

export default App;
