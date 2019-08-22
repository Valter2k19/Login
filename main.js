new Vue({
    el:'#app',
    data(){
        return {
            mensagem:'',
            contacto:{
                id:0,
                nome: null,
                telefone: null
            },
            index: null,
            lista:[]
        }
    },
    mounted(){
        const contactos = JSON.parse(localStorage.getItem('contactos'))
        this.lista = contactos ? contactos : []
    },
    methods:{
        adicionar(){
            if(this.contacto.id === 0){
                this.contacto.id = this.lista.lenght + 1
                this.lista.push(this.contacto)
            } else {
                this.lista[this.index] = this.contacto
            }

            localStorage.setItem('contactos', JSON.stringify(this.lista))
            this.contacto = {id:0, nome: null, telefone: null}
        },
        excluir(item){
            const idx = this.lista.indexOf(item)
            this.lista.splice(idx, 1)
            localStorage.setItem('contactos', JSON.stringify(this.lista))
        },
        editar(item){
            this.index = this.lista.indexOf(item)
            this.contacto = Object.assign({}, item);
            localStorage.setItem('contactos', JSON.stringify(this.lista))
        }
    }
})