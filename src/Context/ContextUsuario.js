import { createContext } from 'react'

const ContexUsuario = createContext({
  Nombre: null,
  Departamento: null,
  UserId: null,
  Foto: null
})

export default ContexUsuario
