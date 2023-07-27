import { gql } from "apollo-boost"

export const CREATE_BOOK = gql`
	mutation CreateBook($data: CreateBookInput!) {
		createBook(data: $data) {
			id
		}
	}
`
export const UPDATE_BOOK = gql`
	mutation UpdateBook($data: UpdateBookInput!, $updateBookId: String!) {
		updateBook(data: $data, id: $updateBookId) {
			id
		}
	}
`

export const DELETE_BOOK = gql`
	mutation DeleteBook($deleteBookId: String!) {
		deleteBook(id: $deleteBookId)
	}
`
