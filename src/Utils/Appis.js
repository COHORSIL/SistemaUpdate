const Pruebas = false;

export const URL_API = Pruebas
  ? "http://192.168.100.6/rest"
  : "https://192.168.101.3/rest";

export const URL_USER = `${URL_API}/User.php?`;
export const SESION = `${URL_API}/sesion.php?`;

//------------------------------Papeleria---------------------------------

export const PROVEEDORES = `${URL_API}/papeleria/proveedor_papeleria.php?`;
export const PRODUCTO = `${URL_API}/papeleria/producto_papeleria.php?`;
export const COMPRAS = `${URL_API}/papeleria/compras.php?`;
export const EMPLEADOS = `${URL_API}/papeleria/empleado.php?`;
export const AJUSTES = `${URL_API}/papeleria/ajustes.php?`;
export const DEPARTAMENTO = `${URL_API}/papeleria/departamento.php?`;
export const SALIDAS = `${URL_API}/papeleria/salidas.php?`;
export const REPORTES = `${URL_API}/papeleria/reportes.php?`;
export const CATEGORIA_PAPELERIA = `${URL_API}/papeleria/categoria_papeleria.php?`;

// -----------------------------------Viaticos----------------------

export const URL_ACTIVIDADES = `${URL_API}/viaticos/Actividades.php`;
export const URL_SOLICITUD = `${URL_API}/viaticos/solicitud.php/`;
export const URL_LIQUIDACION = `${URL_API}/viaticos/Liquidacion.php`;
export const URL_CUENTAV = `${URL_API}/viaticos/CatalogoCuentas.php`;

//-----------------------------------Invernadero-----------------------------

export const URL_CLIENTES = `${URL_API}/invernadero/Clientes.php?`;
export const URL_PLANTULA = `${URL_API}/invernadero/Plantula.php?`;
export const URL_VARIEDAD = `${URL_API}/invernadero/variedad.php?`;
export const URL_CONTRATO = `${URL_API}/invernadero/Contrato.php?`;
export const URL_PAGO = `${URL_API}/invernadero/Pago.php?`;
export const URL_VD = `${URL_API}/invernadero/ventaDirecta.php?`;
export const URL_ReporteGeneral = `${URL_API}/invernadero/reporteGeneral.php?`;
export const URL_CATEGORIAS = `${URL_API}/invernadero/Categorias.php?`;
export const URL_PROCESOS = `${URL_API}/invernadero/Proceso.php?`;
export const URL_INVERNADEROS = `${URL_API}/invernadero/Invernadero.php?`;
export const URL_ARQUEOINVER = `${URL_API}/invernadero/Arqueo.php?`;
export const URL_DEPOSITOS = `${URL_API}/invernadero/Depositos.php?`;
export const URL_REPORTEiNVER = `${URL_API}/invernadero/reportes.php?`;
export const URL_BANCO = `${URL_API}/invernadero/Bancos.php?`;

// ---------------------------------Cafe-Cohorsil----------------------------
export const URL_CLIENTE = `${URL_API}/recibo/Clientes.php?`;
export const URL_MARCA = `${URL_API}/recibo/marca.php?`;
export const URL_PROPIETARIO = `${URL_API}/recibo/propietario.php?`;
export const URL_BENEFICIO = `${URL_API}/recibo/beneficio.php?`;
export const URL_BULTO = `${URL_API}/recibo/bulto.php?`;
export const URL_NOTA = `${URL_API}/recibo/nota.php?`;
export const URL_REMESION = `${URL_API}/recibo/remision.php?`;
export const URL_PARTIDA = `${URL_API}/recibo/partida.php?`;
export const URL_PARTIDA_ENVIO = `${URL_API}/recibo/partidaEnvio.php?`;
export const URL_SECADORA = `${URL_API}/recibo/secadora.php?`;
export const URL_TRASPORTISTA = `${URL_API}/recibo/transportista.php?`;
export const URL_MARCAVEHICULO = `${URL_API}/recibo/MarcaVehiculo.php?`;
export const ULR_REPORTESCAFE = `${URL_API}/recibo/Reportes.php?`;
export const ULR_HISTORIALSECADORA = `${URL_API}/recibo/TiemposSecado.php?`;
export const ULR_BODEGAS = `${URL_API}/recibo/Bodega.php?`;
export const ULR_ESPACIO = `${URL_API}/recibo/Espacio.php?`;
export const ULR_CLASES = `${URL_API}/recibo/Clases.php?`;
export const URL_ESTIBA = `${URL_API}/recibo/Estiba.php?`;
export const URL_INGRESOBODEGA = `${URL_API}/recibo/IngresosBodega.php?`;
export const URL_SALIDABODEGAS = `${URL_API}/recibo/SalidasBodega.php?`;
export const URL_TRANSFERENCIABODEGA = `${URL_API}/recibo/TransferenciasBodega.php?`;
export const URL_INVENTARIOALAMCEN = `${URL_API}/recibo/InventarioAlmacen.php`;
export const URL_RENDIMIENTO = `${URL_API}/Recibo/RendimientosBeneficios.php?`;
export const URL_PROPIETARIORENDI = `${URL_API}/Recibo/RendimientosBeneficios.php/rendimiento_Propietario?`;

