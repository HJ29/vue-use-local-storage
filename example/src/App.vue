<template>
  <div>
    <div>
      persisted: {{ state.persistValue }}
      <button @click="onRandomPersist">
        random
      </button>
    </div>
    <div>
      not persisted: {{ state.ignoreValue }}
      <button @click="onRandomNotPersist">
        random
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import useLocalStorage from 'vue-use-local-storage';
import faker from 'faker';

export default defineComponent({
  name: 'App',
  setup() {
    faker.seed(1);
    const state = reactive({
      persistValue: faker.name.firstName(),
      ignoreValue: faker.name.firstName()
    });

    useLocalStorage(state, 'someKey', ['persistValue'])
      .onRehydrate((state) => {
        console.log(state);
      });

    function onRandomPersist() {
      state.persistValue = faker.name.firstName();
    }

    function onRandomNotPersist() {
      state.ignoreValue = faker.name.firstName();
    }

    return {
      onRandomPersist,
      onRandomNotPersist,
      state
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.separator {
  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
  margin: 10px 0px;
}
</style>
