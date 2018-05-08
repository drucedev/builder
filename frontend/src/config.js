const backendUrl = typeof window === 'object'
  && `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}`;

export default {
  defaultRequestId: 'default',
  defaultRequestName: 'Тестовый набор по умолчанию',
  defaultNewRequestName: 'Новый тестовый набор',
  backendUrl,
  builderUri: '/rest/builder.json',
}
