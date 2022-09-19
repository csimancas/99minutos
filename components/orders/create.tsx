import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import useCreateOrder from "./useCreate";
import { ProductionQuantityLimitsSharp } from "@mui/icons-material";

interface ContractFormProps {
  onSucces?: Function;
}

const Orders = (props: ContractFormProps) => {
  const {
    form,
    error,
    isValid,
    showModal,
    hideModal,
    visible,
    onChangeCoordinates,
    onChangeFirstName,
    onChangeLastName,
    onChangeStreet,
    onChangeZipCode,
    onChangeState,
    onChangeCity,
    onChangeNeighbourhood,
    onChangeExtNumber,
    onChangeIntNumber,
    onChangePhoneNumber,
    onChangeProducts,
    cleanError,
    onSubmit,
    product,
    setProduct,
    loading,
  } = useCreateOrder(props.onSucces);

  const addProduct = () => {};
  return (
    <>
      <Button onClick={showModal} sx={{ ml: "16px" }}>
        Crear orden
      </Button>
      <Dialog open={visible}>
        <DialogTitle id="partner-title">Crear orden</DialogTitle>
        <DialogContent dividers>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Coordenadas"
              value={form.Coordinates}
              onChange={onChangeCoordinates}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nombre"
              value={form.FirstName}
              onChange={onChangeFirstName}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Apellido"
              value={form.LastName}
              onChange={onChangeLastName}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Calle"
              value={form.Street}
              onChange={onChangeStreet}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Número exterior"
              value={form.ExNumber}
              onChange={onChangeExtNumber}
              required
            />
            <TextField
              fullWidth
              label="Número interior"
              value={form.InNumber}
              onChange={onChangeIntNumber}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Codigo postal"
              value={form.ZipCode}
              onChange={onChangeZipCode}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Colonia"
              value={form.Neighbourhood}
              onChange={onChangeNeighbourhood}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Ciudad"
              value={form.City}
              onChange={onChangeCity}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Ciudad"
              value={form.State}
              onChange={onChangeState}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Teléfono"
              value={form.PhoneNumber}
              onChange={onChangePhoneNumber}
              required
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Productos"
                onChange={onChangeProducts}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Button type="button" variant="contained">
                +
              </Button>
            </Grid>
          </Grid>

          <Divider />
          {product.map((item: any) => {
            <p>Peso del producto: {item.weight}</p>;
          })}
          <Divider />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideModal} disabled={loading}>
            Cancelar
          </Button>
          <Button onClick={onSubmit} disabled={loading}>
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Orders;
