# vue-use-local-storage

A composition api to persist and rehydrate reactive data to local storage for vue 3.
##### Caution: Tested on vue 3 reactive() only, didn't test for ref(). ref() data shouldn't work with this.

### Demo
[Demo](https://hj29.github.io/vue-use-local-storage/)

[Demo Code](https://github.com/HJ29/vue-use-local-storage/tree/master/example/src/)

### Install
```bash
yarn add vue-use-local-storage
npm i --save vue-use-local-storage
```

### Quickstart
```js
import { defineComponent, reactive } from 'vue';
import useLocalStorage from 'vue-use-local-storage';

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      someValue: 'some value',
      someValue2: 'some value 2'
    });
    /**
     * basic usage
     * state: typeof reactive
     * key: string
     * whitelist?: string[] !optional 
     *    whitelist keys of state to persist. 
     *    ignore whitelist if you wish to persist whole object
     */
    const storage = useLocalStorage(state, 'someKey', ['someValue'])
    /**
     * callback on first rehydrated from local storage 
     */
    storage.onRehydrate(state => {
      console.log(state)
    });
  }
});
```

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
