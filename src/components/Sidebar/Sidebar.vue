<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" @click="onClickNavLink('Home')" :class="{ active: isHere('Home') }">
            <span data-feather="home"></span>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Daum')" :class="{ active: isHere('Daum') }">
            <span data-feather="daum"></span>
            Daum
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Krx')" :class="{ active: isHere('Krx') }">
            <span data-feather="krx"></span>
            Krx
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Customers')" :class="{ active: isHere('Customers') }">
            <span data-feather="users"></span>
            Customers
          </a>
        </li>
      </ul>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('CurrentMonth')" :class="{ active: isHere('CurrentMonth') }">
            <span data-feather="file-text"></span>
            Current month
          </a>
        </li>
      </ul>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Tensorflow')" :class="{ active: isHere('Tensorflow') }">
            <span data-feather="file-text"></span>
            Tensorflow
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Sidebar extends Vue {
  onClickNavLink(name: string) {
    if (!this.isHere(name)) {
      this.$router.push({ name: name });
    }
  }
  isHere(name: string) {
    return this.$route.name === name;
  }
}
</script>

<style lang="css">
.nav-link:hover {
  background-color: #0b5ed7;
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
}
.active {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: #fff;
  border-radius: 0.25rem;
}
</style>
