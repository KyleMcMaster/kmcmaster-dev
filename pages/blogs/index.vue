<template>
  <div class="flex justify-center">
    <div class="container text-center pt-3 px-4">
      <h1 class="font-bold text-4xl py-1">Blogs:</h1>
      <ul>
        <li>
          <div class="flex justify-center py-3">
            <NuxtLink to="/blogs/2021-year-in-review">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="flex justify-center px-2 py-2">
                  <img
                    class="justify-center"
                    src="/2021_gh_wrap_og_image.png"
                    alt="KyleMcMaster's 2021 GitHubWrap"
                  />
                </div>
                <div class="py-2">
                  <div class="font-bold text-xl mb-2">2021 Year in Review</div>
                  <p>01/06/2022</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
img {
  height: 50%;
  width: 50%;
}
</style>