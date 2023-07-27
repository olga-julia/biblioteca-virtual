import { DataSource } from "typeorm"
import { Seeder, SeederFactoryManager } from "typeorm-extension"
import { Book } from "../models/Book"

export default class BookSeeder implements Seeder {
	public async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<any> {
		const repository = dataSource.getRepository(Book)
		await repository.insert([
			{
				title: "O Iluminado",
				author: "Stephen King",
				publisher: "SUMA",
			},
			{
				title: "A Metade Sombria",
				author: "Stephen King",
				publisher: "SUMA",
			},
			{
				title: "Trocas Macabras",
				author: "Stephen King",
				publisher: "SUMA",
			},
			{
				title: "Cujo",
				author: "Stephen King",
				publisher: "SUMA",
			},
		])
	}
}
