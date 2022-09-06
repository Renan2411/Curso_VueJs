<template>
  <div>
    <v-col cols="12" sm="6">
      <v-text-field
        label="Qual sua tarefa?"
        v-model="novaTarefa"
        outlined
        clearable
        @keydown.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-subheader>General</v-subheader>

      <v-list-item-group multiple active-class="">
        <draggable
          v-model="myArray"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
            <single-task
              :tarefa="tarefa"
              @changeStatus="tarefa.concluido = $event"
            />
          </div>
        </draggable>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import singleTask from "../components/tasks/SingleTask.vue";
import draggable from "vuedraggable";

export default {
  components: { singleTask, draggable },
  data() {
    return {
      novaTarefa: "",
    };
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit("adicionarTarefa", this.novaTarefa);
      this.novaTarefa = null;
    },
  },
};
</script>
