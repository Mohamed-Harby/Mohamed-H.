## There are **six** scopes in spring.
### 1. The singleton (The default)
Singleton means you have per instance per IOC Container. (only one instance of the defined class)
![[Pasted image 20241010182450.png]]

### 2. prototype
 prototype means you have per instance per request.
 Every time you want to retrieve object, it gets a new instance.
 It can be defined in the XML like this:
 ![[Pasted image 20241010182922.png]]
or using the @Scope annotation with value: "prototype" in the configuration class alongside the @Bean annotation. or on a particular class when using the @Component or @Service annotations.

```java
@Scope("prototype")
public class demo { }
```

-> These two (singleton and the prototype) are used in all spring applications (in spring core).
-> others are used in spring web applications .

### 3. request
 prototype means you have per instance per HTTP request.

### 4. session
 prototype means you have per instance per HTTP Session request.
 
### 5. application
 prototype means you have per instance per Servlet Context.
 -> Note: in one web application, you have one servlet context. But you can have multiple application contexts per web application (IOC Container).

### 6. websocket

### 7. custom scope

-> (request, session, application and websocket) scopes are used in web applications. so most of bean scopes are related to web apps.
The scope in this course is on the singleton and the prototype scopes.
