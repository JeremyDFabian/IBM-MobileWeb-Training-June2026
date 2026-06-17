<template>
  <div class="about-view">
    <div>
      <h1>About</h1>
      <p>This is a task management app built with Vue 3 and Vue Router.</p>
      <RouterLink to="/home">← Back to Tasks</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  max-width: 540px;
  margin: 48px auto;
  padding: 0 16px;
  font-family: Arial, sans-serif;
  text-align: left;
}

.about-view > div {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 18px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

h1 {
  font-size: 22px;
  font-weight: 700;
  color: #1b2a4a;
  margin: 0 0 12px;
  letter-spacing: normal;
}

p {
  font-size: 14px;
  color: #9ca3af;
  margin: 0 0 16px;
}

a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  .about-view > div {
    background: #1f2028;
    border-color: #2e303a;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  h1 { color: #f3f4f6; }
}
</style>
