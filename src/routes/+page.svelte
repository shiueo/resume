<script lang="ts">
  import { onMount } from 'svelte';
  import AboutPage from '$lib/components/AboutPage.svelte';
  import EducationPage from '$lib/components/EducationPage.svelte';
  import ExperiencePage from '$lib/components/ExperiencePage.svelte';
  import SkillsPage from '$lib/components/SkillsPage.svelte';
  import ProjectsPage from '$lib/components/ProjectsPage.svelte';
  import InterestsPage from '$lib/components/InterestsPage.svelte';
  import { ChevronLeft, ChevronRight, Moon, Sun, Download, X, Menu } from '@lucide/svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { pages } from '$lib/data/pages';

  let currentPage = 0;
  let isSidebarOpen = false;
  let isDarkMode = false;

  // Initialize dark mode based on localStorage or system preference
  onMount(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      isDarkMode = stored === 'true';
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      isDarkMode = mediaQuery.matches;
    }
    updateDarkModeClass();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      isDarkMode = e.matches;
      updateDarkModeClass();
      localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    });
  });

  function updateDarkModeClass() {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    updateDarkModeClass();
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }

  function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
  }

  function prevPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
  }

  function goToPage(index: number) {
    currentPage = index;
    isSidebarOpen = false;
  }

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function handleOverlayClick() {
    isSidebarOpen = false;
  }
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full overflow-hidden bg-white dark:bg-gray-800">
    <div
      class="flex min-h-[calc(100vh-1rem)] flex-col sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] lg:flex-row"
    >
      <!-- Mobile Header -->
      <div
        class="border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 p-4 lg:hidden dark:border-gray-600 dark:bg-gray-800 dark:bg-none"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <img src="/shiueo_letter_pfp.png" alt="shiüo" class="h-10 w-10 rounded-full" />
            <div>
              <h1 class="text-lg font-bold text-gray-900 dark:text-white">shiüo</h1>
              <p class="text-sm text-purple-600">Full-Stack Developer</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button
              class="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              on:click={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {#if isDarkMode}
                <Sun class="h-4 w-4" />
              {:else}
                <Moon class="h-4 w-4" />
              {/if}
            </button>
            <button
              class="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              on:click={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              {#if isSidebarOpen}
                <X class="h-4 w-4" />
              {:else}
                <Menu class="h-4 w-4" />
              {/if}
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <Sidebar {isSidebarOpen} {toggleSidebar} />

      <!-- Overlay for sidebar on mobile -->
      {#if isSidebarOpen}
        <button
          type="button"
          class="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs lg:hidden"
          aria-label="Close sidebar overlay"
          on:click={handleOverlayClick}
        ></button>
      {/if}

      <!-- Main Content Area -->
      <div class="flex-1 bg-white p-4 sm:p-6 lg:p-8 dark:bg-gray-800">
        <!-- Top Bar -->
        <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex space-x-1 overflow-x-auto pb-2 sm:pb-0">
            {#each pages as page, index}
              <button
                class="flex items-center space-x-2 rounded-md px-2 py-2 text-xs whitespace-nowrap transition-colors sm:px-3 sm:text-sm
        {currentPage === index
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'}"
                on:click={() => goToPage(index)}
              >
                <span class="text-xs sm:text-sm">{page.icon}</span>
                <span class="hidden font-medium sm:inline">{page.title}</span>
              </button>
            {/each}
          </div>

          <!-- Page Navigation and Dark Mode Toggle -->
          <div class="flex items-center justify-end space-x-2">
            <button
              class="rounded-md p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              on:click={prevPage}
              aria-label="Previous Page"
            >
              <ChevronLeft class="h-4 w-4" />
            </button>
            <span class="px-2 text-sm text-gray-500 dark:text-gray-400">
              {currentPage + 1} / {pages.length}
            </span>
            <button
              class="rounded-md p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              on:click={nextPage}
              aria-label="Next Page"
            >
              <ChevronRight class="h-4 w-4" />
            </button>

            <div class="hidden items-center space-x-2 lg:flex">
              <button
                class="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                on:click={toggleDarkMode}
                aria-label="Toggle Dark Mode"
              >
                {#if isDarkMode}
                  <Sun class="h-4 w-4" />
                {:else}
                  <Moon class="h-4 w-4" />
                {/if}
              </button>
              <button
                class="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Download class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Page Content -->
        <div class="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {#if currentPage === 0}
            <AboutPage />
          {:else if currentPage === 1}
            <EducationPage />
          {:else if currentPage === 2}
            <ExperiencePage />
          {:else if currentPage === 3}
            <SkillsPage />
          {:else if currentPage === 4}
            <ProjectsPage />
          {:else if currentPage === 5}
            <InterestsPage />
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
