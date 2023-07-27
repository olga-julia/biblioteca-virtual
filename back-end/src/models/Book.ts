import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ObjectType, Field, ID } from "type-graphql"

@Entity()
@ObjectType()
export class Book extends BaseEntity {
	@Field(_ => ID)
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Field(() => String)
	@Column()
	title: string

	@Field(() => String)
	@Column()
	author: string

	@Field(() => String)
	@Column()
	publisher: string
}
