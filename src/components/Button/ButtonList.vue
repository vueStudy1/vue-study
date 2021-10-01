<template>
  <div>
    btn, btn-...
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>

    a, button, input:button, input:submit, input:reset
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">

    out-line-...
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>

    btn-lg
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>

    btn-sm
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
    <button type="button" class="btn btn-secondary btn-sm">Small button</button>

    disable
    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>

    a의 disabeld
    <a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
    <a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>

    tabindex ?
    <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
    <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>

    꽉 체우기
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button">Button</button>
      <button class="btn btn-primary" type="button">Button</button>
    </div>

    <div class="d-grid gap-2 d-md-block">
      <button class="btn btn-primary" type="button">Button</button>
      <button class="btn btn-primary" type="button">Button</button>
    </div>

    중간
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button">Button</button>
      <button class="btn btn-primary" type="button">Button</button>
    </div>

    우측 justify-content-md-end
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2" type="button">Button</button>
      <button class="btn btn-primary" type="button">Button</button>
    </div>

    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
    <button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
    <button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Disabled toggle button</button>

    <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
    <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
    <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ButtonList extends Vue {
}
</script>
