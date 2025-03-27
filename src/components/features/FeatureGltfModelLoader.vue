<template>
  <div class="feature-gltf-model-loader">
    <UiLoader v-if="isLoading" class="feature-gltf-model-loader__spinner" />
    <Renderer v-else antialias resize alpha shadow ref="rendererRef">
      <Camera :position="{ x: cameraXPosition, y: 1.4, z: 1.3 }" />
      <Scene>
        <HemisphereLight
            color="#ffffff"
            groundColor="#707070"
            :intensity="1"
            :position="{ x: 0, y: 3, z: 0 }"
        />

        <DirectionalLight
            color="#ffffff"
            :intensity="2"
            :position="{ x: -1, y: 3, z: -1 }"
        />

        <PointLight
            color="#ffffff"
            :intensity="1"
            :position="{ x: 0.5, y: 1.7, z: 1 }"
        />

        <GltfModel :src="modelSrc" @load="onLoad" />
      </Scene>
    </Renderer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Camera, DirectionalLight, HemisphereLight, PointLight, Renderer, Scene, GltfModel } from "troisjs";
import { AnimationMixer, Clock, LoopOnce, LoopRepeat, sRGBEncoding } from "three";
import { useWindowSize } from "@vueuse/core";
import UiLoader from "@/components/ui/UiLoader.vue";

const rendererRef = ref(null);
const mixer = ref<AnimationMixer | null>(null);
const clock = ref(new Clock());
const actions = ref<{ [key: string]: any }>({});
const modelSrc = ref<string | null>(null);
const isLoading = ref<boolean>(true);

const db = new PouchDB("3d-models");

const { width } = useWindowSize();
const cameraXPosition = computed(() => (width.value < 992 ? 0 : 0.3));

const fetchModel = async () => {
  try {
    const doc = await db.get("gsusha-model");
    modelSrc.value = URL.createObjectURL(new Blob([doc.data], { type: "model/gltf-binary" }));
    console.log("✅ Модель загружена из IndexedDB");
  } catch (err) {
    console.log("⏳ Загружаем модель с сервера...");
    const response = await fetch("/gsusha.glb");
    const arrayBuffer = await response.arrayBuffer();

    await db.put({
      _id: "gsusha-model",
      data: new Uint8Array(arrayBuffer),
    });

    modelSrc.value = URL.createObjectURL(new Blob([arrayBuffer], { type: "model/gltf-binary" }));
    console.log("✅ Модель сохранена в IndexedDB");
  } finally {
    isLoading.value = false;
  }
};

const onLoad = (gltf: any) => {
  const model = gltf.scene;
  mixer.value = new AnimationMixer(model);

  const greetingClip = gltf.animations.find((clip: any) => clip.name === "greeting");
  const idleClip = gltf.animations.find((clip: any) => clip.name === "idle");

  if (!greetingClip || !idleClip) {
    console.warn("❌ Не найдены анимации greeting или idle");
    return;
  }

  actions.value.greeting = mixer.value.clipAction(greetingClip);
  actions.value.idle = mixer.value.clipAction(idleClip);

  actions.value.greeting.setLoop(LoopOnce, 1);
  actions.value.greeting.clampWhenFinished = true;
  actions.value.idle.setLoop(LoopRepeat);

  actions.value.greeting.play();
  actions.value.greeting.getMixer().addEventListener("finished", () => {
    actions.value.idle.play();
  });

  if (rendererRef.value) {
    const renderer = rendererRef.value.renderer;
    renderer.outputEncoding = sRGBEncoding;
    rendererRef.value.onBeforeRender(updateMixer);
  }
};

const updateMixer = () => {
  if (mixer.value) mixer.value.update(clock.value.getDelta());
};

onMounted(fetchModel);
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.feature-gltf-model-loader {
  width: 100%;
  height: 100%;

  &__spinner {
    left: 30%;

    @include media.max('lg') {
      left: calc(50% - 47px);
    }
  }
}
</style>
