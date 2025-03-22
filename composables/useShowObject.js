export function useShowObject(el) {
	const element = (typeof el === 'string') ? document.querySelector(el) : el

	const tl = gsap.timeline()

	if(element) {
		tl.to(element, {
			opacity: 1,
			
			duration: 0.7,
			delay: 0.1
		})
	}

	return tl
}