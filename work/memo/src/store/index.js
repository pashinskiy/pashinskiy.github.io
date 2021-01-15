import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numbers: [1,2,3,4,5,6,7,8],
        level: 1,
        audio: new Audio(),
        volume: 0.02,
        muted: true
    },
    getters: {
        numbers(state) {
            return [
                ...state.numbers.slice(0, state.level + 1),
                ...state.numbers.slice(0, state.level + 1),
              ].sort(function(){
                return Math.random() - 0.5;
              });
        },
        level(state) {
            return state.level;
        },
        muted(state) {
            return state.muted;
        },
        volume(state) {
            return state.volume*100;
        },
        audio(state) {
            return state.audio;
        }
    },
    mutations: {
        uplevel(state) {
            state.level++;
        },
        playAudio(state, src) {
            state.audio.src = src;
            state.audio.loop = true;
            state.audio.volume = state.volume;
            state.audio.muted = state.muted;
            state.audio.play();
        },
        setVolume(state, val) {
            state.volume = val;
            state.audio.volume = state.volume;
        },
        changeMuted(state) {
            state.muted = !state.muted;
            state.audio.muted = state.muted;            
        },
        proggresDown(state) {
            state.level = 1;
        }
    }
});