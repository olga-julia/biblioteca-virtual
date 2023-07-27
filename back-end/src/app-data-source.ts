import { DataSource, DataSourceOptions } from "typeorm"
import { Book } from "./models/Book"
import { SeederOptions } from "typeorm-extension"
import BookSeeder from "./seeds/book-seeder"

const options: DataSourceOptions & SeederOptions = {
	type: "postgres",
	host: "localhost",
	port: 5444,
	username: "postgres",
	password: "postgres",
	database: "biblioteca",
	entities: [Book],
	synchronize: true,
	seeds: [BookSeeder],
}

export const AppDataSource = new DataSource(options)
