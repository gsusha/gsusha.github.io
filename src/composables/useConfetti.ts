import {ref} from "vue";

const isConfettiVisible = ref<boolean>(false);

export function useConfetti() {
    const triggerConfetti = (duration: number = 5000) => {
        isConfettiVisible.value = true;

        setTimeout(() => {
            isConfettiVisible.value = false;
        }, duration);
    };

    return {
        isConfettiVisible, triggerConfetti,
    };
}
