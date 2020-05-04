<template>
  <div class="row" >
    <form class="col s12" @submit.prevent="createRoom">
      <div class="row" >
        <div class="input-field col s12 ">
          <input v-model="roomName" placeholder="Room name" id="name" type="text" class="validate">
          <label for="first_name"></label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-2 blue darken-2">Create room</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    roomName: ''
  }),
  methods: {
    createRoom () {
      const room = {
        name: this.roomName,
        id: Date.now(),
        script: `(() => {

})();`,
        returns: '1'
      }
      this.roomName = ''
      this.$store.dispatch('createRoom', room)
      this.$router.push('/')
    }
  }
}
</script>
