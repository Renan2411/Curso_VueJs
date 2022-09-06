import Vue from "vue";
import axios from "axios";

//Coloca como uma base. Qualquer endereço passado ao axios será concatenado com essa URL
// axios.defaults.baseURL = 'https://curso-vue-3525f-default-rtdb.firebaseio.com/'

//Colocando headers globalmente nas requisições HTTP
// axios.defaults.headers.common['Authorization'] = 'abc123'

//Colocando headers para métodos específicos
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-3525f-default-rtdb.firebaseio.com/',
            // headers: {
            //     'Authorization': 'abc123'
            // }
        })

        // Vue.prototype.$http.interceptors.request.use(config => {
        //     // if(config.method === 'post'){
        //     //     config.method = 'put'
        //     // }
        //     return config
        // }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(config => {

            const array = []

            for (let chave in config.data) {
                array.push({
                    id: chave, ...config.data[chave]
                })
            }

            config.data = array

            return config

        }, error => Promise.reject(error))
    }
})