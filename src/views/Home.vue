<template>
  <div class="home">
    <img class="logo" alt="Groupmania logo" src="../assets/logo/icon-left-font-monochrome-black.svg" />
    <ButtonDefault>Get Started</ButtonDefault>
    <div class="containerImage">
      <img class="imgHome imgHome__p1" src="../assets/images/1.png" alt="" />
      <img class="imgHome imgHome__p2" src="../assets/images/2.png" alt="" />
      <img class="imgHome imgHome__p3" src="../assets/images/3.png" alt="" />
      <font-awesome-icon class="imgHome__icon1" icon="font-awesome-icon"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonDefault from '@/components/ButtonDefault.vue'

export default {
  name: "Home",
  components: {
    ButtonDefault
  },
};
</script>

<style scoped lang="scss">

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.logo {
  width: 200px;
  margin: 150px 0 50px 0;
}

.containerImage {
  position: relative;
}

.imgHome {
  position: absolute;
}

.imgHome__p1 {
  top : -260px;
  right: -330px;
  width: 190px;
  transform: rotate(-40deg);
}

.imgHome__p2 {
  top: 150px;
  left: 20px;
  width: 240px;
}

.imgHome__p3 {
  top: 150px;
  right: 0px;
  width: 250px;
}

</style>
