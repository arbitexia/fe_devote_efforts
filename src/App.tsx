import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';
import { MouseActionProvider } from '@/providers';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MouseActionProvider>
          <AppRoutes />
        </MouseActionProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
