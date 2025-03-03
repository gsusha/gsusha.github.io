import { DirectiveBinding } from "vue";

const hintDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        if (!binding.value) return;

        el.setAttribute("data-hint", binding.value);
        el.classList.add("has-hint");
    },
    updated(el: HTMLElement, binding: DirectiveBinding<string>) {
        if (!binding.value) return;

        el.setAttribute("data-hint", binding.value);
    },
    unmounted(el: HTMLElement) {
        el.removeAttribute("data-hint");
        el.classList.remove("has-hint");
    },
};

export default hintDirective;
