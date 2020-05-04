<template>
  <div class="row" v-if="script">
    <form class="col s8" style="padding-left: 5%;" @submit.prevent="runScript">
      <div class="form-group">
        <label for="script"><h3>Script</h3></label>
        <textarea @input="updateScript" v-model="script" id="script" style="width: 95%; height: 60vh; resize: none;"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-2 blue darken-2">Run script</button>
    </form>
    <div class="col s4">
      <label for="script"><h3>Result</h3></label>
      <div class="card blue darken-4">
        <div class="card-content white-text">
          <span class="card-title">Returns</span>
          <p style="overflow-wrap: break-word">>> {{returns}} </p>
        </div>
      </div>
    </div>
  </div>
  <p v-else>Room not found!</p>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Room',
  data: () => ({
    script: '',
    returns: ''
  }),
  mounted () {
    this.id = this.$route.params.id
    this.script = this.$store.getters.roomById(+this.id).script
    this.returns = this.$store.getters.roomById(+this.id).returns
  },
  methods: {
    runScript () {
      this.returns = `run: ${this.script}`
    },
    updateScript () {
      clearTimeout(this.delayedSending)
      this.delayedSending = setTimeout(() => {
        
        console.log(this.script)
      }, 500)
    }
  }
}
</script>
