<script lang="ts">
  // No additional script needed for this component
  // All functionality is handled within the component itself
</script>

<div>
  <div class="mb-6 flex items-center space-x-3 sm:mb-8">
    <div class="h-3 w-3 rounded-full bg-purple-600"></div>
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">About Me</h2>
  </div>

  <div class="space-y-8">
    <div class="prose max-w-none">
      <p class="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
        Hi there! I'm <strong>shiüo</strong>, a passionate full-stack developer and music enthusiast currently studying
        at KAIST. I love blending technology with creativity, whether it's through code or music.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <!-- Academic Journey -->
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50
        to-purple-50 p-6 transition-all duration-300 hover:scale-105 hover:from-blue-100 hover:to-purple-100
        hover:shadow-lg dark:border-gray-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700
        dark:hover:to-gray-600"
      >
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-2xl"
            >
              🎓
            </div>
          </div>
          <div class="flex-1">
            <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Academic Journey</h3>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              From Hanyang University's Gifted Education Center to Korea Science Academy, now pursuing CS at KAIST.
            </p>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20"
        ></div>
      </div>

      <!-- Tech Passion -->
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-green-50
        to-emerald-50 p-6 transition-all duration-300 hover:scale-105 hover:from-green-100 hover:to-emerald-100
        hover:shadow-lg dark:border-gray-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700
        dark:hover:to-gray-600"
      >
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-2xl"
            >
              💻
            </div>
          </div>
          <div class="flex-1">
            <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Tech Passion</h3>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Specializing in Rust backend development and modern frontend frameworks like Svelte and NextJS.
            </p>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20"
        ></div>
      </div>

      <!-- Music & Creativity -->
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-red-50
        to-pink-50 p-6 transition-all duration-300 hover:scale-105 hover:from-red-100 hover:to-pink-100
        hover:shadow-lg dark:border-gray-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700
        dark:hover:to-gray-600"
      >
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-pink-600 text-2xl"
            >
              🎸
            </div>
          </div>
          <div class="flex-1">
            <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Music & Creativity</h3>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Guitarist in KAIST Hard Rock Band KANGJEOK and Vocaloid music producer, merging tech with artistry.
            </p>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-red-400/20 to-pink-600/20"
        ></div>
      </div>

      <!-- Entrepreneurship -->
      <div
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50
        to-yellow-50 p-6 transition-all duration-300 hover:scale-105 hover:from-orange-100 hover:to-yellow-100
        hover:shadow-lg dark:border-gray-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700
        dark:hover:to-gray-600"
      >
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-600 text-2xl"
            >
              🚀
            </div>
          </div>
          <div class="flex-1">
            <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Entrepreneurship</h3>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Co-founder of Sevenwiki, building innovative solutions that bridge technology and user experience.
            </p>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-orange-400/20 to-yellow-600/20"
        ></div>
      </div>
    </div>
  </div>
</div>
