## Main.ts file

Initial main.ts file look like below.

```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

## Preflight

- A preflight request is an HTTP OPTIONS request sent by the browser before certain types of actual requests (e.g., POST, PUT, DELETE) to check if the server supports the request’s method, headers, and origin. The server responds with CORS headers indicating whether the request is allowed.
- How it works? well When the server responds to a preflight request, it includes the Access-Control-Max-Age header in the response.This header tells the browser how long it can cache the preflight response.
