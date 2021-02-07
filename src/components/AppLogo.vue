<template>
  <div class="AppLogo">
    <div class="AppLogo__icon"></div>
    <span class="AppLogo__name">Удомельский Колледж</span>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.AppLogo {
  display: flex;
  align-items: center;

  &__icon {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/public/icons/logo.png');
  }

  &__name {

  }
}
</style>
