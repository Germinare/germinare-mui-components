import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';

export interface ITablePaginationDefinition{
    rowsPerPageOptions:any[],
}

export default function TablePaginationComponent(props:ITablePaginationDefinition){

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(

        

        <TablePagination
            rowsPerPageOptions={props.rowsPerPageOptions}
            component="div"
            count={20}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}