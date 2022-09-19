import { AxiosError } from "axios";

import HttpStatusCode from "./http-status-code";

class GenericException extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    Object.setPrototypeOf(this, GenericException.prototype);
  }
  public toJSON() {
    return { status: this.status, message: this.message };
  }
}

const CatchCommonHandler = (error: any) => {
  if (error.isAxiosError) {
    const errorAxios = error as AxiosError;
    switch (errorAxios.response!.status) {
      case HttpStatusCode.UNAUTHORIZED: {
        alert("Su sesión a expirado");
        window.location.href = "/";
        break;
      }
      case HttpStatusCode.FORBIDDEN: {
        throw new Error(
          "No cuentas con permisos suficientes para realizar esta acción"
        );
      }
      case HttpStatusCode.NOT_ACCEPTABLE: {
        throw new Error(
          "Su solicitud es invalida, por favor si el problema persiste notifique al administrador"
        );
      }
      case HttpStatusCode.INTERNAL_SERVER_ERROR:
      case HttpStatusCode.BAD_REQUEST: {
        throw new Error(errorAxios.response!.data.message);
      }
      case HttpStatusCode.CONFLICT: {
        throw new Error(errorAxios.response!.data.message);
      }
    }
  } else {
    throw new Error(
      "Tenemos problemas para obtener la información, comprueba tu conexión"
    );
  }
};

export { GenericException, CatchCommonHandler };
