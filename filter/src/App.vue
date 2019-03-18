<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h4>capitalize : {{ 'hello world' | capitalize }}</h4>
    <h4>json : {{ cat }}</h4>
    <h4>dollars</h4>
    <ul>
      <li v-for="item in inventory">{{item.name}} : {{item.price | dollars}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cat: {
        sound: 'meow'
      },
      inventory: [
        {name: 'tape measure', price: '7'},
        {name: 'stamp', price: '0.01'},
        {name: 'shark tooth', price: '1.5'},
        {name: 'iphone', price: '999'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
