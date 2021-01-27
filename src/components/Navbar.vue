<template>
  <div class="navbar">
      <nav class="nav-extended indigo darken-2">
        <div class="nav-content">
          <router-link :to="{name : 'Index'}">
            <span class="nav-tittle">Ninja Smoothies</span>
          </router-link>
          <a href="" class="btn-floating btn-large halfway-fab pink">
            <router-link :to="{ name: 'AddSmoothie' }">
              <i class="material-icons">add</i>
            </router-link>
          </a>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-content{
    line-height: 100px !important;
  }
  .nav-tittle{
    font-size: 40px;
    margin: 3%;
  }
</style>
