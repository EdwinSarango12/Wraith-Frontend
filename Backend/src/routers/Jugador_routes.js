import {Router} from 'express'
import {comprobarTokenPassword, confirmarEmail, recuperarPassword, registro, crearNuevaPassword, login } from '../controllers/Jugador_controller.js'
const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarEmail)
router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPassword)
router.post('/nuevopassword/:token',crearNuevaPassword)
router.post('/login',login)

export default router