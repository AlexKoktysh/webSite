<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text to="/about">
        <span class="mr-2">About me</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn text to="/projects">
        <span class="mr-2">My projects</span>
        <v-icon>mdi-briefcase</v-icon>
      </v-btn>
      <v-btn text to="/contacts">
        <span class="mr-2">My contacts</span>
        <v-icon>mdi-comment-account</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: fit-content;
}
::v-deep .v-toolbar__content {
  justify-content: flex-end;
}
</style>
