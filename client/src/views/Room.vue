<template>
  <div class="row" v-if="id">
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
    id: '',
    script: '',
    returns: ''
  }),
  async mounted () {
    this.id = this.$route.params.id
    const room = await this.$store.dispatch('getRoomById', +this.id)
    this.script = room.script
    this.returns = room.returns
    this.delayGetRoom = setInterval(async () => {
      const script = document.getElementById('script')
      const position = script.selectionStart
      const {script, returns} = await this.$store.dispatch('getRoomById', +this.id)
      this.script = room.script
      this.returns = room.returns
      script.selectionStart = position
    }, 500)
  },
  methods: {
    async runScript () {
      this.returns = await this.$store.dispatch('getReturnsById', +this.id)
    },
    updateScript () {
      // clearInterval(this.delayGetRoom)
      // clearTimeout(this.delayedSending)
      // this.delayedSending = setTimeout(() => {
      //   this.$store.dispatch('updateScript', {
      //     id: this.id,
      //     script: this.script
      //   })
      //   this.delayGetRoom = setInterval(async () => {
      //     const script = document.getElementById('script')
      //     const position = script.selectionStart
      //     const {script, returns} = await this.$store.dispatch('getRoomById', +this.id)
      //     this.script = room.script
      //     this.returns = room.returns
      //     script.selectionStart = position
      //   }, 500)
      // }, 500)
    }
  },
  destroyed () {
    if (this.delayGetRoom) {
      clearInterval(this.delayGetRoom)
    }
  }
}
</script>
