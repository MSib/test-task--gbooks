<script setup lang="ts">
import panelWithHeader from '@/prime/panelWithHeader'
</script>

<template>
  <section class="m-2 sm:m-4 flex flex-col gap-4">
    <h1 class="sr-only">Обо мне</h1>
    <Card>
      <template #title>Мясников Михаил</template>
      <template #content>
        <p class="m-0">
          <span class="mr-3 pi pi-user"></span>
          <span>36 лет, родился 22 мая 1988</span>
        </p>
        <p class="m-0">
          <span class="mr-3 pi pi-at"></span>
          <a href="mailto:m.s.miasnikov@mail.ru">m.s.miasnikov@mail.ru</a>
        </p>
        <p class="m-0">
          <span class="mr-3 pi pi-telegram"></span>
          <a class="cursor-pointer" href="https://t.me/m_s_miasnikov">m_s_miasnikov</a>
        </p>
        <p class="m-0">
          <span class="mr-3 pi pi-github"></span>
          <a href="https://github.com/msib">GitHub</a>
        </p>
      </template>
    </Card>
    <Card>
      <template #title>Опыт работы</template>
      <template #content>
        <Panel header="АО Заводоуковский машзавод" :pt="panelWithHeader">
          <p>Инженер-программист</p>
          <p class="text-sm"><span class="pi pi-calendar mr-2"></span>2009-2024 (14 лет)</p>
        </Panel>
      </template>
    </Card>
    <Card>
      <template #title>Образование</template>
      <template #content>
        <Panel header="Среднее специальное" :pt="panelWithHeader">
          <p class="text-lg">
            Заводоуковский филиал Тюменского Государственного Нефтегазового Университета
          </p>
          <p>Программное обеспечение вычислительной техники и автоматизированных систем</p>
          <p class="text-sm"><span class="pi pi-calendar mr-2"></span>2006-2009</p>
        </Panel>
      </template>
    </Card>
  </section>
</template>

<style></style>
