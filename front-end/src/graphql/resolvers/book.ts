import { useMutation, useQuery } from "@apollo/react-hooks"
import {
	TCreateBookInput,
	TCreateBookMutation,
	TCreateBookMutationVariables,
	TDeleteBookMutation,
	TDeleteBookMutationVariables,
	TFindBookQuery,
	TFindBookQueryVariables,
	TFindBooksQuery,
	TUpdateBookInput,
	TUpdateBookMutation,
	TUpdateBookMutationVariables,
} from "../../types"

import { BOOK, BOOKS } from "../queries/book"
import { CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../mutations/book"
import { useCallback } from "react"

export const useBook = (id: string = "") => {
	const { data, loading, error } = useQuery<
		TFindBookQuery,
		TFindBookQueryVariables
	>(BOOK, {
		variables: { id },
		skip: !id,
		fetchPolicy: "network-only",
	})

	const book = data?.findBook

	return { book, loading, error: error !== undefined }
}

export const useBooks = () => {
	const { data, loading, error } = useQuery<TFindBooksQuery>(BOOKS)

	return { data, loading, error }
}

export const useCreateBook = () => {
	const [mutate] = useMutation<
		TCreateBookMutation,
		TCreateBookMutationVariables
	>(CREATE_BOOK)

	return useCallback(
		(book: TCreateBookInput) => {
			mutate({
				variables: { data: book },
				refetchQueries: [{ query: BOOKS }],
			})
		},
		[mutate]
	)
}

export const useUpdateBook = () => {
	const [mutate] = useMutation<
		TUpdateBookMutation,
		TUpdateBookMutationVariables
	>(UPDATE_BOOK)

	return useCallback(
		(id: string, book: TUpdateBookInput) => {
			mutate({
				variables: { data: book, updateBookId: id },
				refetchQueries: [{ query: BOOKS }],
			})
		},
		[mutate]
	)
}

export const useDeleteBook = () => {
	const [mutate] = useMutation<
		TDeleteBookMutation,
		TDeleteBookMutationVariables
	>(DELETE_BOOK)

	return useCallback(
		(id: string) => {
			mutate({
				variables: { deleteBookId: id },
				refetchQueries: [{ query: BOOKS }],
			})
		},
		[mutate]
	)
}
