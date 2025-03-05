import { DirectiveBinding } from "vue";

const createPopover = () => {
    const popover = document.createElement("div");
    popover.className = "popover-tooltip";
    document.body.appendChild(popover);
    return popover;
};

const popover = createPopover();

const calculatePosition = (
    el: HTMLElement,
    popover: HTMLElement,
    position: string
) => {
    const rect = el.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let top = 0, left = 0;
    let finalPosition = position;

    const positions = {
        bottom: {
            top: rect.bottom + window.scrollY + 8,
            left: rect.left + window.scrollX + rect.width / 2 - popoverRect.width / 2
        },
        top: {
            top: rect.top + window.scrollY - popoverRect.height - 8,
            left: rect.left + window.scrollX + rect.width / 2 - popoverRect.width / 2
        },
        left: {
            top: rect.top + window.scrollY + rect.height / 2 - popoverRect.height / 2,
            left: rect.left + window.scrollX - popoverRect.width - 8
        },
        right: {
            top: rect.top + window.scrollY + rect.height / 2 - popoverRect.height / 2,
            left: rect.right + window.scrollX + 8
        }
    };

    ({ top, left } = positions[position as keyof typeof positions] || positions.bottom);

    // Автоматический пересчёт, если поповер выходит за границы экрана
    if (top + popoverRect.height > screenHeight) finalPosition = "top";
    if (top < 0) finalPosition = "bottom";
    if (left + popoverRect.width > screenWidth) finalPosition = "left";
    if (left < 0) finalPosition = "right";

    ({ top, left } = positions[finalPosition as keyof typeof positions]);

    // Добавляем data-position для стрелочки
    popover.setAttribute("data-position", finalPosition);

    return { top, left };
};

const popoverDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<any>) {
        const position = binding.arg || "bottom";
        const title = binding.value?.title || "";
        const content = binding.value?.content || "";

        const showPopover = () => {

            if (content) {
                popover.innerHTML = `
                <div class="popover-tooltip__title">${title}</div>
                <div class="popover-tooltip__content">${content}</div>
            `;
            } else {
                popover.innerHTML = `
                <div class="popover-tooltip__title">${title}</div>
            `;
            }
            popover.style.opacity = "1";
            popover.style.visibility = "visible";

            const { top, left } = calculatePosition(el, popover, position);
            popover.style.top = `${top}px`;
            popover.style.left = `${left}px`;
        };

        const hidePopover = () => {
            popover.style.opacity = "0";
            popover.style.visibility = "hidden";
        };

        (el as any)._showPopover = showPopover;
        (el as any)._hidePopover = hidePopover;

        el.addEventListener("mouseenter", showPopover);
        el.addEventListener("mouseleave", hidePopover);
    },
    unmounted(el: HTMLElement) {
        el.removeEventListener("mouseenter", (el as any)._showPopover);
        el.removeEventListener("mouseleave", (el as any)._hidePopover);

        delete (el as any)._showPopover;
        delete (el as any)._hidePopover;
    },
};

export default popoverDirective;
