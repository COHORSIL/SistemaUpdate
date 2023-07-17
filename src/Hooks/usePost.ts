/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type UseFetchState<T> = {
  state: string;
  data: null | T;
  error: boolean;
  loading: boolean;
  status: number;
  descripcion: string;
};

interface Data {
  url: string;
  TokenDecode: string;
  body: object;
  method: string;
}

const usePost = <T>() => {
  const navigation = useNavigate();
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "null",
    data: null,
    error: false,
    loading: false,
    status: 0,
    descripcion: "",
  });

  const execute = async (item: Data) => {
    const requestOptions = {
      method: item.method,
      headers: { Authorization: item.TokenDecode },
      body: JSON.stringify(item.body),
    };

    try {
      setFetchState((oldValue) => ({
        ...oldValue,
        state: "cargando...",
        loading: true,
        error: false,
        status: 0,
      }));

      var url = item.url;
      const fetchResponse = await fetch(url, requestOptions);
      const response = await fetchResponse.json();
      //! Se vencio el Token
      if (response.status === 3) {
        setFetchState({
          data: null,
          state: `Token Vencido Inicie Sesion`,
          error: true,
          loading: false,
          status: 3,
          descripcion: "Sin descripcion",
        });
        setTimeout(() => {
          localStorage.clear();
          navigation("/Login");
        }, 6000);
        return;
      }

      //! Error en la Peticion X motivo
      if (response.status === 2) {
        setFetchState({
          data: response,
          state: `Error status 2, ${response.descripcion}`,
          error: true,
          loading: false,
          status: 2,
          descripcion: "Sin descripcion",
        });
        return;
      }

      //* Peticion EXITOSA
      if (response.status === 1) {
        setFetchState({
          data: response,
          state: "Peticion Exitosa",
          error: false,
          loading: false,
          status: 1,
          descripcion: response.descripcion
            ? response.descripcion
            : "Sin descripcion",
        });
        return;
      }
    } catch (error) {
      //! Tronoxd
      setFetchState({
        data: null,
        state: `Cath ${error}`,
        error: true,
        loading: false,
        status: 0,
        descripcion: "Sin descripcion",
      });
    }
  };

  return {
    execute,
    fetchState,
  };
};

export default usePost;
