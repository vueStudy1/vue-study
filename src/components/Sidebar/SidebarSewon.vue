<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" @click="onClickNavLink('Sewon')" :class="{ active: isHere('Sewon') }">
            0일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Sewon1')" :class="{ active: isHere('Sewon1') }">
            1일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Sewon2')" :class="{ active: isHere('Sewon2') }">
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
export default class SidebarSewon extends Vue {
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
</style>
