<script setup>
import { ref } from "vue";
import { useTranslator } from "../composables/useTranslator";

const { phrase, search } = useTranslator();

let text = ref();

</script>

<template>
    <div>
        <input v-model="text" @change="search(text)" type="text" placeholder="Enter Sentence" class="w-full mt-10 rounded-3xl py-4 text-center">
    </div>
    <img src="../assets/yoda2.png" alt="yoda" class="absolute top-64 left-72 w-1/3">
     <div class="bg-white text-green-500 w-64 h-40 absolute top-64 right-96 p-6 rounded-full">
            <p class="italic font-light text-2xl">{{phrase}}</p>
        </div>
</template>