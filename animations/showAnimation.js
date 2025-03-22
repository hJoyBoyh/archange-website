export function showAnimation({  element }) {
	const $elements = document.querySelectorAll(element)

	$elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
            //  markers:true,
			start:'25% bottom',
			animation: useShowObject(el)

		})
	})
}