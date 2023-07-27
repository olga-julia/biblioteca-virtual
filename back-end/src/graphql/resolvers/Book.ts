import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Book } from "../../models/Book"
import { CreateBookInput, UpdateBookInput } from "../dto/Book"

export
@Resolver()
class BookResolver {
	@Query(() => [Book])
	findBooks() {
		return Book.find()
	}

	@Mutation(() => Book)
	async createBook(@Arg("data") data: CreateBookInput) {
		const book = Book.create({ ...data })
		await book.save()

		return book
	}

	@Query(() => Book)
	findBook(@Arg("id") id: string) {
		return Book.findOne({ where: { id } })
	}

	@Mutation(() => Book)
	async updateBook(
		@Arg("id") id: string,
		@Arg("data") data: UpdateBookInput
	) {
		const book = await Book.findOne({ where: { id } })
		if (!book) throw new Error("Book not found!")
		Object.assign(book, data)

		await book.save()

		return book
	}

	@Mutation(() => String)
	async deleteBook(@Arg("id") id: string) {
		const book = await Book.findOne({ where: { id } })
		if (!book) throw new Error("Book not found!")

		await book.remove()

		return "Excluído"
	}
}