//------------------------------Promocionales---------------------------------

export const PRODUCTO_PROMOCIONALES = `${URL_API}/Promocionales/producto_Promocionales.php?`;
export const PROVEEDOR_PROMOCIONALES = `${URL_API}/Promocionales/Proveedor_Promocionales.php?`;
export const CATEGORIA_PROMOCIONALES = `${URL_API}/Promocionales/Categoria_Promocionales.php?`;
export const COMPRAS_PROMOCIONALES = `${URL_API}/Promocionales/Compras.php?`;
export const SALIDA_PROMOCIONALES = `${URL_API}/Promocionales/Salidas.php?`;
export const AJUSTES_PROMOCIONALES = `${URL_API}/Promocionales/Ajustes.php?`;
export const REPORTES_PROMOCIONALES = `${URL_API}/Promocionales/Reportes.php?`;
export const LOGIN = `${URL_API}/login.php?`;

//------------------------------Invernadero Entrada y salida---------------------------------

export const PRODUCTO_INVERNADERO = `${URL_API}/Inventario_invernadero/producto_Invernadero.php?`;
export const PROVEEDOR_INVERNADERO = `${URL_API}/Inventario_invernadero/Proveedor_Invernadero.php?`;
export const CATEGORIA_INVERNADERO = `${URL_API}/Inventario_invernadero/Categoria_Invernadero.php?`;
export const COMPRAS_INVERNADERO = `${URL_API}/Inventario_invernadero/Compras.php?`;
export const SALIDA_INVERNADERO = `${URL_API}/Inventario_invernadero/Salidas.php?`;
export const AJUSTES_INVERNADERO = `${URL_API}/Inventario_invernadero/Ajustes.php?`;
export const REPORTES_INVERNADERO = `${URL_API}/Inventario_invernadero/Reportes.php?`;

//------------------------------Sucesos--------------------------------

export const PERSONA_SUCCESS = `${URL_API}/casos/persona.php?`;
export const PERSONA_GETSUCCESS = `${URL_API}/casos/sucesos.php/getbyPerson?`;
export const PERSONA_POSTSUCCESS = `${URL_API}/casos/Sucesos.php`;
export const PERSONA_TIPO = `${URL_API}/casos/Tipo_Persona.php?`;
export const SUSCESOSIMG = `${URL_API}/casos/Imagen.php`;


//--------------------------------Estadistica---------------------------
export const proveedores_Internacionales = `${URL_API}/proveedores_Internacionales.php?`;
export const Estadistica = `${URL_API}/Estadistica.php?`;
export const Mes5 = `${URL_API}/Mes.php?`;
export const Year = `${URL_API}/Year.php?`;
export const TOPCLIENTES = `${URL_API}/Estadisticas/TopClientes.php`;
export const REGIONESTADISTICA = `${URL_API}/Estadisticas/region.php`;
export const PROVSTADISTICA = `${URL_API}/Estadisticas/proveedor.php`;
export const LINEASTADISTICA = `${URL_API}/Estadisticas/Linea.php`;



