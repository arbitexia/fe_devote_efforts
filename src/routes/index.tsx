import { Switch } from 'react-router-dom'
import HomeContainer from '../pages/home'
import { BasicLayout } from '../layout'
import PublicRoute from './public-route'

const AppRoutes = () => (
  <Switch>
    <PublicRoute
      exact
      path="/"
      component={HomeContainer}
      layout={BasicLayout}
    />
  </Switch>
)

export default AppRoutes
