import {ref} from 'vue'
export default function useCounter(initialCount=0, stepSize=1){
    const counter = ref(initialCount)
    function increment(){

        counter.value += stepSize;
    }
    return {
        counter,
        increment
    }
}