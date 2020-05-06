<template>
    <nav
        class="relative menu_bar hidden w-full h-20 border-b-1 border-white tl:block bg-#F6F7FB"
        role="navigation"
        :aria-label="$t(`Main navigation`)"
    >
        <!--
        Currently submenu opens either due
        to hover or modern focus-within pseudo-class which
        is poorly supported in Edge. This might become
        a11y concern. If so, the most decent alternative
        would be to either use "a:focus ~ .submenu" or
        listen for focus & open menu with JS.
        -->
        <div class="h-full grid grid-flow-col items-center max-w-screen-dm mx-auto">
            <div class="nav-cell-wrapper w-full h-full text-#888">
                <NuxtLink
                    :to="localePath(`/model-images/`)"
                    class="relative h-full flex"
                >
                    <span class="m-auto">
                        {{ $t(`Models`) }}
                    </span>
                    <span class="arrow mantis absolute bottom-0 inset-x-0 my-0 mx-auto w-5 h-5 border-10 border-black-transparent" />
                </NuxtLink>
                <div class="submenu absolute w-full h-0 max-w-screen-dm inset-x-0 mx-auto invisible overflow-hidden border-l-1 border-r-1 border-white z-20">
                    <div class="models-submenu-container submenu-container grid w-full h-full border-b-1 border-white cursor-pointer">
                        <NuxtLink
                            class="images-area grid fill-in-effect-trigger"
                            :to="localePath(`/model-images/`)"
                        >
                            <div class="flex flex-col flex-wrap items-center justify-center bg-mantis border-r-1 border-white">
                                <div class="px-8">
                                    <h5 class="uppercase text-sm mb-10 font-bold">
                                        {{ $t(`Model image search`) }}
                                    </h5>
                                    <p class="text-sm mb-8">
                                        {{ $t(`See the coolest, sexiest and most diverse photos from the models in our community`) }}
                                    </p>
                                    <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                        <div class="relative">
                                            <span class="mr-2 font-medium uppercase">
                                                {{ $t(`Explore model images`) }}
                                            </span>
                                            <FaIcon
                                                :icon="faCaretRight"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col flex-wrap content-center justify-center px-8 border-r-1 border-white bg-#C8C9C9">
                                <div class="self-start mt-3 mb-5">
                                    <div class="text-3xl">
                                        <!-- @TODO: Should somehow fetch site meta on build & store it to be used site-wide -->
                                        {{ (1207366).toLocaleString() || siteMetadata.numberOfModelsregistered }}
                                    </div>
                                    <div class="text-sm">
                                        {{ $t(`Models in the community`) }}
                                    </div>
                                </div>
                                <div class="self-start">
                                    <div class="text-3xl">
                                        {{ (6300978).toLocaleString() || siteMetadata.numberOfPhotosUploaded }}
                                    </div>
                                    <div class="text-sm">
                                        {{ $t(`Model images`) }}
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-b-1 border-white"
                            :to="localePath(`/models/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-models_top_right.jpg"
                                width="382"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Search model profiles`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111"
                            :to="localePath(`/booking-trust/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-models_lower_right.jpg"
                                width="382"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Book models`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="nav-cell-wrapper w-full h-full text-#888">
                <NuxtLink
                    :to="localePath(`/castings/`)"
                    class="relative h-full flex"
                >
                    <span class="m-auto">
                        {{ $t(`Castings`) }}
                    </span>
                    <span class="arrow lightblue absolute bottom-0 inset-x-0 my-0 mx-auto w-5 h-5 border-10 border-black-transparent" />
                </NuxtLink>
                <div class="submenu absolute w-full h-0 max-w-screen-dm inset-x-0 mx-auto invisible overflow-hidden border-l-1 border-r-1 border-white z-20">
                    <div class="castings-submenu-container submenu-container grid w-full h-full border-b-1 border-white cursor-pointer">
                        <NuxtLink
                            class="jobs-area fill-in-effect-trigger flex flex-col flex-wrap items-center justify-center border-r-1 border-white bg-#4FC1E9"
                            :to="localePath(`/castings/`)"
                        >
                            <div class="px-8">
                                <h5 class="uppercase text-sm mb-10 font-bold">
                                    {{ $t(`Modeling jobs`) }}
                                </h5>
                                <p class="text-sm mb-8">
                                    {{ $t(`Find work as a model and apply to castings by approved members`) }}
                                </p>
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`See all castings`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="models-area fill-in-effect-trigger flex flex-col flex-wrap items-center justify-center border-r-1 border-white bg-#656D78"
                            :to="localePath(`/castings/quick-post/`)"
                        >
                            <div class="px-8">
                                <h5 class="uppercase text-sm mb-10 font-bold">
                                    {{ $t(`Looking for models?`) }}
                                </h5>
                                <p class="text-sm mb-8">
                                    {{ $t(`Post a casting for any shoot or project and contact all models who apply for free`) }}
                                </p>
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Post casting`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-b-1 border-white"
                            :to="localePath(`/castings/how-to-post-castings/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-castings_right.jpg"
                                width="326"
                                height="364"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`How to post castings`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#F0B12F"
                            :to="localePath(`/castings/models-who-got-the-job/`)"
                        >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Models who got the job!`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="nav-cell-wrapper w-full h-full text-#888">
                <NuxtLink
                    :to="localePath(`/rankings/`)"
                    class="relative h-full flex"
                >
                    <span class="m-auto">{{ $t(`Rankings`) }}</span>
                    <span class="arrow orange absolute bottom-0 inset-x-0 my-0 mx-auto w-5 h-5 border-10 border-black-transparent" />
                </NuxtLink>
                <div class="submenu absolute w-full h-0 max-w-screen-dm inset-x-0 mx-auto invisible overflow-hidden border-l-1 border-r-1 border-white z-20">
                    <div class="rankings-submenu-container submenu-container grid w-full h-full border-b-1 border-white">
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex flex-col flex-wrap items-center justify-center bg-#111 cursor-pointer border-r-1 border-white"
                            :to="localePath(`/rankings/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-rankings.jpg"
                                width="316"
                                height="364"
                                alt=""
                            >
                            <div class="relative">
                                <div class="px-8">
                                    <h5 class="uppercase text-sm mb-10 font-bold">
                                        {{ $t(`Where do you rank?`) }}
                                    </h5>
                                    <p class="text-sm mb-8">
                                        {{ $t(`See rankings for all model types who are listed in our community`) }}
                                    </p>
                                    <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                        <div class="relative">
                                            <span class="mr-2 font-medium uppercase">
                                                {{ $t(`See all rankings`) }}
                                            </span>
                                            <FaIcon
                                                :icon="faCaretRight"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <!-- TODO: Abstract this with fetch on build -->
                        <nav
                            class="rankings-nav py-8 px-10 border-r-1 border-white bg-#F0B12F"
                            :aria-label="$t(`Rankings navigation`)"
                        >
                            <div class="ranking-link-container">
                                <NuxtLink
                                    :to="localePath(`/`)"
                                    class="hover:text-#111"
                                >
                                    {{ $t(`Rankings`) }}
                                </NuxtLink>
                                <img
                                    class="ranking-link-image absolute top-0"
                                    src="@/assets/images/TheNavigation/nav-models_top_right.jpg"
                                    width="240"
                                    height="364"
                                    alt=""
                                >
                            </div>
                        </nav>
                        <div class="image-board relative w-full h-full bg-#F1F1F1" />
                    </div>
                </div>
            </div>
            <div class="nav-cell-wrapper w-full h-full text-#888">
                <NuxtLink
                    :to="localePath(`/photographers/`)"
                    class="relative h-full flex"
                >
                    <span class="m-auto">
                        {{ $t(`Industry Members`) }}
                    </span>
                    <span class="arrow camouflage absolute bottom-0 inset-x-0 my-0 mx-auto w-5 h-5 border-10 border-black-transparent" />
                </NuxtLink>
                <div class="submenu absolute w-full h-0 max-w-screen-dm inset-x-0 mx-auto invisible overflow-hidden border-l-1 border-r-1 border-white z-20">
                    <div class="members-submenu-container submenu-container grid w-full h-full border-b-1 border-white">
                        <div class="search-area grid bg-#8CC152">
                            <div class="flex flex-col flex-wrap items-center justify-center border-r-1 border-white">
                                <div class="px-8">
                                    <h5 class="uppercase text-sm mb-10 font-bold">
                                        {{ $t(`Search for industry members`) }}
                                    </h5>
                                    <p class="text-sm mb-8">
                                        {{ $t(`Find approved industry members close to you and around the world`) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-flow-col cursor-pointer">
                            <NuxtLink
                                class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-b-1 border-r-1 border-white"
                                :to="localePath(`/photographers/`)"
                            >
                                <img
                                    class="absolute w-full h-full object-cover"
                                    src="@/assets/images/TheNavigation/nav-photographers.jpg"
                                    width="316"
                                    height="182"
                                    alt=""
                                >
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Photographers`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink
                                class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-b-1 border-white"
                                :to="localePath(`/model-agencies/`)"
                            >
                                <img
                                    class="absolute w-full h-full object-cover"
                                    src="@/assets/images/TheNavigation/nav-agencies.jpg"
                                    width="316"
                                    height="192"
                                    alt=""
                                >
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Model agencies`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="grid grid-flow-col cursor-pointer">
                            <NuxtLink
                                class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-white"
                                :to="localePath(`/fashion-stylists/`)"
                            >
                                <img
                                    class="absolute w-full h-full object-cover"
                                    src="@/assets/images/TheNavigation/nav-stylists.jpg"
                                    width="211"
                                    height="182"
                                    alt=""
                                >
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Fashion Stylists`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink
                                class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-white"
                                :to="localePath(`/make-up-artists/`)"
                            >
                                <img
                                    class="absolute w-full h-full object-cover"
                                    src="@/assets/images/TheNavigation/nav-artists.jpg"
                                    width="211"
                                    height="182"
                                    alt=""
                                >
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Hair and Make Up Artists`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink
                                class="fill-in-effect-trigger relative flex items-center justify-center bg-#111"
                                :to="localePath(`/industry-professionals/`)"
                            >
                                <img
                                    class="absolute w-full h-full object-cover"
                                    src="@/assets/images/TheNavigation/nav-indpros.jpg"
                                    width="211"
                                    height="182"
                                    alt=""
                                >
                                <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                    <div class="relative">
                                        <span class="mr-2 font-medium uppercase">
                                            {{ $t(`Industry professionals`) }}
                                        </span>
                                        <FaIcon
                                            :icon="faCaretRight"
                                        />
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-cell-wrapper w-full h-full text-#888">
                <NuxtLink
                    :to="localePath(`/model-style/`)"
                    class="relative h-full flex"
                >
                    <span class="m-auto">{{ $t(`More`) }}</span>
                    <span class="arrow orange absolute bottom-0 inset-x-0 my-0 mx-auto w-5 h-5 border-10 border-black-transparent" />
                </NuxtLink>
                <div class="submenu absolute w-full h-0 max-w-screen-dm inset-x-0 mx-auto invisible overflow-hidden border-l-1 border-r-1 border-white z-20">
                    <div class="more-submenu-container submenu-container grid grid-rows-2 grid-cols-4 w-full h-full cursor-pointer border-b-1 border-white">
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center border-r-1 border-b-1 border-white bg-#4FC1E9"
                            :to="localePath(`/testimonials/`)"
                        >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Success stories`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-b-1 border-white"
                            :to="localePath(`/model-style/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-modelstyle.jpg"
                                width="240"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`modelStyle`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-b-1 border-white"
                            :to="localePath(`/my-news/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-mynews.jpg"
                                width="240"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`myNews`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <a
                            class="fill-in-effect-trigger relative flex items-center justify-center border-b-1 border-white bg-#F0B12F"
                            href="/blog/"
                            target="_blank"
                        >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Blog`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </a>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-mantis border-r-1 border-white"
                            :to="localePath(`/modeling-advice/`)"
                        >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Modeling advice`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-white"
                            :to="localePath(`/fresh-faces/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-freshfaces.jpg"
                                width="240"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Fresh Faces`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-r-1 border-white"
                            :to="localePath(`/apps/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-apps.jpg"
                                width="240"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`Apps`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            class="fill-in-effect-trigger relative flex items-center justify-center bg-#111 border-white"
                            :to="localePath(`/about/`)"
                        >
                            <img
                                class="absolute w-full h-full object-cover"
                                src="@/assets/images/TheNavigation/nav-about.jpg"
                                width="240"
                                height="182"
                                alt=""
                            >
                            <div class="fill-in-effect relative inline-flex items-center overflow-hidden p-2 border-1 border-white text-sm">
                                <div class="relative">
                                    <span class="mr-2 font-medium uppercase">
                                        {{ $t(`About us`) }}
                                    </span>
                                    <FaIcon
                                        :icon="faCaretRight"
                                    />
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- CSS only overlay -->
            <div class="main-navigation-overlay absolute invisible opacity-0 bg-black w-full h-screen z-10 left-0" />
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
    computed: {
        faCaretRight (): object {
            return faCaretRight
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/partials/_colors";

// fill-in-effect-trigger && fill-in-effect might be
// the same element or fill-in-effect might be a child
// (not necessarily direct) of fill-in-effect-trigger.
.fill-in-effect-trigger {
    .fill-in-effect, &.fill-in-effect {
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 105%;
            border-bottom: 1px solid $white;
            height: 100%;
            opacity: 0;
            background-color: #F1F1F1;
            transform: rotate(-45deg)
                       translateY(-3em);
            transform-origin: 0% 100%;
            transition: transform .3s cubic-bezier(.2, 1, .3, 1),
                        opacity .3s cubic-bezier(.2, 1, .3, 1),
                        background-color .3s cubic-bezier(.2, 1, .3, 1);
        }
    }
    &:hover .fill-in-effect, &:hover.fill-in-effect, &:focus .fill-in-effect, &:focus.fill-in-effect {
        color: $black;
        &:before {
            opacity: 1;
            transform: rotate(0deg);
        }
    }
}

.nav-cell-wrapper {
    & > .submenu {
        // More effective & intended than animating all transitions
        transition: height .6s cubic-bezier(0, 1, .5, 1) .3s,
                    visibility .6s cubic-bezier(0, 1, .5, 1);
        & > .submenu-container {
            color: $white-transparent;
            .fill-in-effect {
                visibility: hidden;
            }
        }

    }

    & ~ .main-navigation-overlay {
        transition: opacity .5s .3s,
                    visibility .5s .3s;
        top: 100%; // So it's below the menu
    }

    &:hover, &:focus-within {
        color: $black;
        & .arrow {
            display: block;
            &.mantis {
                border-bottom-color: $mantis;
            }
            &.lightblue {
                border-bottom-color: #4FC1E9;
            }
            &.orange {
                border-bottom-color: #F0B12F;
            }
            &.camouflage {
                border-bottom-color: #4D494A;
            }
        }
        & > .submenu { // Show submenu
            visibility: visible;
            height: 364px;
            & > .submenu-container {
                color: #FFF;
                .fill-in-effect {
                    visibility: visible;
                }
            }
        }
        & ~ .main-navigation-overlay { // Show overlay
            opacity: .7;
            visibility: visible;
        }
    }
}

.models-submenu-container {
    grid-template: 'images .' 1fr
                   'images .' 1fr
                   / 60% 1fr;
    .images-area {
        grid-template-columns: 55% 1fr;
        grid-area: images;
    }
}

.castings-submenu-container {
    grid-template: 'jobs models .' 1fr
                   'jobs models .' 1fr
                   / 1fr 1fr 1fr;
    .jobs-area {
        grid-area: jobs;
    }
    .models-area {
        grid-area: models;
    }
}

.rankings-submenu-container {
    grid-template-columns: 30% 1fr 240px;
    .ranking-link-container {
        .ranking-link-image {
            right: 240px;
            transition: right .4s;
            z-index: -10; // Hides image while in parent
        }
        &:hover, &:focus-within {
            .ranking-link-image {
                right: 0;
            }
        }
    }
    .image-board {
        z-index: -20; // Is placed under the image
    }
}

.members-submenu-container {
    grid-template: 'search .' 1fr
                   'search .' 1fr
                   / 34% 1fr;
    .search-area {
        grid-area: search;
    }
}
</style>
