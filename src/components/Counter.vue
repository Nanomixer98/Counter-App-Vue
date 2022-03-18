<template>
  <h2>{{ customTitle }}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ getSquareValue }}</p>

    <div>
        <button @click="increase()">+1</button>
        <button @click="decrease()">-1</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator(value) {
                return value > -1
            }
        }
    },
    // name: "Patito",
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        increase() {
            this.counter += 1;
        },
        decrease() {
            this.counter -= 1;
        }
    },
    computed: {
        getSquareValue() {
            console.log('computed square counter');
            return this.counter * this.counter;
        },
        customTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style>

button {
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid wheat;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px; 
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>