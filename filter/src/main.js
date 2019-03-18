import Vue from 'vue'
import App from './App.vue'
const accounting =  require('./assets/accounting.min.js');

Vue.filter('capitalize', function (string) {
  let [first, ...tail] = string; // 비구조화 할당 - 첫 번째 문자를 first 변수, 그 외 다른 문자는 모두 tail 에 넣는다.
  return first.toUpperCase() + tail.join('');
});

Vue.filter('dollars', function (money) {
  return accounting.formatMoney(money);
});

new Vue({
  el: '#app',
  render: h => h(App)
});
