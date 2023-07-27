import { InputType, Field } from "type-graphql"

@InputType()
export class CreateBookInput {
	@Field()
	title: string

	@Field()
	author: string

	@Field()
	publisher?: string
}

@InputType()
export class UpdateBookInput {
	@Field({ nullable: true })
	title?: string

	@Field({ nullable: true })
	author?: string

	@Field({ nullable: true })
	publisher?: string
}
