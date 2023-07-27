import "reflect-metadata"
import { AppDataSource } from "./app-data-source"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { BookResolver } from "./graphql/resolvers/Book"

async function main() {
	AppDataSource.initialize()
		.then(() => {
			console.log("Data Source has been initialized!")
		})
		.catch(err => {
			console.error("Error during Data Source initialization", err)
		})

	const schema = await buildSchema({
		resolvers: [BookResolver],
	})

	const server = new ApolloServer({ schema })

	await server.listen(8080)
	console.log("Server has started!")
}

main()
