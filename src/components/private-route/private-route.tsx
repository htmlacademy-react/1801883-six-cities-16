import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';

type PrivateRouteProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  redirectRoute: string;
  children: JSX.Element;
}


function PrivateRoute({authorizationStatus, redirectRoute, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={redirectRoute} />
  );
}

export default PrivateRoute;
