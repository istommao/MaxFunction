<template>
  <n-space vertical style="flex: 1">
    <n-layout has-sider style="height: 100vh;">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="220"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          v-model:value="activeKey"
        />
      </n-layout-sider>
      <n-layout>
        <div>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { NIcon, NMenu, NLayoutSider, NLayout } from 'naive-ui'

import { RouterLink } from 'vue-router'

import {
  HomeOutline as HomeIcon,
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
};

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => 'Home' }
      ),
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
]

export default defineComponent({
  components: {
    NMenu,
    NLayoutSider,
    NLayout
  },
  setup () {
    return {
      activeKey: ref('home'),
      collapsed: ref(false),
      menuOptions
    }
  }
})
</script>