(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{745:function(t,e,a){"use strict";a.r(e);var n=a(2),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Cedar provides easy-to-use, preset values to apply consistent motion for components. Motion tokens help maintain a cohesive experience across all REI properties by:")]),t._v(" "),a("ul",[a("li",[t._v("Storing motion attributes for duration or timing using variable names, not hard-coded values such as cubic-bezier (0.15, 0, 0.15, 0)")]),t._v(" "),a("li",[t._v("Specifying a hierarchical and semantically-defined system")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Motion tokens are primarily used with web applications. Motion tokens for mobile devices are not currently available.")]),t._v(" "),a("h3",{attrs:{id:"duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),a("ul",[a("li",[t._v("Animated components use short time durations so interactions feel responsive and succinct")]),t._v(" "),a("li",[t._v("Recommended range for animated durations is from 100ms to 600ms")]),t._v(" "),a("li",[t._v("Striking a balance is key - slow enough to comprehend and fast enough to respect the customer’s time")]),t._v(" "),a("li",[t._v("From Nielsen Norman Group research:\n"),a("ul",[a("li",[t._v("100ms is perceived as instant. Users feel that they are directly causing something to happen on the screen")]),t._v(" "),a("li",[t._v("Delays between 100ms and 1 second gives users the impression that the website is working and causing the result to appear")])])])]),t._v(" "),a("br"),t._v(" "),a("tokens-motion",{attrs:{"motion-type":"duration",descriptions:t.$page.frontmatter.tokenDescriptions}}),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"easing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easing"}},[t._v("#")]),t._v(" Easing")]),t._v(" "),a("p",[t._v("Cedar’s collection of easings are based on physics found in the natural world. They respond quickly when invoked and slow down over time to ease into their final position. This communicates a sense of physicality and reflects the customer's expectation of objects moving in the real world. Best used with any UI element that opens or closes, such as the accordion or modal components.")]),t._v(" "),a("br"),t._v(" "),a("tokens-motion",{attrs:{"motion-type":"timing",descriptions:t.$page.frontmatter.tokenDescriptions}}),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"comparison-of-timing-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-of-timing-tokens"}},[t._v("#")]),t._v(" Comparison of Timing Tokens")]),t._v(" "),a("tokens-motion",{attrs:{"motion-type":"timing","comparison-view":!0}}),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[t._v("#")]),t._v(" Guidelines")]),t._v(" "),a("p",[t._v("Cedar motion is purposefully designed to enhance the customer's understanding of REI’s digital products. Components use animated interface patterns to reduce cognitive load and imbue a natural interactivity. It’s an important part of building customer trust and affinity for our products.")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"use-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-when"}},[t._v("#")]),t._v(" Use When")]),t._v(" "),a("ul",[a("li",[t._v("Reducing cognitive load. For example, when a product image slides to reveal the next or previous product image after a user clicks on a directional arrow")]),t._v(" "),a("li",[t._v("Attracting the user’s attention. For example, when a toast message moves down from the top browser bar for region-specific warning messages")]),t._v(" "),a("li",[t._v("Providing context with transitions of a single object. For example, rotating an arrow icon to show an accordion panel opening and closing")]),t._v(" "),a("li",[t._v("Showing continuity through the system with transitions between objects. For example, using animation to reveal a modal window")]),t._v(" "),a("li",[t._v("Keeping users interested during loading or long processing times by providing delightful animations")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"don-t-use-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-t-use-when"}},[t._v("#")]),t._v(" Don't Use When")]),t._v(" "),a("ul",[a("li",[t._v("Adding the animation could waste the user’s time")]),t._v(" "),a("li",[t._v("Entertaining the user, rather than helping them to accomplish their goals")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"accessibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessibility"}},[t._v("#")]),t._v(" Accessibility")]),t._v(" "),a("ul",[a("li",[t._v("Do not cause the screen to flash more than three times a second")]),t._v(" "),a("li",[t._v("For any animation that starts automatically and plays for more than 5 seconds, provide pause controls. For example, auto-updating content and ambient videos")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"interface-patterns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-patterns"}},[t._v("#")]),t._v(" Interface Patterns")]),t._v(" "),a("h4",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),a("p",[t._v("Use the transition pattern when:")]),t._v(" "),a("ul",[a("li",[t._v("Moving users from one page to another page")]),t._v(" "),a("li",[t._v("Transition out of one task to another")]),t._v(" "),a("li",[t._v("Replacing large portions of information")])]),t._v(" "),a("br"),t._v(" "),a("table",{staticClass:"table-first-col-align-top"},[a("tr",[a("td",{staticStyle:{width:"160px"}},[a("strong",[t._v("Accordion")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Symbol for Accordion component",src:t.$withBase("/motion/pattern_symbol_accordion_1-1.png")}})],1),t._v(" "),a("td",[t._v("The arrow icon rotates using ease out timing with 300ms duration. "),a("br"),a("br"),t._v(" When opening, the Accordion content is revealed using the ease timing with 300ms duration. "),a("br"),a("br"),t._v(" When closing, the duration changes to 200ms to hide content. "),a("br"),a("br"),t._v(" When opening or closing, the panel content fades on and off using linear timing at 100ms. "),a("br"),a("br"),t._v(" View "),a("a",{attrs:{href:"../../components/accordion/"}},[t._v("Accordion")]),t._v(" component.")])])]),t._v(" "),a("br"),t._v(" "),a("table",{staticClass:"table-first-col-align-top"},[a("tr",[a("td",{staticStyle:{width:"160px"}},[a("strong",[t._v("Tabs")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Symbol for Tabs component",src:t.$withBase("/motion/pattern_symbol_tabs_1-1.png")}})],1),t._v(" "),a("td",[t._v("Ease out timing is used for updating the tab bar and revealing new content. "),a("br"),a("br"),t._v(" Duration was initially set at 600ms. During the development phase, the duration was updated to 500ms. "),a("br"),a("br"),t._v(" View "),a("a",{attrs:{href:"../../components/tabs/"}},[t._v("Tabs")]),t._v(" component.")])])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"supplements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supplements"}},[t._v("#")]),t._v(" Supplements")]),t._v(" "),a("p",[t._v("Use the supplements pattern when:")]),t._v(" "),a("ul",[a("li",[t._v("Bringing information on or off of the page without changing the user's location")]),t._v(" "),a("li",[t._v("Adding or updating bits of additional content on the page")])]),t._v(" "),a("p",[t._v("There are currently no components in the Cedar Design System that use supplemental animation.  Common examples of this type of animation are:")]),t._v(" "),a("ul",[a("li",[t._v("Modals")]),t._v(" "),a("li",[t._v("Popovers")]),t._v(" "),a("li",[t._v("Tooltips")])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback"}},[t._v("#")]),t._v(" Feedback")]),t._v(" "),a("p",[t._v("Use the feedback pattern when:")]),t._v(" "),a("ul",[a("li",[t._v("Giving users direct feedback about their interactions")]),t._v(" "),a("li",[t._v("Linking a human action to an interface's reaction")]),t._v(" "),a("li",[t._v("Keeping the user interested during slow page-loading times")])]),t._v(" "),a("br"),t._v(" "),a("table",{staticClass:"table-first-col-align-top"},[a("tr",[a("td",{staticStyle:{width:"160px"}},[a("strong",[t._v("Buttons")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Symbol for Buttons component",src:t.$withBase("/motion/pattern_symbol_buttons_16-9.png")}})],1),t._v(" "),a("td",[t._v("When user hovers on or off, color changes instantaneously.  "),a("br"),a("br"),t._v(" View "),a("a",{attrs:{href:"../../components/buttons/"}},[t._v("Button")]),t._v(" component.")])])]),t._v(" "),a("br"),t._v(" "),a("table",{staticClass:"table-first-col-align-top"},[a("tr",[a("td",{staticStyle:{width:"160px"}},[a("strong",[t._v("Breadcrumb")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Symbol for Breadcrumb component",src:t.$withBase("/motion/pattern_symbol_breadcrumb_16-9.png")}})],1),t._v(" "),a("td",[t._v("When users hovers on or off, an underline style is applied to the link text.  "),a("br"),a("br"),t._v(" View "),a("a",{attrs:{href:"../../components/breadcrumb/"}},[t._v("Breadcrumb")]),t._v(" component.")])])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"demonstrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrations"}},[t._v("#")]),t._v(" Demonstrations")]),t._v(" "),a("p",[t._v("Use the demonstrations pattern when:")]),t._v(" "),a("ul",[a("li",[t._v("Explaining how something works")]),t._v(" "),a("li",[t._v("Showing a process through action, instead of telling what's happening")])]),t._v(" "),a("p",[t._v("There are currently no animations on the REI site that are demonstrations. An example of this type of animation is when a group of files emerge from the downloads icon on the Mac dock interface.")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"decorations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decorations"}},[t._v("#")]),t._v(" Decorations")]),t._v(" "),a("p",[t._v("Use the decorations pattern when:")]),t._v(" "),a("ul",[a("li",[t._v("Creating an emotional connection between the interface and the user")]),t._v(" "),a("li",[t._v("Sparking visual interest by keeping the user engaged")]),t._v(" "),a("li",[t._v("Delighting a user's experience without conveying new information")])]),t._v(" "),a("p",[t._v("There are no animations on the REI site that are decorative. For examples of decorative animations, view "),a("a",{attrs:{href:"https://hackernoon.com/u15-latest-and-best-loading-animations-to-make-user-enjoy-waiting-9c7861ed5d47",target:"_blank",rel:"noopener noreferrer"}},[t._v("15 Latest and Best Loading Animations to Make User Enjoy Waiting"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"creating-new-motion-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-motion-tokens"}},[t._v("#")]),t._v(" Creating New Motion Tokens")]),t._v(" "),a("p",[t._v("CSS animation frame rate for interface elements is dependent on the speed of the browser and computer:")]),t._v(" "),a("ul",[a("li",[t._v("For animations running at less than 15fps, users will not be able to see continuous motion")]),t._v(" "),a("li",[t._v("Most devices refresh their screen at 60 times a second")])]),t._v(" "),a("p",[t._v("For smooth and responsive animation, use CSS attributes for:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Position:")]),t._v(" Using transform property for "),a("code",[t._v("translate()")]),t._v(", to reposition an element in the horizontal or vertical directions")]),t._v(" "),a("li",[a("strong",[t._v("Scale:")]),t._v(" Using transform property for "),a("code",[t._v("scale()")]),t._v(", to resize an element on 2D plane")]),t._v(" "),a("li",[a("strong",[t._v("Rotation:")]),t._v(" Using transform property for "),a("code",[t._v("rotate()")]),t._v(", to rotate an element on x, y, or z axis")]),t._v(" "),a("li",[a("strong",[t._v("Skew:")]),t._v(" Using transform property for "),a("code",[t._v("skew()")]),t._v(", to distort an element on the 2D plane")]),t._v(" "),a("li",[a("strong",[t._v("Opacity:")]),t._v(" Specifies the opacity or transparency of an element with values from 0.0 - 1.0. Lower values cause the element to be more transparent")])]),t._v(" "),a("p",[t._v("For more information, visit the "),a("a",{attrs:{href:"../../components/design-tokens#adding-tokens-to-the-repository"}},[t._v("Adding Tokens to the Repository")]),t._v(" page.")]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("table",{staticClass:"table-first-col-align-top"},[a("thead",[a("tr",[a("th",[t._v("Glossary Term")]),t._v(" "),a("th",[a("strong",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("An illusion of movement created by displaying a series of pictures or frames.")])]),t._v(" "),a("tr",[a("td",[t._v("aspect ratio")]),t._v(" "),a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Graph to compare 16 to 9 with 4 to 3 aspect ratios",src:t.$withBase("/motion/glossary_aspect_ratio_16-9.png")}}),t._v(" "),a("br"),a("br"),t._v(" The relationship between the width of an image to its height. Standard ratios are 16:9 for widescreen and 4:3 for television.")],1)]),t._v(" "),a("tr",[a("td",[t._v("Bézier curve")]),t._v(" "),a("td",[t._v("A method of defining curved lines invented by French mathematician Pierre Bézier. For animation, a Bézier curve can be used to specify the velocity over time of an object such as an icon moving from A to B. Bézier curves are often used to replicate the physics found in the natural world. For the animation function, cubic-bezier (p1, p2, p3, p4), the p1 and p3 values must be in the range of 0 to 1.")])]),t._v(" "),a("tr",[a("td",[t._v("cross dissolve")]),t._v(" "),a("td",[t._v("A transition effect used to fade one image into a different image simultaneously: one fades in while the other fades out.")])]),t._v(" "),a("tr",[a("td",[t._v("ease-in")]),t._v(" "),a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Graph to show ease-in animation timing",src:t.$withBase("/motion/glossary_ease_in_16-9.png")}}),t._v(" "),a("br"),a("br"),t._v(" Specifies a gradual acceleration in the action with a slow start and quick ending. Ease-in is not recommended because it may negatively impact the user's perception of your site's responsiveness by feeling sluggish at the start. A common value for the cubic-bezier is (0.25, 0.1, 0.25, 1.0). Also known as slow-in.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ease-in-out")]),t._v(" "),a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Graph to show ease-in-out animation timing",src:t.$withBase("/motion/glossary_ease_in_out_16-9.png")}}),t._v(" "),a("br"),a("br"),t._v(" Specifies a gradual acceleration at the start until the middle of the action. Then, a gradual deceleration in the action at the end. This timing function can be quite satisfying for users because it has a slow start, a fast middle, and a slow end. Do not use this timing function for a long animation duration because of the sluggishness of the ease-in start. A suitable duration is 300-500ms for this timing function. Cedar’s token "),a("code",[t._v("cdr-timing-function-ease")]),t._v(" uses this function.")],1)]),t._v(" "),a("tr",[a("td",[t._v("ease-out")]),t._v(" "),a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Graph to show ease-out animation timing",src:t.$withBase("/motion/glossary_ease_out_16-9.png")}}),t._v(" "),a("br"),a("br"),t._v(" Specifies a gradual deceleration in the action with a fast start and slow ending. Ease-out is recommended because it gives the animation a feeling of responsiveness. It also allows a natural slowdown at the end. A common value for the cubic-bezier is (0, 0, 0.58, 1.0). Also known as slow-out. Cedar’s token "),a("code",[t._v("cdr-timing-function-ease-out")])],1)]),t._v(" "),a("tr",[a("td",[t._v("fade in")]),t._v(" "),a("td",[t._v("Specifies a transition effect used to open a sequence. The first image gradually appears from complete transparency to its complete opacity.")])]),t._v(" "),a("tr",[a("td",[t._v("fade out")]),t._v(" "),a("td",[t._v("Specifies a transition effect used to close a sequence. The last image gradually disappears, going from complete opacity to complete transparency.")])]),t._v(" "),a("tr",[a("td",[t._v("frame rate")]),t._v(" "),a("td",[t._v("The frame rate is measured by the number of frames recorded or played back each second. It is denoted as fps (frames per second). For example, an animation could be played back at 12, 15, 24, 25, 30 or 60 frames per second or any other number.")])]),t._v(" "),a("tr",[a("td",[t._v("linear")]),t._v(" "),a("td",[a("cdr-img",{staticClass:"cdr-doc-article-img",staticStyle:{"margin-bottom":"0"},attrs:{alt:"Graph to show linear animation timing",src:t.$withBase("/motion/glossary_linear_16-9.png")}}),t._v(" "),a("br"),a("br"),t._v(" Specifies an even speed in the action. A common value for the cubic-bezier is (0.0, 0.0, 1.0, 1.0). This is commonly used for opacity transitions. Cedar’s token "),a("code",[t._v("cdr-timing-function-linear")])],1)]),a("tr",[a("td",[t._v("path of action")]),t._v(" "),a("td",[t._v("Specifies direction that the action will follow.")])]),t._v(" "),a("tr",[a("td",[t._v("slow-in")]),t._v(" "),a("td",[t._v("Specifies a gradual acceleration in the action with a slow start and a quick ending. Also known as ease-in.")])]),t._v(" "),a("tr",[a("td",[t._v("slow-out")]),t._v(" "),a("td",[t._v("Specifies a gradual deceleration in the action with a fast start and a slow ending. Also known as ease-out.")])]),t._v(" "),a("tr",[a("td",[t._v("timeline")]),t._v(" "),a("td",[t._v("A horizontal representation of a scene's elements, timing, and keyframes.")])]),t._v(" "),a("tr",[a("td",[t._v("transition")]),t._v(" "),a("td",[t._v("An effect that happens between two images or scenes. Common transition effects are cross-dissolve and wipe.")])])])])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);