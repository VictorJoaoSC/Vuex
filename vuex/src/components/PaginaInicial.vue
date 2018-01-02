<template>
  <div id="pagina1">
      Contador: {{Contador}}<br/>
      <a href="#" v-on:click="incrementar">Inrementar</a>
      <br/><br/>
      <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>

    // export default ({
    //     data(){
    //         return{
    //             count : 0
    //         }
    //     },
    //     methods:{
    //         incrementar(){
    //             this.commit('incrementar')
    //         }
    //     },
    //     computed:{
    //         Contador:function(){
    //             return this.$store.count
    //         }
    //     }
    // })
export default {
  name: 'PaginaInicial',
  data () {
    return {
      conter: 0
    }
  },
  methods:{
      incrementar() {
          this.$store.commit('incrementar')
      }
  },
  computed:{
      Contador:function() {
          return this.$store.state.contador
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
