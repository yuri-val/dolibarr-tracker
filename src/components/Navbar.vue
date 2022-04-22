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
          <va-icon name="person" size="small" />
          <span v-if="isEmpty(user)">{{ company.idprof1 }}</span>
          <span v-else>{{ `${user.firstname} ${user.lastname}` }}</span>
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
import baseLogo from "@/assets/images/logo.png";
import isEmpty from "lodash/isEmpty";

export default {
  name: "Navbar",
  props: ["company", "user"],
  setup() {
    return {
      baseLogo,
      isEmpty,
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
