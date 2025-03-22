import { useAnimateRightToLeft } from "~/composables/useAnimateRightToLeft"

export function rightToLeftAnimation({  element , element2 }) {
	const $elements = document.querySelector(element)

	ScrollTrigger.create({
		trigger: $elements,
		// markers:true,
		start:'25% bottom',
		animation: useAnimateRightToLeft(element2)
	})
}