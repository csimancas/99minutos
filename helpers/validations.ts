export const PHONE_MASK = "(111)-111-1111";
class Validate {
  public static isEmpty = (value: any): boolean => {
    const type = typeof value;
    if (type == "number" || type == "boolean") {
      return false;
    }
    if (type == "undefined" || value == null || value == undefined) {
      return true;
    }
    if (typeof value.length != "undefined") {
      return value.length == 0;
    }
    var count = 0;
    for (var i in value) {
      if (value.hasOwnProperty(i)) {
        count++;
      }
      if (count > 0) {
        break;
      }
    }
    return count == 0;
  };

  public static isNotEmpty = (value: any): boolean => {
    return !Validate.isEmpty(value);
  };

  public static isCURP = (curp: string): boolean => {
    const curpRegex =
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    const validado = curp.match(curpRegex);
    if (!validado) {
      return false;
    }
    function digitoVerificador(curp17: string) {
      var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        lngSuma = 0.0,
        lngDigito = 0.0;
      for (var i = 0; i < 17; i++)
        lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
      lngDigito = 10 - (lngSuma % 10);
      if (lngDigito == 10) return 0;
      return lngDigito;
    }
    // @ts-ignore
    if (validado[2] != digitoVerificador(validado[1])) return false;

    return true;
  };

  public static isRFC = (rfc: string): boolean => {
    const rfcRegex =
      /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/;
    return rfcRegex.test(rfc);
  };

  public static isNumber = (value: any): boolean => {
    if (typeof value != "string" && typeof value != "number") return false; // we only process strings!
    return (
      // @ts-ignore
      !isNaN(value) &&
      // @ts-ignore
      !isNaN(parseFloat(value))
    );
  };

  public static isEmail = (email: string): boolean => {
    const result = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return !!result;
  };

  public static isStrongPassword = (password: string): -1 | 0 | 1 => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (strongRegex.test(password)) {
      return 1;
    } else if (mediumRegex.test(password)) {
      return 0;
    } else {
      return -1;
    }
  };
}

export default Validate;
