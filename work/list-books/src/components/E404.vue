<template>
  <div class="alert alert-secondary m-5">
    <h2>ОШИБКА: 404</h2>
    <h1>Страница не найдена</h1>
    <router-link :to="{ name: 'library' }">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {};
</script>