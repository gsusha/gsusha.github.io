<template>
  <Renderer ref="rendererRef" antialias resize alpha shadow>
    <Camera :position="{ x: cameraXPosition, y: 1.4, z: 1.3 }" />
    <Scene>
      <HemisphereLight
          color="#ffffff"
          groundColor="#707070"
          :intensity="1"
          :position="{ x: 0, y: 3, z: 0 }" />

      <DirectionalLight
          color="#ffffff"
          :intensity="2"
          :position="{ x: -1, y: 3, z: -1 }"
          cast-shadow
          :shadow-camera-top="5"
          :shadow-camera-bottom="-5"
          :shadow-camera-left="-5"
          :shadow-camera-right="5"
          :shadow-camera-near="0.1"
          :shadow-camera-far="15"
          :shadow-radius="4"
          :shadow-mapSize="{ width: 1024, height: 1024 }"
      />

      <PointLight
          color="#ffffff"
          :intensity="1"
          :position="{ x: 0.5, y: 1.7, z: 1 }" />

      <GltfModel
          src="/gsusha.glb"
          cast-shadow
          receive-shadow
          @load="onLoad"
      />
    </Scene>
  </Renderer>
</template>

<script setup lang="ts">
import {
  Camera,
  DirectionalLight,
  HemisphereLight,
  Renderer,
  Scene,
  GltfModel, PointLight
} from "troisjs";
import {computed, ref} from "vue";
import { AnimationMixer, Clock, LoopOnce, LoopRepeat, sRGBEncoding } from "three";
import {useWindowSize} from "@vueuse/core";

const rendererRef = ref(null);
const mixer = ref<AnimationMixer | null>(null);
const clock = ref(new Clock());
const actions = ref<{ [key: string]: any }>({});

const { width } = useWindowSize();

const cameraXPosition = computed(() => {
  return width.value < 992 ? 0 : 0.3;
})

const onLoad = (gltf: any) => {
  const model = gltf.scene;

  mixer.value = new AnimationMixer(model);

  const greetingClip = gltf.animations.find((clip: any) => clip.name === "greeting");
  const idleClip = gltf.animations.find((clip: any) => clip.name === "idle");

  if (!greetingClip || !idleClip) {
    console.warn("Не найдены анимации greeting или idle");
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
</script>
