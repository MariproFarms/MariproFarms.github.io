// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
import ScrollMagic from "scrollmagic"

// init controller
// create a scene
export function newScrollScene(animateElement) {
	// wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onLeave",
			duration: "0" // this works just fine with duration 0 as well
			// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
			// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
		}
	})
	new ScrollMagic.Scene({
		triggerElement: animateElement
	})
		.setPin(animateElement, { pushFollowers: false })
		.addTo(controller)
}

export function toggleClass(animateElement, triggerElement) {
	var controller = new ScrollMagic.Controller()

	const scene = new ScrollMagic.Scene({
		triggerElement: triggerElement,
		triggerHook: 0
	})
		.setClassToggle(animateElement, "with-background")
		.addTo(controller)

	return scene
}
