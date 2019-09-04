---
{
  "title": "Fall 2019 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "3.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Update Steps

### For a Micro-Site

### For a Component Package

## Breaking Changes

### Breadcrumb Truncation/SSR

In order to fix an issue with server-side rendering, as well as to simplify the API of [CdrBreadcrumb](https://rei.github.io/rei-cedar-docs/components/breadcrumb/), we have removed the `truncationThreshold` and `truncationXSThreshold` attributes. Instead, the `truncationEnabled` attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.

### Large Breakpoint Value Corrected

The token value for the large breakpoint was updated to the correct value of `1232px` (it had previously been incorrectly set to `1200px`). If you are hard-coding any breakpoint values in your project you will need to update those to use the breakpoint values from cdr-tokens instead. If you have been using the breakpoint tokens then you just need to update your version of cedar and cdr-tokens.

### Letter Spacing Values Corrected

The letter spacing values for our text tokens have been corrected to add the `px` suffix.

### CdrRadio Value Prop Is Now CustomValue

In an effort to make our form components more consistent, we have changed CdrRadio to use the `customValue` prop instead of `value`. This is the same pattern that CdrCheckbox uses.

- Before: `<cdr-radio v-model="x" value="foo"/>`
- After: `<cdr-radio v-model="x" customValue="foo"/>`

### CdrPagination, CdrSelect, and CdrRadio v-model Binding

In an effort to make our components that use `v-model` more consistent we have changed the property bindings for CdrPagination, CdrSelect, and CdrRadio to use the same `value` prop and `@input` event pattern that [v-model sets up by default](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components). This change will only affect consumers using JSX or other templating languages which do not have access to Vue directives like v-model. If you were already using v-model with these components then you do not need to change anything.

- CdrPagination: `currentPage` is now `value`
- CdrSelect: `extVal` is now `value`
- CdrRadio: `modelValue` is now `value` [also see note about value/customValue](#cdrradio-value-prop-is-now-customvalue)

### CdrButton now uses @ bindings for events

Rather than pass in an `onClick` event handler as a prop, CdrButton will now bind any listened attached to it. Update `onClick` to be `@click` anywhere you are binding an event to a CdrButton.

- Before: `<cdr-button onClick="yourClickHandlerFunction" />`
- After: `<cdr-button @click="yourClickHandlerFunction" />`

### CdrTabs emits `tab-change` instead of `tabChange`

Vue expects event names to use kebab case and not camel case, so the `tabChange` event on CdrTabs could cause issues for some users. CdrTabs now emits a `tab-change` event instead. 

- Before: `<CdrTabs @tabChange="handler" />`
- After: `<CdrTabs @tab-change="handler" />`

</cdr-doc-table-of-contents-shell>