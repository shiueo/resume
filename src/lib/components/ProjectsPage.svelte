<script lang="ts">
  import { projects } from '$lib/data/projects';
</script>

<div>
  <div class="mb-6 flex items-center space-x-3 sm:mb-8">
    <div class="h-3 w-3 rounded-full bg-purple-600"></div>
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Projects</h2>
  </div>

  <div class="space-y-6">
    {#each projects as project, index (index)}
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-r from-white
          to-gray-50 p-6 transition-all duration-300 hover:scale-[1.02] hover:from-gray-50 hover:to-gray-100 hover:shadow-xl
          dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 dark:hover:shadow-xl"
      >
        <div class="flex flex-col space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
          <div class="mx-auto flex-shrink-0 sm:mx-0">
            <div
              class="h-4 w-4 rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-125 {project.color}"
            ></div>
          </div>

          <div class="flex-1 text-center sm:text-left">
            <div class="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div class="flex-1">
                <div class="mb-2 flex items-center justify-center space-x-2 sm:justify-start">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  <span
                    class="rounded-full px-2 py-1 text-xs font-medium
                      {project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : project.status === 'In Development'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}"
                  >
                    {project.status}
                  </span>
                </div>

                <p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div class="mb-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {#each project.tech as tech, techIndex}
                    <span
                      class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-transform duration-200 hover:scale-105 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>

                <div class="flex items-center justify-center space-x-4 sm:justify-start">
                  {#if project.github}
                    <a
                      href={project.github}
                      class="text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </a>
                  {/if}
                  {#if project.demo}
                    <a
                      href={project.demo}
                      class="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
                  {/if}
                </div>
              </div>

              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right">
                <p class="mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">{project.year}</p>
                {#if project.progress !== undefined}
                  <div class="w-full sm:w-24">
                    <div class="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        class="h-2 rounded-full bg-gradient-to-r {project.color} transition-all duration-500"
                        style="width: {project.progress}%"
                      ></div>
                    </div>
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{project.progress}%</p>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br opacity-5 {project.color}"
        ></div>
      </div>
    {/each}
  </div>
</div>
