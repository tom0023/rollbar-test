<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <!-- <button v-on:click="buttonAction" class="bg-indigo-700 font-semibold">{{button}}</button> -->
    <button v-on:click="rollbartest" class="bg-indigo-700 font-semibold">RollbarTest</button>
  </div>

</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vform',
  methods: {
    // mapActions('Form',{
    // 'buttonAction': 'buttonAction'
    // }),
    rollbartest(){
      try{
        console.log('富田')
        console.log(富田)
      }catch(e){
        this.$rollbar.info(e);
      }
    }
  },
  computed: mapGetters('Form', {
    'button': 'getButton',
    'isComponent': 'getComponent'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
