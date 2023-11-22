import { PrismaClient } from '@prisma/client'
import UsuarioService from './services/UsuarioService'
import LeilaoService from './services/LeilaoService'
import LanceService from './services/LanceService'

const prisma = new PrismaClient()

async function main() {
    console.log(await UsuarioService.listUsuario())
    /*console.log(await UsuarioService.createUsuario())
    console.log(await UsuarioService.updateUsuario())
    console.log(await UsuarioService.deleteUsuario('15aafa44-0ce8-413f-8b8e-7dee49849f59'))

    console.log(await LeilaoService.listLeilao())
    console.log(await LeilaoService.createLeilao())
    console.log(await LeilaoService.updateLeilao())
    console.log(await LeilaoService.fecharLeilao(''))

    console.log(await LanceService.listLance())
    console.log(await LanceService.createLance())
    console.log(await LanceService.updateLance())
    console.log(await LanceService.deleteLance(''))*/
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })