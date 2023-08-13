<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

const onNeedRefresh = () => {
  needRefresh.value = true
}
const close = async () => {
  needRefresh.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onNeedRefresh,
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <div
    v-if="needRefresh"
    class="pwa-toast"
    role="alertdialog"
    aria-labelledby="pwa-message"
  >
    <div id="pwa-message" class="mb-3">
      发现新大陆，准备扬帆起航！
    </div>
    <button
      type="button"
      class="pwa-refresh"
      @click="updateServiceWorker?.()"
    >
      冲冲冲
    </button>
    <button
      type="button"
      class="pwa-cancel"
      @click="close"
    >
      下次一定
    </button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  z-index: 100;
  text-align: left;
  box-shadow: var(--vp-shadow-2);
  background-color: var(--vp-c-bg);
}
.pwa-toast #pwa-message {
  margin-bottom: 0.8rem;
}
.pwa-toast .pwa-refresh {
  margin-right: 1rem;
  border-color: var(--vp-button-brand-border);
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}
.pwa-toast button {
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-button-alt-border);
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
}
.pwa-toast button:hover {
  opacity: .85;
}
</style>
