<script lang="ts">
  import { experiences } from '$lib/data/experiences';
  import { MapPin } from '@lucide/svelte';
</script>

<div>
  <div class="mb-6 flex items-center space-x-3 sm:mb-8">
    <div class="h-3 w-3 rounded-full bg-purple-600"></div>
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Experience</h2>
  </div>
  <div class="space-y-6">
    {#each experiences as exp, index (index)}
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-r from-white
          to-gray-50 p-6 transition-all duration-300 hover:scale-[1.02] hover:from-gray-50 hover:to-gray-100 hover:shadow-xl
          dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 dark:hover:shadow-xl"
      >
        <div class="flex flex-col space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
          <div class="mx-auto flex-shrink-0 sm:mx-0">
            <div
              class="h-16 w-16 bg-gradient-to-br {exp.bgColor} flex items-center justify-center rounded-xl text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              {@html exp.logo}
            </div>
          </div>
          <div class="flex-1 text-center sm:text-left">
            <div class="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div class="flex-1">
                <div class="mb-2 flex items-center justify-center space-x-2 sm:justify-start">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  {#if exp.isActive}
                    <div class="flex items-center space-x-1">
                      <div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                      <span class="text-xs font-medium text-green-600 dark:text-green-400">Active</span>
                    </div>
                  {/if}
                </div>
                <div class="mb-2 flex items-center justify-center space-x-2 sm:justify-start">
                  <p class="font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
                  <span
                    class="rounded-full px-2 py-1 text-xs font-medium
                      {exp.type === 'Startup'
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                      : exp.type === 'Music'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}"
                  >
                    {exp.type}
                  </span>
                </div>
                <p
                  class="mb-3 flex items-center justify-center text-sm text-gray-500 sm:justify-start dark:text-gray-400"
                >
                  <MapPin class="mr-1 h-3 w-3" />
                  {exp.location}
                </p>
                <p class="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
                <div class="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {#each exp.skills as skill, skillIndex}
                    <span
                      class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-transform duration-200 hover:scale-105 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  {/each}
                </div>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right">
                <p class="mb-0 text-sm font-bold text-gray-900 dark:text-gray-300">{exp.period}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br opacity-5 {exp.bgColor}"
        ></div>
      </div>
    {/each}
  </div>
</div>
