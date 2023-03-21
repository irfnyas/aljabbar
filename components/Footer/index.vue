<template>
  <footer class="relative flex flex-col bg-white pt-12 pb-7">
    <BaseContainer>
      <NuxtLink to="/" class="hover:cursor-pointer">
        <img
          src="@/assets/logo.svg"
          alt="Logo Al Jabbar"
          width="234"
          height="48"
          class="mb-6"
        >
      </NuxtLink>
      <FooterInfo />
      <FooterCopyright />
    </BaseContainer>
  </footer>
</template>
