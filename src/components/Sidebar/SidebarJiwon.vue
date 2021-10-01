<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" @click="onClickNavLink('Jiwon')" :class="{ active: isHere('Jiwon') }">
            0일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Jiwon1')" :class="{ active: isHere('Jiwon1') }">
            1일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Jiwon2')" :class="{ active: isHere('Jiwon2') }">
            2일차
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
export default class SidebarJiwon extends Vue {
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
