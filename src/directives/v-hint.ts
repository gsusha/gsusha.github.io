import { DirectiveBinding } from "vue";

const tooltip = document.createElement("div");
tooltip.className = "hint-tooltip";
document.body.appendChild(tooltip);

let tooltipText = "";
let tooltipVisible = false;
let mouseX = 0;
let mouseY = 0;
let animationFrameId: number | null = null;

const updateTooltipPosition = () => {
    if (!tooltipVisible) return;

    const tooltipRect = tooltip.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let posX = mouseX + 15;
    let posY = mouseY + 15;

    if (posX + tooltipRect.width > screenWidth) {
        posX = mouseX - tooltipRect.width - 30;
    }
    if (posY + tooltipRect.height > screenHeight) {
        posY = mouseY - tooltipRect.height - 30;
    }

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;

    animationFrameId = requestAnimationFrame(updateTooltipPosition);
};

const hintDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        if (!binding.value) return;

        const showTooltip = (event: MouseEvent) => {
            tooltipText = binding.value;
            tooltip.innerText = tooltipText;
            tooltipVisible = true;
            mouseX = event.pageX;
            mouseY = event.pageY;
            tooltip.style.opacity = "1";

            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(updateTooltipPosition);
            }
        };

        const moveTooltip = (event: MouseEvent) => {
            mouseX = event.pageX;
            mouseY = event.pageY;
        };

        const hideTooltip = () => {
            tooltipVisible = false;
            tooltip.style.opacity = "0";

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        (el as any)._showTooltip = showTooltip;
        (el as any)._moveTooltip = moveTooltip;
        (el as any)._hideTooltip = hideTooltip;

        el.addEventListener("mouseenter", showTooltip);
        el.addEventListener("mousemove", moveTooltip);
        el.addEventListener("mouseleave", hideTooltip);
    },
    unmounted(el: HTMLElement) {
        el.removeEventListener("mouseenter", (el as any)._showTooltip);
        el.removeEventListener("mousemove", (el as any)._moveTooltip);
        el.removeEventListener("mouseleave", (el as any)._hideTooltip);

        delete (el as any)._showTooltip;
        delete (el as any)._moveTooltip;
        delete (el as any)._hideTooltip;
    },
};

export default hintDirective;
