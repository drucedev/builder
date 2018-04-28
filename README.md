# Fg Service Reflection Builder

Для подключения билдера в свой БФС нужно добавить зависимость в pom.xml и 
создать REST метод с вызовом билдера:

Пример (pom.xml): 

```xml
<dependency>
    <groupId>ru.sbrf.ufs.app.envelope</groupId>
    <artifactId>envelope-ui</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

Пример (REST метод):

```java
@GET
@Path("/builder.json")
public Object builder() {
    return ReflectionBuilder.build(applicationContext);
}
```

Также для отображения получаемой информации нужно распаковать архив static.zip в папку
webapp вашего БФС.

**Важно**

Если хотите поменять api для получения данных собраных билдером, то нужно будет изменить
конфиги клиента в config.js

```javascript
export default {
  defaultRequestId: 'default', // id тестового набора по умолчанию
  defaultRequestName: 'Тестовый набор по умолчанию', // имя тестового набора по умолчанию
  defaultNewRequestName: 'Новый тестовый набор', // имя нового тестовоого набора(если имя не задано)
  backendUrl: 'http://localhost:8888/bfs-credit-request/rest' // url rest api,
  builderUri: '/builder.json' // uri rest метода который возвращает билдер
}

