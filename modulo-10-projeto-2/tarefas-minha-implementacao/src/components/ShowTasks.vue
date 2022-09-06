<template>
  <div class="row">
    <div
      v-for="item in tasks"
      :key="item.id"
      class="card"
      :class="item.class"
      @click="endTask(item.id)"
    >
      {{ item.task }}
      <button class="excluir" @click="removeTask(item.id)">x</button>
    </div>
  </div>
</template>

<script>
import barramento from "../barramento";
export default {
  props: ["progress"],
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    barramento.whenAddTask((task) => {
      if (!this.checkTask(task)) {
        let id = this.tasks.length;
        task.id = id;

        this.tasks.push(task);
      }
    });
  },
  methods: {
    checkTask(task) {
      let verify = false;

      this.tasks.map((e) => {
        if (e.task === task.task) {
          verify = true;
        }
      });

      return verify;
    },
    endTask(id) {
      if (this.tasks[id].class === "notDone") {
        this.tasks[id].class = "done";
      } else {
        this.tasks[id].class = "notDone";
      }

      this.progressChange();
    },
    progressChange() {
      barramento.progressChange(this.countTasks());
    },
    countTasksDone() {
      let quantityTaskDone = 0;

      this.tasks.map((e) => {
        e.class === "done" && quantityTaskDone++;
      });

      return quantityTaskDone;
    },
    countTasks() {
      let quantityTaskDone = this.countTasksDone();
      let porcentDone = 0;

      if (quantityTaskDone !== 0) {
        porcentDone = parseInt((quantityTaskDone * 100) / this.tasks.length);
      }

      return porcentDone;
    },
    removeTask(id) {
      let identificador = 0;
      let newArray = [];

      this.tasks.map((e) => {
        if (e.id !== id) {
          newArray.push(e);
          newArray[identificador].id = identificador;
          identificador++;
        }
      });
      this.tasks = newArray;
    },
  },
  watch: {
    tasks() {
      this.progressChange();
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 200px;
  text-align: center;
  font-size: 1.5em;
}

.notDone {
  border-left: 3px solid red;
  background-color: #b3404a;
}

.done {
  border-left: 3px solid green;
  background-color: #3bb54a;
  text-decoration: line-through;
}

.excluir {
  border-radius: 20px;
  border: transparent;
  background-color: rgba(0, 0, 0, 0.267);
  color: white;

  position: absolute;
}
</style>