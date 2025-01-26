<template>
  <div class="flex h-lvh flex-col">
    <UHorizontalNavigation :links="menuLinks" :ui="{ wrapper: 'border' }" />
    <main class="mx-auto mb-20 flex h-full w-full max-w-6xl flex-col p-2 py-4 sm:py-6 lg:py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = computed(() => route.path);

const { t } = useI18n();

const menuLinks = computed(() => [
  [
    {
      label: t('start_page'),
      to: '/',
      active: path.value === '/',
    },
  ],
]);
</script>
