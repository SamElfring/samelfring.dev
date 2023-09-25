<template>
    <div id="contact">
        <p class="section-title">Contact</p>

        <form
            @submit.prevent="sendMail"
            class="max-w-lg"
        >
            <div class="form-group">
                <label for="name">Volledige naam</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="voorbeeld@mail.com"
                    required
                />
            </div>

            <div class="form-group">
                <label for="message">Bericht</label>
                <textarea
                    name="message"
                    id="message"
                    rows="10"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                class="py-2 px-4 border-2 border-slate-700 rounded-lg hover:border-blue-700 bg-gradient-to-r from-slate-900 to-slate-800"
            >
                Verstuur
            </button>
        </form>
    </div>
</template>

<script setup>
import emailjs from "emailjs-com";

const sendMail = (e) => {
    emailjs.sendForm("service_8rad7a7", "template_bwhqzqj", e.target, "vs9bmuVjqREpH4nml").then(
        () => {
            alert("Bericht verstuurd!");
            e.target.reset();
        },
        (error) => {
            alert("Bericht niet verstuurd:", error);
        }
    );
};
</script>

<style scoped lang="postcss">
.form-group {
    @apply flex flex-col mb-4;
}

.form-group label {
    @apply mb-2 font-semibold text-slate-400;
}

.form-group input,
.form-group textarea {
    @apply p-2 bg-slate-700 border-slate-700 border outline-none focus:border-slate-400;
}
</style>
