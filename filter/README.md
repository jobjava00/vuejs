# filter

> filter project

* capitalize
  * 문자열의 첫글자 대문자로 변환
  * {{ 'hello world' | capitalize }}
* json
  * 기본 내장
  * json 형식의 데이터는 JSON.stringify 결과처럼 출력 됨
* dollars
  * 통화 달러 표시
  * {{item.price | dollars}}
  * <http://openexchangerates.github.io/accounting.js/>
* date
  * 날짜 포맷 변환
  * {{ createDt | date('YYYY-MM-DD HH:mm:ss') }}
  * <https://momentjs.com/>
  
  
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
