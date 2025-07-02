<script lang="ts">
  import { interests } from '$lib/data/interests';
</script>

<div>
  <div class="mb-6 flex items-center space-x-3 sm:mb-8">
    <div class="h-3 w-3 rounded-full bg-purple-600"></div>
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Interests & Hobbies</h2>
  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    {#each interests as interest, index (index)}
      <div class="flex flex-col space-y-3 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4">
        <div
          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl sm:mx-0 {interest.color}"
        >
          {interest.icon}
        </div>
        <div class="flex-1 text-center sm:text-left">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {interest.title}
          </h3>
          <p class="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {interest.description}
          </p>
          <div class="flex flex-wrap justify-center gap-2 sm:justify-start">
            {#each interest.tags as tag, i (i)}
              <span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
