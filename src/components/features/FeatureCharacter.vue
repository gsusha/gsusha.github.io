<template>
  <Renderer ref="rendererRef" antialias resize alpha shadow>
    <Camera :position="{ x: 0, y: 140, z: 140 }" />
    <Scene>

      <HemisphereLight color="#ffffff" groundColor="#8d8d8d" :intensity="2" :position="{ x: 0, y: 20, z: 0 }" />

      <DirectionalLight
          color="#ffffff"
          :intensity="1"
          :position="{ x: -3, y: 110, z: -10 }"
          cast-shadow
          :shadow-camera-top="2"
          :shadow-camera-bottom="-2"
          :shadow-camera-left="-2"
          :shadow-camera-right="2"
          :shadow-camera-near="0.1"
          :shadow-camera-far="40"
      />

      <FbxModel
          src="src/assets/models/test.fbx"
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
  AmbientLight, PointLight, SpotLight, RectAreaLight, Plane, PhongMaterial, GltfModel
} from "troisjs";
import { ref } from "vue";
import {AnimationMixer, Clock, Object3D} from "three";

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