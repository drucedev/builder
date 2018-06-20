export const START_LOADER = "loader/START_LOADER";
export const startLoader = (requestId) => ({
  type: START_LOADER,
  requestId
});

export const STOP_LOADER = "loader/STOP_LOADER";
export const stopLoader = (requestId) => ({
  type: STOP_LOADER,
  requestId
});
