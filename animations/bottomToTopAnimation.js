import { useAnimateRightToLeft } from "~/composables/useAnimateRightToLeft"

export function bottomToTopAnimation({  element , element2 }) {
	const $elements = document.querySelector(element)

	ScrollTrigger.create({
		trigger: $elements,
		// markers:true,
		start:'25% bottom',
		animation: useAnimateBottomToTop(element2)
	})
}