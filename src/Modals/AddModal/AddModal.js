import React, { useState } from "react";

import { Modal, Paper, TextField, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./AddModal.css";

const useStyles = makeStyles({
    root: {
        marginLeft: "1rem",
        width: "40%",
    },
});

const AddModal = (props) => {
    const longDate = new Date();
    const shortDate = longDate.toISOString().slice(0, 10);

    const [selectedDate] = useState(shortDate);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const classes = useStyles(props);

    return (
        <Modal open={props.open} onClose={props.close}>
            <Paper className="container paps">
                <div className="row ">
                    <h6 className="col align-middle head">Adicionar Elemento</h6>
                </div>
                <div className="row">
                    <Container>
                        <TextField className="mb-3 d-flex" id="addName" label="Nome" />
                        <TextField
                            className="mb-3 d-flex"
                            id="addDesc"
                            label="Descrição"
                            multiline
                        />

                        <TextField
                            id="startDate"
                            label="Inicio"
                            type="date"
                            defaultValue={selectedDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className="st-date"
                        />
                        <TextField
                            id="endDate"
                            label="Término"
                            type="date"
                            defaultValue={selectedDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.root}
                        />
                        <div className="buttons">
                            <Button style={{ marginRight: "1rem" }} variant="outlined" onClick={props.close}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={props.close}>
                                Confirmar
                            </Button>
                        </div>
                    </Container>
                </div>
            </Paper>
        </Modal>
    );
};

export default AddModal;
