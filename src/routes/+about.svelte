<script lang="ts">
  export let isDarkMode: boolean
  export let searchTerm: string
</script>

<div>
  <div class="flex items-center space-x-3 mb-6 sm:mb-8">
    <div class="w-3 h-3 bg-purple-600 rounded-full"></div>
    <h2 class="text-xl sm:text-2xl font-bold {isDarkMode ? 'text-white' : 'text-gray-900'}">About Me</h2>
  </div>
  <div class="space-y-6">
    <div class="prose max-w-none">
      <p class="text-base sm:text-lg {isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6">
        Hi there! I'm <strong>shiüo</strong>, a passionate full-stack developer and music enthusiast currently
        studying at KAIST. I love blending technology with creativity, whether it's through code or music.
      </p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-4 rounded-lg {isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}">
          <h3 class="font-semibold {isDarkMode ? 'text-white' : 'text-gray-900'} mb-2">
            🎓 Academic Journey
          </h3>
          <p class="text-sm {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
            From Hanyang University's Gifted Education Center to Korea Science Academy, now pursuing CS at KAIST.
          </p>
        </div>
        <div class="p-4 rounded-lg {isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}">
          <h3 class="font-semibold {isDarkMode ? 'text-white' : 'text-gray-900'} mb-2">💻 Tech Passion</h3>
          <p class="text-sm {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
            Specializing in Rust backend development and modern frontend frameworks like Svelte and NextJS.
          </p>
        </div>
        <div class="p-4 rounded-lg {isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}">
          <h3 class="font-semibold {isDarkMode ? 'text-white' : 'text-gray-900'} mb-2">
            🎸 Music & Creativity
          </h3>
          <p class="text-sm {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
            Guitarist in KAIST Hard Rock Band KANGJEOK and Vocaloid music producer, merging tech with artistry.
          </p>
        </div>
        <div class="p-4 rounded-lg {isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}">
          <h3 class="font-semibold {isDarkMode ? 'text-white' : 'text-gray-900'} mb-2">
            🚀 Entrepreneurship
          </h3>
          <p class="text-sm {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
            Co-founder of Sevenwiki, building innovative solutions that bridge technology and user experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>