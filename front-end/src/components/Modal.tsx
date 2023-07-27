import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import React, { useEffect, useState } from "react"
import { BookRow } from "./BookTable"
import { InputProps } from "./BookInput"
import { useDeleteBook, useUpdateBook } from "../graphql/resolvers/book"

interface IProps {
    book: BookRow
    open: boolean
    setOpen: (parameter: boolean) => void
}

const INITIAL_STATE: InputProps = {
    name: '',
    author: '',
    publisher: ''
}

export const Modal= (props: IProps) => {
    const {book, open, setOpen } = props
    const [state, setState] = useState<InputProps>(INITIAL_STATE)
    const [error, setError] = useState<boolean>(false)
    const onUpdateBook = useUpdateBook()
    const onDeleteBook = useDeleteBook()

    useEffect(() => {
        setState(book)
    }, [book])

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
            setState({...state, [name]:value})
    } 
    
    const handleUpdate = () => {
       if(state.name && state.author) {
            if (book.name !== state.name || 
                book.author !== state.author || 
                book.publisher !== state.publisher) {

                onUpdateBook(book.id, {
                    title: state.name,
                    author: state.author,
                    publisher: state.publisher
                })

                handleClose()
            }
       } else {
            setError(true)
       }
    }

    const handleDelete = () => {
        onDeleteBook(book.id)
        handleClose()
    }

    return (                  
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ marginInline: 1, marginBottom: -1 }} fontSize={16}>Alterar Cadastro</DialogTitle>
                <DialogContent sx={{ display:'flex', flexDirection:'column' }}>
                <TextField
                    required
                    error={error} 
                    label= 'Nome da Obra'
                    name='name'
                    value={state.name}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 400, marginInline: 1, marginTop: 1 }}
                />
                <TextField
                    required
                    error={error}  
                    label= 'Autor'
                    name='author'
                    value={state.author}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 400, marginInline: 1, marginTop: 2 }}
                />
                <TextField 
                    label= 'Editora'
                    name='publisher'
                    value={state.publisher}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 400, marginInline: 1, marginTop: 2 }}
                /> 
                </DialogContent>
                <DialogActions sx={{ marginTop: -2 }}>
                    <Button 
                        variant="contained" 
                        sx={{ marginRight: 1 }} 
                        onClick={handleUpdate}
                    >Alterar</Button>
                    <Button 
                        variant="contained" 
                        sx={{ marginRight: 3 }} 
                        onClick={handleDelete}
                    >Excluir</Button>
                </DialogActions>
            </Dialog>
    )

}