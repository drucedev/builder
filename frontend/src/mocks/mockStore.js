import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import mockRequests from "./mockRequests";

const middlewares = [thunk];

export default configureMockStore(middlewares)({
  editor: {fullScreenMode: false},
  requests: mockRequests,
  select: {},
  tabs: {},
  router: {location: {pathname: '/'}}
});
