/* eslint-disable react-hooks/exhaustive-deps */
import { size } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type UseFetchState<T> = {
  state: string;
  data: null | T;
  error: boolean;
  loading: boolean;
};

export default function useFetch<T>(
  url: string,
  TokenDecode: string,
  page?: number | boolean,
  Search?: string | number | boolean,
  refreshApi?: boolean
) {
  const navigation = useNavigate();
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "null",
    data: null,
    error: false,
    loading: false,
  });

  useEffect(
    function () {
      async function fetchData() {
        setFetchState((oldValue) => ({
          ...oldValue,
          state: "Cargando...",
          error: false,
          loading: true,
        }));

        fetch(url, {
          method: "GET",
          headers: { Authorization: TokenDecode },
        })
          .then((res) => res.json())
          .then((activid) => {
            //* Peticion EXITOSA
            if (!activid.status) {
              if (size(activid) > 0) {
                setFetchState({
                  data: activid,
                  state: "Peticion Exitosa",
                  error: false,
                  loading: false,
                });
              } else {
                setFetchState({
                  data: null,
                  state: "Sin datos que Mostrar",
                  error: false,
                  loading: false,
                });
              }
              return;
            }

            //! Se vencio el Token
            if (activid.status === 3) {
              toast.error(
                "Se venció el token, se redirigirá al Login. Inicie sesión",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );

              setTimeout(() => {
                localStorage.clear();
                navigation("/Login");
              }, 6000);

              setFetchState({
                data: null,
                state: `Token se Vencido se redirigira al Login Inicie Sesion`,
                error: true,
                loading: false,
              });
              return;
            }

            //! Error en la Peticion X motivo
            if (activid.status === 2) {
              toast.error(activid.descripcion, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              setFetchState({
                data: null,
                state: `${activid.descripcion}`,
                error: true,
                loading: false,
              });
              return;
            }
          })
          .catch((error) => {
            toast.error(`Catch ${error}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setFetchState({
              data: null,
              state: `Cath ${error}`,
              error: true,
              loading: false,
            });
          });
      }
      fetchData();
    },
    [url, TokenDecode, page, Search, refreshApi]
  );

  return fetchState;
}
