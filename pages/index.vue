<template lang="">
    <Main>
        <HeroSection id="hero" />
        <PartnersSection id="partners" />
        <AboutSection id="about" />
        <StatsSection id="stats" />
        <!-- <UpcomingEventSection id="events" /> -->
        <GallerySection id="gallery" />
        <!-- <ContactSection id="contact" /> -->
    </Main>
</template>
<script setup>
import Main from "@/components/layout/Main.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import StatsSection from "@/components/sections/StatsSection.vue";
import PartnersSection from "@/components/sections/PartnersSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import UpcomingEventSection from "@/components/sections/UpcomingEventSection.vue";
import GallerySection from "@/components/sections/GallerySection.vue";
</script>