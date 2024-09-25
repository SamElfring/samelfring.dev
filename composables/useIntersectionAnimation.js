/**
 * Start animation if it is visible in the viewport.
 * @param {import("vue").Ref<HTMLElement>} elementRef
 * @param {import("animejs").AnimeAnimParams} animationOptions
 * @param {IntersectionObserverInit} observerOptions
 * @param {import("vue").Ref<HTMLElement>[]} otherRefs
 */
export const useIntersectionAnimation = (elementRef, animationOptions, observerOptions = {}, otherRefs = []) => {
    const { $anime } = useNuxtApp();

    const start = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start the animation when the element is in the viewport
                    $anime({
                        targets: otherRefs.length > 0 ? [elementRef, ...otherRefs] : elementRef,
                        ...animationOptions
                    });

                    // Stop observing after the animation starts
                    observer.unobserve(elementRef);
                }
            },
            {
                rootMargin: "0px 0px -200px 0px",
                ...observerOptions
            }
        );

        observer.observe(elementRef);
    };

    return {
        start
    };
};
