<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const toast = useToast();
const { t, locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
onErrorCaptured((error) => {
  console.error(error);
  toast.add({
    title: t('error_occurred'),
    description: error.message,
    color: 'error',
  });
});
</script>
