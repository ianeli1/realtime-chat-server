import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function main() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("realtime-chat-server").build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("", app, document);

  await app.listen(3000);
}

main();
