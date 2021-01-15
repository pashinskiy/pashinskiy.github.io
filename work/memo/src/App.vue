<template>
  <div class="container">
    <transition name="screen" appear mode="out-in">      

      <div v-if="quest" class="alert alert-my text-center m-auto" key='quest'>
        <h1>Вы готовы?</h1>

        <SoundPanel/>
        
        <button @click="onePress" class="btn btn-primary">Да</button>
      </div>

      <div v-else-if="showLevelFlag" class="alert alert-my text-center m-auto" key='level'>
        <h1>Уровень {{ level }}</h1>
      </div>

      <div v-else-if="finish" class="alert alert-my text-center m-auto" key='finish'>
        <h1>Конец</h1>
        <h2>Время: {{ time }}</h2>
        <h2>Ходов: {{ steps }}</h2>
        <button @click="restart" class="btn btn-primary">Рестарт</button>
      </div>    

      <div v-else class="field">
        <div class="bar" :key="seconds">
          <SoundPanel/>
          <p>{{ time }}</p>
        </div>
        <div v-for="(row, row_i) in rows" :key="row_i" class="row">
          <div v-for="(ticket, i) in row" :key="i" class="elem">
            <Ticket
              :val="ticket.value"
              :open="ticket.show"
              @show="checkTicket(ticket)"
              class="ticket"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Ticket from "./components/Ticket.vue";
import SoundPanel from "./components/SoundPanel.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    Ticket,
    SoundPanel
  },
  data() {
    return {
      openEl: [],
      flagTimeout: false,
      finish: false,
      quest: true,
      showLevelFlag: false,
      seconds: 0,
      idTimer: null,
      steps: 0
    };
  },
  computed: {
    ...mapGetters({
      getNumbers: "numbers",
      level: "level",
      audio: 'audio'
    }),
    tickets() {
      let numbers = this.getNumbers.map((el, index) => {
        return {
          id: index,
          value: el,
          show: !!this.openEl.find((ticket) => ticket.id == index),
        };
      });
      return numbers;
    },
    rows() {
      let rows = [];
      if (this.tickets.length < 8) {
        rows = [
          this.tickets.slice(0, this.tickets.length / 2),
          this.tickets.slice(this.tickets.length / 2),
        ];
      } else if (this.tickets.length % 4 == 0) {
        let index = 0;
        while (rows.length != this.tickets.length / 4) {
          rows.push(this.tickets.slice(index, (index += 4)));
        }
      } else if (this.tickets.length == 10) {
        rows.push(this.tickets.slice(0, 3));
        rows.push(this.tickets.slice(3, 7));
        rows.push(this.tickets.slice(7));
      } else if (this.tickets.length == 14) {
        rows.push(this.tickets.slice(0, 3));
        rows.push(this.tickets.slice(3, 7));
        rows.push(this.tickets.slice(7, 11));
        rows.push(this.tickets.slice(11));
      }

      return rows;
    },
    levelComplate() {
      return this.openEl.length == this.tickets.length;
    },
    time(){
      let min = Math.floor(this.seconds/60);
      min = min < 10 ? '0'+ min : min;
      let sec = this.seconds % 60;
      sec = sec < 10 ? '0'+ sec : sec
      return `${min}:${sec}`;
    }
  },
  methods: {
    ...mapMutations({
      uplevel: "uplevel",
      playAudio: 'playAudio',
      proggresDown: 'proggresDown'
    }),
    onePress(){
      if (!this.audio.src) this.playAudio(require('./audio/audio.mp3'));

      this.quest = !this.quest;
      this.startTimer();
      this.showLevel();
    },
    showLevel(){
      this.showLevelFlag = true;
      setTimeout(() => {
        this.showLevelFlag = false;
      }, 1500);
    },    
    setFlagTimeout(callBack) {
      this.flagTimeout = true;
      setTimeout(() => {
        if (callBack) callBack();
        this.flagTimeout = false;
      }, 500);
    },
    checkTicket(ticket) {
      if (!this.flagTimeout) {

        this.steps++;
        this.openEl.push(ticket);
      
        if (this.openEl.length % 2 == 0 && ticket.value != this.openEl[this.openEl.length - 2].value) {
                  this.setFlagTimeout(() => this.openEl.splice(-2));
        }
      }
    },
    startTimer() {
      this.idTimer = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.idTimer);
    },
    restart() {
      this.proggresDown();
      this.openEl = [];
      this.finish = false;
      this.quest = true;
      this.seconds = 0;
      this.steps = 0;
    }
  },
  watch: {
    levelComplate() {
      if (this.levelComplate) {
        this.setFlagTimeout(() => {
          if (this.tickets.length == 16) {
            this.finish = true;
            return;
          }
          this.uplevel();
          this.showLevel();
          this.openEl = [];
        });
      }
    },
    finish() {
      this.stopTimer();
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  background: no-repeat url("./images/containerback.jpg") center / cover;
}
.field {
  width: 90vh;
  height: 90vh;
  max-width: 1000px;
  max-height: 1000px;
  border: 1vh solid black;
  background-color: rgba(56, 53, 53, 0.9);
  border-radius: 10%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  overflow: hidden;
  position: relative;
}
.row {
  width: 100%;
  height: 25%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.elem {
  width: 25%;
  height: 100%;
  padding: 5%;
}
.ticket {
  width: 100%;
  height: 100%;
  border-radius: 20%;
  overflow: hidden;
}
.screen-enter-active{
  animation: slideIn 0.6s;
}
.screen-leave-active{
  animation: slideOut 0.5s;
}
@keyframes slideIn{
  from { transform: scale(0); } 
  to { transform: scale(1); }
}
@keyframes slideOut{
  from { opacity: 1; } 
  to { opacity: 0; }
}
.bar{
  color: #fff;
  position: absolute;
  margin: auto;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
}
.bar p{
  margin: auto;
}
.alert{
  border-radius: 30px;
}
.alert-my{
  min-width: 40%;
  padding-top: 5%!important;
  padding-bottom: 5%!important;
  color: #fff;
  background-color: rgba(56, 53, 53, 0.9);
}
.btn {
  margin-top: 5%;
  width: 40%;
}

@media (max-width: 1000px) and (max-height: 800px) {
  .container{
    background-image: url("./images/containerback2.jpg");
  }
}
@media screen and (orientation: portrait) {
  .field {
    width: 90vw;
    height: 90vw;
    border-width: 1vw;
  }
}
</style>
