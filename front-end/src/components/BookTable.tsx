import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Modal } from './Modal';
import { useBooks } from '../graphql/resolvers/book';
import { TBook } from '../types';


export type BookRow = { 
  id: string
  name: string
  author: string
  publisher: string
 }

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(book: TBook) {
  return {
    id: book.id, 
    name: book.title, 
    author: book.author, 
    publisher: book.publisher 
  };
}

export const BookTable = () => {
  const classes = useStyles();
  const { data } = useBooks()
  const [bookRow, setBookRow] = useState<BookRow>()
  const [open, setOpen] = useState(false)

  const rows = data ? data?.findBooks.map(it => createData(it)) : []

  const handleClick = useCallback(
    (_: React.MouseEvent<Element, MouseEvent>, rowData: BookRow) => {
        setBookRow(rowData)
        setOpen(true)       
    },
    []
  )

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Autor</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Editora</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.id}  
                hover 
                style={{ cursor: 'pointer' }} 
                onClick={(event) => handleClick(event, row)} 
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.author}</TableCell>
                <TableCell >{row.publisher}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {bookRow && 
        <Modal 
          book={bookRow}
          open={open}
          setOpen={setOpen}
        />
      }
    </>
  );
}
