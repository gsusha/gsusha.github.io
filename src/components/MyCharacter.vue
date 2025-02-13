<script setup lang="ts">
import {
  Camera,
  DirectionalLight,
  GltfModel,
  HemisphereLight,
  Renderer,
  Scene
} from "troisjs";
</script>

<template>
  <Renderer ref="renderer" antialias resize alpha>
    <Camera :position="{ x: 0, y: 1.1, z: 2 }" />
    <Scene>
      <HemisphereLight />

      <DirectionalLight
          :position="{ x: 50, y: 50, z: 100 }"
          cast-shadow :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }"
      />

      <GltfModel
          src="src/assets/models/gsusha.glb"
      />
    </Scene>
  </Renderer>
</template>