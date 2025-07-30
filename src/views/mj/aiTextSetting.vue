<script setup lang="ts">
import { computed, ref } from 'vue'
import { NModal, NTag } from 'naive-ui'
import aiSetServer from './aiSetServer.vue'
import { homeStore } from '@/store'
const isHideServer = computed(() => homeStore.myData.session.isHideServer)
const st = ref({ show: false })
</script>

<template>
  <div v-if="!isHideServer" class="whitespace-pre-wrap pb-10">
    <span class=" text-red-400">{{ $t('mj.setTextInfo') }} </span> <NTag type="primary" effect="dark" size="small" round style="cursor: pointer; " @click="st.show = true">
      {{ $t('setting.setting') }}
    </NTag>
  </div>
  <NModal v-model:show="st.show" :title="$t('mjset.server')" preset="card" style="width: 95%; max-width: 640px">
    <aiSetServer v-if="st.show" @close="st.show = false" />
  </NModal>
</template>
