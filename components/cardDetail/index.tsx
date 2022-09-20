import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import moment from "moment";

interface DetailModalProps {
  onClose: () => void;
  onOpen: () => void;
  onCancel: () => void;
  data: any;
  open: boolean;
}

const CardDetail = (props: DetailModalProps) => {
  const [open, setOpen] = useState(false);

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          {` Cliente: ${props.data?.DestinationAddress.FirstName} ${props.data?.DestinationAddress.LastName}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Dirección: ${props.data?.DestinationAddress.Street} ${props.data?.DestinationAddress.ZipCode} ${props.data?.DestinationAddress.City} ${props.data?.DestinationAddress.State}`}
        </Typography>
        {props.data.Products.map((product: any) => (
          <Typography variant="body2">
            {`Orden: ${product.OrderID} Peso: ${product.Weight}`}
          </Typography>
        ))}
      </CardContent>
    </React.Fragment>
  );

  return (
    <div>
      <IconButton aria-label="Detalle" onClick={props.onOpen}>
        <Search />
      </IconButton>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Detalle de la orden</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Si desea cancelar la orden presione el boton cancelar.
          </DialogContentText>
          <Card variant="outlined">{card}</Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CardDetail;
