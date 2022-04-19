<template>
  <va-list>
    <va-list-item>
      <va-list-item-section avatar>
        <router-link to="/">
          <va-avatar>
            <img :src="company.logo || baseLogo" />
          </va-avatar>
        </router-link>
      </va-list-item-section>

      <va-list-item-section>
        <va-list-item-label>
          {{ company.name }}
        </va-list-item-label>
        <va-list-item-label caption>
          {{ company.idprof1 }}
        </va-list-item-label>
      </va-list-item-section>

      <va-list-item-section icon>
        <router-link to="/settings" class="settings-link"
          ><va-icon name="settings"
        /></router-link>
      </va-list-item-section>
    </va-list-item>
  </va-list>
</template>

<script>
export default {
  name: "Navbar",
  props: ["company"],
  setup() {
    return {
      baseLogo:
        "https://st3.depositphotos.com/22052918/35822/v/380/depositphotos_358229708-stock-illustration-letter-simple-geometric-design-logo.jpg?forcejpeg=true",
    };
  },
};
</script>

<style scoped lang="scss">
.va-list {
  padding: 0;
  background: rgb(44, 130, 224);
  color: white;

  .va-list-item-label {
    color: white;
  }

  .settings-link:visited {
    color: white;
  }
}
</style>
