import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';
import { MouseActionProvider } from '@/providers';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <MouseActionProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </MouseActionProvider>
    </BrowserRouter>
  );
}

export default App;
