import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Typography from '@mui/material/Typography'
import { useCreateBook } from "../graphql/resolvers/book";

export type InputProps = {
    name: string,
    author: string,
    publisher: string
}

const INITIAL_VALUES: InputProps = {
    name: '',
    author: '',
    publisher: ''
}

const BookInput = () => {
    const [state, setState] = useState<InputProps>(INITIAL_VALUES)
    const [error, setError] = useState<boolean>(false)
    const onCreateBook = useCreateBook()
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setState({...state, [name]:value})
    }

    const handleSave = () => {
        if(state.name && state.author) {
            onCreateBook({ 
                title: state.name, 
                author: state.author, 
                publisher: state.publisher 
            })
    
            setState(INITIAL_VALUES)
        } else {
            setError(true)
        }        
    }
    
    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography variant="h6" sx={{ marginLeft: 1 }}>
                    Cadastro
                </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <TextField
                    required
                    error={error}
                    label= 'Nome da Obra'
                    name='name'
                    value={state.name}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 505, marginInline: 1 }}
                />
                <TextField 
                    required
                    error={error}
                    label= 'Autor'
                    name='author'
                    value={state.author}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 505, marginBottom: 1 }}
                />
                <TextField 
                    label= 'Editora'
                    name='publisher'
                    value={state.publisher}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 505, marginInline: 1 }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>    
                <Button 
                    variant="contained" 
                    sx={{ width: 100, marginBottom: 1, marginRight: 1 }}
                    onClick={handleSave}
                >Criar</Button>
            </div>
        </div>
    )
}

export default BookInput