<template>
    <div class="sound">

          <svg v-if='!muted'
                @click="clickSound" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                class="bi bi-volume-down-fill" 
                viewBox="0 0 16 16">

            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
          </svg>

          <svg v-else
                @click="clickSound"  
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                class="bi bi-volume-mute-fill" 
                viewBox="0 0 16 16">

            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
          </svg>

          <input type="range" class="form-range" id="disabledRange" :disabled='false' min='0' max="100" step="1" :value="volume" @input='changeVolume'>
        </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            muted: 'muted',
            volume: 'volume',
            audio: 'audio'
        }),
    },
    methods: {
        ...mapMutations({
            setVolume: 'setVolume',
            changeMuted: 'changeMuted',
            playAudio: 'playAudio'
        }),
        changeVolume(e) {
          this.setVolume(e.target.value/100);
        },
        clickSound(){
          if (!this.audio.src) this.playAudio(require('../audio/audio.mp3'));
          this.changeMuted();
        }
    },
}
</script>

<style scoped>
.sound{
  max-width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.sound svg{
  width: 10%
}
.sound input{
  width: 80%;
}
</style>