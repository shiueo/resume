<script lang="ts">
  import { Mail, Github, MapPin, Music, X } from '@lucide/svelte';

  export let isSidebarOpen: boolean;
  export let toggleSidebar: () => void;
</script>

<div
  class="
    fixed top-0 left-0 z-50 h-full overflow-y-auto border-r border-gray-200 bg-gradient-to-b from-purple-50
    to-blue-50
    p-6 transition-transform duration-300 ease-in-out sm:w-96 lg:static
     lg:z-auto
     lg:h-auto lg:w-80 lg:translate-x-0
     lg:p-8
    dark:border-gray-700 dark:bg-gray-900 dark:bg-none
  "
  class:translate-x-0={isSidebarOpen}
  class:-translate-x-full={!isSidebarOpen}
>
  <!-- Mobile Close Button -->
  <div class="mb-4 flex justify-end lg:hidden">
    <button
      class="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
      on:click={toggleSidebar}
      aria-label="Close sidebar"
    >
      <X class="h-4 w-4" />
    </button>
  </div>

  <!-- Profile Section -->
  <div class="mb-8 text-center">
    <img src="/shiueo_letter_pfp.png" alt="shiüo" class="mx-auto mb-4 h-20 w-20 rounded-full object-cover" />
    <h1 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">shiüo</h1>
    <p class="mb-2 text-sm font-medium text-purple-600">@shiueo</p>
    <p class="font-medium text-purple-600 dark:text-gray-300">Full-Stack Developer</p>
    <div class="mt-2">
      <span class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
        <div class="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
        KAIST Student
      </span>
    </div>
  </div>

  <!-- Quote Section -->
  <div class="mb-8">
    <blockquote class="text-sm leading-relaxed text-gray-600 italic dark:text-gray-300">
      "Blending music with technology, one line of code at a time."
    </blockquote>
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">shiüo</p>
  </div>

  <!-- Contact Info -->
  <div class="mb-8 space-y-4">
    <div class="flex items-start space-x-3">
      <Mail class="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
      <div class="min-w-0">
        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Email</p>
        <p class="text-sm break-all text-gray-700 dark:text-gray-200">shiueo.csh@gmail.com</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <Github class="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
      <div>
        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">GitHub</p>
        <p class="text-sm text-gray-700 dark:text-gray-200">@shiueo</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <MapPin class="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
      <div>
        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Location</p>
        <p class="text-sm text-gray-700 dark:text-gray-200">Daejeon, South Korea</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <Music class="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
      <div>
        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Music</p>
        <p class="text-sm text-gray-700 dark:text-gray-200">Vocaloid Producer</p>
      </div>
    </div>
  </div>

  <!-- Tech Stack -->
  <div class="mb-8">
    <h3 class="mb-4 text-sm font-medium text-gray-900 dark:text-white">Tech Stack</h3>
    <div class="grid grid-cols-2 gap-3">
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
          <span class="text-xs text-white">🦀</span>
        </div>
        <span class="text-xs text-gray-700 dark:text-gray-300">Rust</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
          <span class="text-xs text-white">🐍</span>
        </div>
        <span class="text-xs text-gray-700 dark:text-gray-300">Python</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-black">
          <span class="text-xs text-white">⚡</span>
        </div>
        <span class="text-xs text-gray-700 dark:text-gray-300">NextJS</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
          <span class="text-xs text-white">🔥</span>
        </div>
        <span class="text-xs text-gray-700 dark:text-gray-300">Svelte</span>
      </div>
    </div>
  </div>

  <!-- Languages -->
  <div>
    <h3 class="mb-4 text-sm font-medium text-gray-900 dark:text-white">Languages</h3>
    <div class="space-y-3">
      {#each [{ lang: 'Korean', level: 'Native', color: 'bg-blue-500', flag: '🇰🇷' }, { lang: 'English', level: 'Fluent', color: 'bg-red-500', flag: '🇺🇸' }, { lang: 'Japanese', level: 'Intermediate', color: 'bg-red-600', flag: '🇯🇵' }] as langItem}
        <div class="flex items-center space-x-3">
          <div class="flex h-4 w-6 items-center justify-center rounded-sm text-xs {langItem.color}">
            {langItem.flag}
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-800 dark:text-white">{langItem.lang}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{langItem.level}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
