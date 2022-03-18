import { Switch } from 'react-router-dom';
import HomeContainer from '../pages/home';
import AboutContainer from '../pages/About';
import { BasicLayout } from '../layout';
import PublicRoute from './public-route';
import '../styles/App.scss';

const AppRoutes = () => (
  <Switch>
    <PublicRoute
      exact
      path="/"
      component={HomeContainer}
      layout={BasicLayout}
    />
    <PublicRoute
      exact
      path="/aboutus"
      component={AboutContainer}
      layout={BasicLayout}
    />
  </Switch>
);

export default AppRoutes;
