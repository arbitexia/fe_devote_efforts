import { Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutContainer from '../pages/About';
import PricingPage from '../pages/Pricing';
import { BasicLayout } from '../layout';
import PublicRoute from './public-route';
import '@/styles/App.scss';

const AppRoutes = () => (
  <Switch>
    <PublicRoute exact path="/" component={HomePage} layout={BasicLayout} />
    <PublicRoute
      exact
      path="/pricing"
      component={PricingPage}
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
