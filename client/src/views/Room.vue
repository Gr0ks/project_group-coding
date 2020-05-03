<template>
  <div class="row" >
    <form class="col s8" style="padding-left: 5%;">
      <div class="form-group">
        <label for="script"><h3>Script</h3></label>
        <textarea id="script" style="width: 95%; height: 60vh; resize: none;"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-2 blue darken-2">Run script</button>
    </form>
    <div class="col s4">
      <label for="script"><h3>Result</h3></label>
      <div class="card blue darken-4">
        <div class="card-content white-text">
          <span class="card-title">Returns</span>
          <p style="overflow-wrap: break-word">>> room.returns </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {}
</script>
