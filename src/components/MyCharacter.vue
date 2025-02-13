<template>
  <Renderer ref="rendererRef" antialias resize alpha shadow>
    <Camera :position="{ x: 0, y: 1.1, z: 2 }" />
    <Scene>
      <!-- Мягкий заполняющий свет -->
      <HemisphereLight :intensity="0.6" />

      <!-- Фоновый свет для мягких теней -->
      <AmbientLight :intensity="0.4" />

      <!-- Основной ключевой свет (сверху-сбоку, как в студийном освещении) -->
      <DirectionalLight
          :position="{ x: 2, y: 4, z: 3 }"
          :intensity="1.2"
          cast-shadow
          :shadow-camera="{ top: 50, bottom: -50, left: -50, right: 50 }"
      />

      <!-- Заполняющий свет (противоположная сторона) -->
      <DirectionalLight
          :position="{ x: -2, y: 2, z: 2 }"
          :intensity="0.8"
      />

      <!-- Контровой свет (сзади для выделения силуэта) -->
      <DirectionalLight
          :position="{ x: 0, y: 3, z: -3 }"
          :intensity="1"
      />

      <FbxModel
          src="src/assets/models/gsusha.fbx"
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
  FbxModel,
  HemisphereLight,
  Renderer,
  Scene,
  AmbientLight
} from "troisjs";
import { ref } from "vue";
import { AnimationMixer, Clock } from "three";

const rendererRef = ref(null);
const mixer = ref<AnimationMixer | null>(null);
const clock = ref(new Clock());

const onLoad = (object: any) => {
  mixer.value = new AnimationMixer(object);
  const action = mixer.value.clipAction(object.animations[0]);
  action.play();

  object.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  if (rendererRef.value) {
    rendererRef.value.onBeforeRender(updateMixer);
  }
};

const updateMixer = () => {
  if (mixer.value) mixer.value.update(clock.value.getDelta());
};
</script>