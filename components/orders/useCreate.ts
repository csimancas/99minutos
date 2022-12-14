import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { createOrder } from "../../services/orders";

const orderState = {
  Coordinates: "",
  FirstName: "",
  LastName: "",
  Street: "",
  ZipCode: "",
  State: "",
  City: "",
  Neighbourhood: "",
  ExNumber: 0,
  InNumber: 0,
  PhoneNumber: "",
};

const GENERIC_REDUCER = (state: any, payload: any) => {
  if (payload) return { ...state, ...payload };
  else return state;
};

const useCreateOrder = (onSuccess?: Function) => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form, dispatch] = useReducer(GENERIC_REDUCER, orderState);
  const [product, setProduct] = useState([]);
  const [weight, setWeight] = useState("");

  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);

  const isValid = useMemo(() => {
    return (
      form.Coordinates.lenght > 0 &&
      form.FirstName.lenght > 0 &&
      form.LastName.lenght > 0 &&
      form.Street.lenght > 0 &&
      form.State.lenght > 0 &&
      form.City.lenght > 0 &&
      form.Neighbourhood.lenght > 0 &&
      form.ExNumber.lenght > 0 &&
      form.InNumber.lenght > 0 &&
      form.PhoneNumber.lenght > 0 &&
      product.length > 0
    );
  }, [form]);

  const onChangeCoordinates = useCallback(
    ({ target: { value } }) => dispatch({ Coordinates: value.toUpperCase() }),
    []
  );
  const onChangeFirstName = useCallback(
    ({ target: { value } }) => dispatch({ FirstName: value.toUpperCase() }),
    []
  );
  const onChangeLastName = useCallback(
    ({ target: { value } }) => dispatch({ LastName: value.toUpperCase() }),
    []
  );
  const onChangeStreet = useCallback(
    ({ target: { value } }) => dispatch({ Street: value.toUpperCase() }),
    []
  );
  const onChangeZipCode = useCallback(
    ({ target: { value } }) => dispatch({ ZipCode: value }),
    []
  );

  const onChangeState = useCallback(
    ({ target: { value } }) => dispatch({ State: value.toUpperCase() }),
    []
  );
  const onChangeCity = useCallback(
    ({ target: { value } }) => dispatch({ City: value.toUpperCase() }),
    []
  );
  const onChangeNeighbourhood = useCallback(
    ({ target: { value } }) => dispatch({ Neighbourhood: value.toUpperCase() }),
    []
  );
  const onChangeExtNumber = useCallback(
    ({ target: { value } }) => dispatch({ ExNumber: value.toString() }),
    []
  );
  const onChangeIntNumber = useCallback(
    ({ target: { value } }) => dispatch({ InNumber: value.toString() }),
    []
  );
  const onChangePhoneNumber = useCallback(
    ({ target: { value } }) => dispatch({ PhoneNumber: value.toUpperCase() }),
    []
  );

  const onChangeProduct = useCallback(
    ({ target: { value } }) => setWeight(value),
    []
  );

  const addProduct = () => {
    let products: any = [...product];
    let obj: any = { Weight: parseFloat(weight) };
    products.push(obj);
    setProduct(products);
    console.log(products);
  };

  const cleanError = useCallback(() => setError(""), []);
  const onSubmit = useCallback(async () => {
    let params = {
      DestinationAddress: { ...form },
      Products: product,
    };
    console.log(params);
    try {
      setLoading(false);
      createOrder(params);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }, [form, onSuccess, hideModal]);

  return {
    form,
    error,
    isValid,
    showModal,
    hideModal,
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
    onChangeProduct,
    addProduct,
    cleanError,
    onSubmit,
    loading,
    visible,
    setVisible,
    product,
  };
};

export default useCreateOrder;
