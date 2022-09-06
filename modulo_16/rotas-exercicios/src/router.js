import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuAlternativo from './components/template/MenuAlternativo'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to){
        if(to.hash){
            return { selector: to.hash }
        }
        // return { x: 0, y: 1000 }
    },
    routes: [
        {
            name: 'inicio',
            path: '/',
            // component: Inicio
            components: {
                default: Inicio,
                menu: Menu,
            }
        }, 
        {
            path: '/usuario',
            // component: Usuario,
            //indica que o parâmetro da rota poderá ser recebido como uma propriedade
            props: true,
            components:{
                default: Usuario,
                menu: MenuAlternativo,
            },

            children: [
                {
                    path: '',
                    component: UsuarioLista,
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true
                },
                {
                    name: 'usuarioEditar',
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                }
            ]
        }, 
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
})

router.beforeEach()

export default router;