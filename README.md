# Fg Service Reflection Builder

Для подключения билдера в свой БФС нужно добавить зависимость в pom.xml и 
создать REST метод с вызовом билдера:

Пример (pom.xml): 

```xml
<dependency>
    <groupId>ru.sbrf.ufs.app.testing</groupId>
    <artifactId>builder</artifactId>
    <version>1.0.0</version>
</dependency>
```

Пример (REST метод):

```java
@GET
@Path("/api")
public Object api() throws JsonProcessingException {
    return FgServiceReflectionBuilder.newInstance()
            .context(applicationContext)
            .mapper(getMapper())
            .build();
}
```

Также для отображения получаемой информации нужно распаковать архив static.zip в папку
webapp вашего БФС.

**Важно**

Если хотите поменять api для получения данных собраных билдером, то нужно будет изменить
url для получения данных на клиенте в файле **_/frontend/src/envelope/api.js_**
