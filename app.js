new Vue({
    el: '#desafio',
    data: {
        valor: 'Hello World'
    },
    methods:{
        mensagem: function(){
            alert('Mensagem disparada!');
        },
        escuta: function(event) {
            this.valor = event.target.value;
        },
        
    }
})