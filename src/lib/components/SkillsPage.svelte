<script lang="ts">
  import { skills } from '$lib/data/skills';
</script>

<div>
  <div class="mb-6 flex items-center space-x-3 sm:mb-8">
    <div class="h-3 w-3 rounded-full bg-purple-600"></div>
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Skills</h2>
  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    {#each skills as skill, index (index)}
      <div
        class="flex flex-col space-y-3 rounded-xl border border-gray-200 bg-gradient-to-r from-white to-gray-50
          p-6 transition-all duration-300
          hover:scale-[1.02] hover:from-gray-50 hover:to-gray-100 hover:shadow-xl sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4
          dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 dark:hover:shadow-xl"
      >
        <div
          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl sm:mx-0 {skill.color}"
        >
          {skill.icon}
        </div>
        <div class="flex-1 text-center sm:text-left">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {skill.title}
          </h3>
          <p class="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {skill.description}
          </p>
          <div class="flex flex-wrap justify-center gap-2 sm:justify-start">
            {#each skill.tags as tag, tagIndex}
              <span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
