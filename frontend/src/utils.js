import uuid from 'uuid';
import {saveAs} from 'file-saver'

export const prettyJson = obj => {
  return JSON.stringify(obj, undefined, 4);
};
export const prepareJson = raw => {
  return raw
    .replace(/\\n\\tat|\\n/g, "\n")
    .replace(/\\\\\\"|\\"/g, "'");
};

export const normalizeLineEndings = str => {
  return str && str.replace(/\r\n|\r/g, '\n') || str;
};

export const saveJsonFile = (name, object) => {
  const serializedObject = JSON.stringify(object);
  saveAs(new Blob([serializedObject], {type: 'application/json;charset=utf8'}), `${name}.json`)
};

export const readJsonFile = file => {
  const reader = new FileReader();

  const promise = new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new Error(`Ошибка при чтении файла: ${file.name}`));
    };

    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch (e) {
        reject(new Error('Загружаемый файл должен быть в формате JSON'));
      }
    }
  });
  reader.readAsText(file);
  return promise;
};

export const encodeUri = (uri) => {
  const splitUri = uri.split('/');
  return `/${encodeURIComponent(splitUri[1])}/${encodeURIComponent(splitUri[2])}`;
};

export const decodeUri = (uri) => {
  const splitUri = uri.split('/');
  return `/${decodeURIComponent(splitUri[1])}/${decodeURIComponent(splitUri[2])}`;
};

export const generateId = () => uuid.v4();
