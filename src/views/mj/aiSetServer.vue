<script setup lang="ts">
import { NButton, NInput, NSwitch, useMessage } from 'naive-ui'

import { gptServerStore } from '@/store'
import { blurClean } from '@/api'
import { t } from '@/locales'

const emit = defineEmits(['close'])
const ms = useMessage()
const save = () => {
  gptServerStore.setMyData(gptServerStore.myData)
  ms.success(t('mjchat.success'))
  emit('close')
}
// const blurClean= ()=>{
//   mlog('blurClean');
//   gptServerStore.myData.OPENAI_API_BASE_URL =myTrim( myTrim(gptServerStore.myData.OPENAI_API_BASE_URL.trim(),'/'), '\\' );
//   gptServerStore.myData.OPENAI_API_KEY = gptServerStore.myData.OPENAI_API_KEY.trim();
//   gptServerStore.myData.MJ_SERVER =myTrim( myTrim( gptServerStore.myData.MJ_SERVER.trim(),'/'),'\\');
//   gptServerStore.myData.MJ_API_SECRET = gptServerStore.myData.MJ_API_SECRET.trim();
//   gptServerStore.myData.UPLOADER_URL=  myTrim( myTrim( gptServerStore.myData.UPLOADER_URL.trim(),'/'),'\\');
// }
</script>

<template>
  <div id="setserver">
    <div class="text-right">
      {{ $t('mj.setOpen') }}
    </div>
    <section class="mb-4 flex justify-between items-center">
      <NInput v-model:value="gptServerStore.myData.OPENAI_API_BASE_URL" :placeholder="$t('mj.setOpenPlaceholder') " clearable @blur="blurClean">
        <template #prefix>
          <span class="text-[var(--n-tab-text-color-active)]">{{ $t('mj.setOpenUrl') }}:</span>
        </template>
      </NInput>
    </section>

    <section class="mb-4 flex justify-between items-center">
      <NInput v-model:value="gptServerStore.myData.OPENAI_API_KEY" type="password" :placeholder="$t('mj.setOpenKeyPlaceholder')" show-password-on="click" clearable @blur="blurClean">
        <template #prefix>
          <span class="text-[var(--n-tab-text-color-active)]">OpenAI Api Key:</span>
        </template>
      </NInput>
    </section>

    <div class="text-right">
      {{ $t('mj.setMj') }}
    </div>
    <section class="mb-4 flex justify-between items-center">
      <NInput v-model:value="gptServerStore.myData.MJ_SERVER" :placeholder="$t('mj.setOpenPlaceholder') " clearable>
        <template #prefix>
          <span class="text-[var(--n-tab-text-color-active)]">{{ $t('mj.setMjUrl') }}</span>
        </template>
      </NInput>
    </section>

    <section class="mb-4 flex justify-between items-center">
      <NInput v-model:value="gptServerStore.myData.MJ_API_SECRET" type="password" :placeholder="$t('mj.setMjKeyPlaceholder') " show-password-on="click" clearable>
        <template #prefix>
          <span class="text-[var(--n-tab-text-color-active)]">Midjourney Api Secret:</span>
        </template>
      </NInput>
    </section>
    <section class="mb-4 flex justify-start items-center">
      <NSwitch v-model:value="gptServerStore.myData.MJ_CDN_WSRV">
        <template #checked>
          {{ $t('mj.wsrvClose') }}
        </template>
        <template #unchecked>
          {{ $t('mj.wsrvOpen') }}
        </template>
      </NSwitch>
    </section>

    <div class="text-right">
      {{ $t('mj.setUploader') }}
    </div>
    <section class="mb-4 flex justify-between items-center">
      <NInput v-model:value="gptServerStore.myData.UPLOADER_URL" :placeholder="$t('mj.setOpenPlaceholder')" clearable>
        <template #prefix>
          <span class="text-[var(--n-tab-text-color-active)]">{{ $t('mj.setUploaderUrl') }}</span>
        </template>
      </NInput>
    </section>

    <section class=" text-right flex justify-end space-x-2">
      <NButton @click="gptServerStore.setInit()">
        {{ $t('mj.setBtBack') }}
      </NButton>
      <NButton type="primary" @click="save">
        {{ $t('mj.setBtSave') }}
      </NButton>
    </section>
  </div>
</template>

<style>
#setserver .n-input .n-input__input-el{
    text-align: right;
}
</style>
