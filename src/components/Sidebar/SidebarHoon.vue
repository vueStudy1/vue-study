<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" @click="onClickNavLink('Hoon')" :class="{ active: isHere('Hoon') }">
            0일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Hoon1')" :class="{ active: isHere('Hoon1') }">
            1일차
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="onClickNavLink('Hoon2')" :class="{ active: isHere('Hoon2') }">
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
export default class SidebarHoon extends Vue {
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
