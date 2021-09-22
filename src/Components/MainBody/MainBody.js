import React, { useState } from "react";
import { Box, Collapse, IconButton, Paper, Typography } from "@material-ui/core";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from '@material-ui/icons/Add';

import AddModal from '../../Modals/AddModal/AddModal'
import "./MainBody.css";

const mainList = [
    {
        id: Math.random(),
        name: "Curso de REACT",
        desc: "O curso de REACT q vc tem que fazer doido",
        todo: true,
        start: new Date().toLocaleDateString(),
        end: new Date().toLocaleDateString(),
        deleted: false,
    },
    {
        id: Math.random(),
        name: "Curso de REACT",
        desc: "O curso de REACT q vc tem que fazer doido",
        todo: true,
        start: new Date().toLocaleDateString(),
        end: new Date().toLocaleDateString(),
        deleted: false,
    },
    {
        id: Math.random(),
        name: "Curso de JAVA",
        desc: "O curso de JAVA q vc tem que fazer doido",
        todo: false,
        start: new Date().toLocaleDateString(),
        end: new Date().toLocaleDateString(),
        deleted: false,
    },
    {
        id: Math.random(),
        name: "Curso de JAVA",
        desc: "O curso de JAVA q vc fez",
        todo: false,
        start: new Date().toLocaleDateString(),
        end: new Date().toLocaleDateString(),
        deleted: false,
    },
];

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);

    const deleteRow = (event) => {
        console.log('Deleting')
    };

    const editRow = (event) => {
        console.log("Editing");
    };

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.start}</TableCell>
                <TableCell align="right">{row.end}</TableCell>
                <TableCell align="right">
                    <IconButton size="small" onClick={deleteRow}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <div className="row">
                                <div className='col'>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Descrição
                                    </Typography>
                                </div>
                                <div className="col offset-md-2 edit-btn">
                                    <IconButton className="pr-0" size="small" onClick={editRow}>
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-auto">
                                    <Typography
                                        gutterBottom
                                        component="div"
                                    >
                                        {row.desc}
                                    </Typography>
                                </div>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const FullBody = (props) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const deleteRow = (row) => {
        const rowIndex = props.list.indexOf(row);
        props.list[rowIndex].deleted = true;
    };

    return (
        <TableContainer>
            <AddModal open={open} close={handleClose}/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="col-1" />
                        <TableCell className="col-3">Nome</TableCell>
                        <TableCell className="col-3" align="right">
                            Inicio
                        </TableCell>
                        <TableCell className="col-3" align="right">
                            Término
                        </TableCell>
                        <TableCell className="col-1" style={{textAlign: 'end'}}>
                            <IconButton  size="small" onClick={handleOpen}>
                                <AddIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list
                        .filter((elem) => elem.todo === props.todo && !elem.deleted)
                        .map((elem) => (
                            <Row rowUp={deleteRow} key={elem.id} row={elem} />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default function MainBody() {
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <Paper>
                        <Typography variant="h5" className="align-middle">
                            A Fazer
                        </Typography>
                        <FullBody list={mainList} todo={true} title={"A Fazer"} />
                    </Paper>
                </div>
            </div>
            <div className="row">
                <div className="col mt-5">
                    <Paper>
                        <Typography variant="h5" className="align-middle">
                            Feito
                        </Typography>
                        <FullBody list={mainList} todo={false} title={"Feito"} />
                    </Paper>
                </div>
            </div>
        </div>
    );
}
