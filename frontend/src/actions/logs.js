import {http} from "../http.js";
import {savePlainFile} from "../utils";


export const EXPORT_LOGS = "logs/EXPORT_LOGS";
export const EXPORT_LOGS_SUCCESS = "logs/EXPORT_LOGS_SUCCESS";
export const exportLogs = () => (dispatch) => {
  dispatch({type: EXPORT_LOGS});
  return http.get('/rest/stub/logs/get')
    .then((response) => {
      savePlainFile(response.data, 'log.txt');
      dispatch({type: EXPORT_LOGS_SUCCESS});
    })
};
