<script lang="ts">
    import type { Page } from '$lib/data/pages';
  import { Mail, Github, MapPin, Music, X } from '@lucide/svelte';

  export let isDarkMode: boolean;
  export let isSidebarOpen: boolean;
  export let toggleSidebar: () => void;
  export let goToPage: (index: number) => void;
  export let pages: Page[];
  export let currentPage: number;
</script>

<div
  class="
    {isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    fixed top-0 left-0 h-full w-80 sm:w-96 lg:static lg:h-auto lg:w-80 lg:translate-x-0
    {isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-b from-purple-50 to-blue-50'}
    z-50 overflow-y-auto p-6 transition-transform duration-300 ease-in-out lg:z-auto lg:p-8
  "
>
  <!-- Mobile Close Button -->
  <div class="mb-4 flex justify-end lg:hidden">
    <button
      class="rounded-md p-2 {isDarkMode ? 'text-gray-300 hover:bg-gray-600 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
      on:click={toggleSidebar}
      aria-label="Close sidebar"
    >
      <X class="h-4 w-4" />
    </button>
  </div>

  <!-- Profile Section -->
  <div class="mb-8 text-center">
    <img src="/shiueo_letter_pfp.png" alt="shiüo" class="mx-auto mb-4 h-20 w-20 rounded-full object-cover" />
    <h1 class="text-2xl font-bold {isDarkMode ? 'text-white' : 'text-gray-900'} mb-1">shiüo</h1>
    <p class="mb-2 text-sm font-medium text-purple-600">@shiueo</p>
    <p class="{isDarkMode ? 'text-gray-300' : 'text-purple-600'} font-medium">Full-Stack Developer</p>
    <div class="mt-2">
      <span
        class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
      >
        <div class="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
        KAIST Student
      </span>
    </div>
  </div>

  <!-- Quote Section -->
  <div class="mb-8">
    <blockquote class="text-sm {isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed italic">
      "Blending music with technology, one line of code at a time."
    </blockquote>
    <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2">shiüo</p>
  </div>

  <!-- Contact Info -->
  <div class="mb-8 space-y-4">
    <div class="flex items-start space-x-3">
      <Mail class="h-4 w-4 {isDarkMode ? 'text-gray-400' : 'text-gray-400'} mt-1 flex-shrink-0" />
      <div class="min-w-0">
        <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium">Email</p>
        <p class="text-sm {isDarkMode ? 'text-gray-200' : 'text-gray-700'} break-all">shiueo.csh@gmail.com</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <Github class="h-4 w-4 {isDarkMode ? 'text-gray-400' : 'text-gray-400'} mt-1 flex-shrink-0" />
      <div>
        <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium">GitHub</p>
        <p class="text-sm {isDarkMode ? 'text-gray-200' : 'text-gray-700'}">@shiueo</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <MapPin class="h-4 w-4 {isDarkMode ? 'text-gray-400' : 'text-gray-400'} mt-1 flex-shrink-0" />
      <div>
        <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium">Location</p>
        <p class="text-sm {isDarkMode ? 'text-gray-200' : 'text-gray-700'}">Daejeon, South Korea</p>
      </div>
    </div>
    <div class="flex items-start space-x-3">
      <Music class="h-4 w-4 {isDarkMode ? 'text-gray-400' : 'text-gray-400'} mt-1 flex-shrink-0" />
      <div>
        <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium">Music</p>
        <p class="text-sm {isDarkMode ? 'text-gray-200' : 'text-gray-700'}">Vocaloid Producer</p>
      </div>
    </div>
  </div>

  <!-- Tech Stack -->
  <div class="mb-8">
    <h3 class="text-sm font-medium {isDarkMode ? 'text-white' : 'text-gray-900'} mb-4">Tech Stack</h3>
    <div class="grid grid-cols-2 gap-3">
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
          <span class="text-xs text-white">🦀</span>
        </div>
        <span class="text-xs {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">Rust</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
          <span class="text-xs text-white">🐍</span>
        </div>
        <span class="text-xs {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">Python</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-black">
          <span class="text-xs text-white">⚡</span>
        </div>
        <span class="text-xs {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">NextJS</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
          <span class="text-xs text-white">🔥</span>
        </div>
        <span class="text-xs {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">Svelte</span>
      </div>
    </div>
  </div>

  <!-- Languages -->
  <div>
    <h3 class="text-sm font-medium {isDarkMode ? 'text-white' : 'text-gray-900'} mb-4">Languages</h3>
    <div class="space-y-3">
      {#each [
        { lang: 'Korean', level: 'Native', color: 'bg-blue-500', flag: '🇰🇷' },
        { lang: 'English', level: 'Fluent', color: 'bg-red-500', flag: '🇺🇸' },
        { lang: 'Japanese', level: 'Intermediate', color: 'bg-red-600', flag: '🇯🇵' }
      ] as langItem}
        <div class="flex items-center space-x-3">
          <div class="h-4 w-6 {langItem.color} flex items-center justify-center rounded-sm text-xs">
            {langItem.flag}
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium {isDarkMode ? 'text-white' : 'text-gray-800'}">{langItem.lang}</p>
            <p class="text-xs {isDarkMode ? 'text-gray-400' : 'text-gray-500'}">{langItem.level}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
