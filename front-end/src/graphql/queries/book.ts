import { gql } from "apollo-boost"

export const BOOK = gql`
	query findBook($id: String!) {
		findBook(id: $id) {
			id
			title
			author
			publisher
		}
	}
`

export const BOOKS = gql`
	query findBooks {
		findBooks {
			id
			title
			author
			publisher
		}
	}
`
