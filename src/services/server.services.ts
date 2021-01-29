import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import KoaCors from 'koa2-cors';
import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
//import ProjectResolver from "../graphql/resolvers/ProjectResolver";
//import TaskResolver from "../graphql/resolvers/TaskResolver";
import { GraphQLSchema } from 'graphql';


class KoaServer extends Koa {
  private port: String|number;
  readonly app: Koa;

  constructor(port: number) {
    super();
    this.port = port;
    this.app = app;
    this.appplyMiddleware();
  }

  private appplyMiddleware() {
    this.use(KoaBodyParser());
    this.use(
      KoaCors({
        origin: '*',
        credentials: true,
        exposeHeaders: ['*'],
        maxAge: 5,
        allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'access-token', 'X-Requested-With', 'Origin'],
      })
    );
  }

  public startServer(): void {
    const processPort  = process.env.PORT || this.port

    this.listen(processPort, async () => {
        console.log(`server running on port ${this.port}`);
      })
      .on('error', (err) => console.log(err));
  }
}


export const app = new KoaServer(8181);