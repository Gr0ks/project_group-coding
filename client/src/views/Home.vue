<template>
  <div class="collection" v-if="rooms.length">
    <router-link :to="`/room/${room.id}`" v-for="room of rooms" v-bind:key="room.id" class="collection-item">{{room.name}}</router-link>
  </div>
  <p v-else>No rooms! Create new room.</p>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'room',
  data: () => ({
    rooms: []
  }),
  async mounted () {
    this.rooms = await this.$store.dispatch('getRooms')
  }
}
</script>
