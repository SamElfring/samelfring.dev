<template>
    <Header />

    <div class="flex flex-col justify-center items-center h-screen">
        <img
            src="/img/404.webp"
            alt="404"
        />

        <h1 class="text-5xl text-slate-200 text-center">{{ $t("main.not_found").toUpperCase() }}</h1>

        <NuxtLink
            to="/"
            class="mt-6 px-4 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-500"
        >
            {{ $t("main.go_home") }}
        </NuxtLink>
    </div>
</template>
