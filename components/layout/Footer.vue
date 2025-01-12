<template>
  <UContainer class="py-8 border-t">
    <div class="flex justify-between items-center">
      <div class="text-green-500">
        © 2024 Il tuo sito. Tutti i diritti riservati.
      </div>
      <nav>
        <ul class="flex gap-4">
          <li>
            <UButton
              variant="ghost"
              to="/"
              color="gray"
            >
              Privacy
            </UButton>
          </li>
          <li>
            <UButton
              variant="ghost"
              to="/"
              color="gray"
            >
              Termini
            </UButton>
          </li>
        </ul>
      </nav>
    </div>
  </UContainer>
</template>
<script setup>
</script>
