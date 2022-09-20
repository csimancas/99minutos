import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { array } from "../../data";
import CardDetail from "../cardDetail";
import { cancelOrder } from "../../services/orders";
import Orders from "../orders/create";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setData(array), 2000);
  }, []);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const onCancelOrder = async (id: string) => {
    try {
      const response: any = await cancelOrder(id);
      if (response.status === 200) {
        alert("Order cancelled successfully");
      }
    } catch (error) {
      alert("Error cancelling order");
    }
  };

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, paddingLeft: 30, paddingRight: 10 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <strong>ID</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Recibido</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Cliente</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Dirección</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Tamaño</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Detalle</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.Order.ID}
              </TableCell>
              <TableCell align="center">
                {moment(row.Order.CreatedAt).format("MMM Do YY")}
              </TableCell>
              <TableCell align="center">{`${row.Order.DestinationAddress?.FirstName} ${row.Order.DestinationAddress?.LastName}`}</TableCell>
              <TableCell align="center">{`${row.Order.DestinationAddress?.Street} ${row.Order.DestinationAddress?.Neighbourhood} ${row.Order.DestinationAddress?.ExNumber}`}</TableCell>
              <TableCell align="center">{row.Order.PackageSize}</TableCell>
              <TableCell align="center">
                <CardDetail
                  open={visible}
                  onOpen={handleOpen}
                  onClose={handleClose}
                  data={row.Order}
                  onCancel={() => onCancelOrder(row.Order.ID)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OrderDetail = () => {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Tabla de ordenes</h3>
        </Grid>
        <DataTable />
      </Grid>
      <Grid item xs={3} sx={{justifyContent:'flex-end'}}>
        <Orders />
      </Grid>
    </Paper>
  );
};

export default OrderDetail;
