export function useGravityScroll() {
    const scrollToBottom = () => {
        let start: number | null = null;
        let velocity = 0;
        const gravity = 2;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        const animate = (timestamp: number) => {
            if (start === null) start = timestamp;

            velocity += gravity;
            window.scrollBy(0, velocity);

            if (window.scrollY < maxScroll) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return {
        scrollToBottom
    };
}
