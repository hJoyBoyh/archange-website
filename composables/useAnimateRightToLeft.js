export function useAnimateRightToLeft(el) {
	const element = (typeof el === 'string') ? document.querySelectorAll(el) : el

	const tl = gsap.timeline()

	if(element) {
		tl.from(element, {
			opacity: 0,
			x: 50,
			duration: 0.7,
			delay: 0.1,
			stagger:0.2
		})
	}

	return tl
}