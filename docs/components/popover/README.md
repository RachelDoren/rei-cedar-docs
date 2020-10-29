---
{
  "title": "Popover",
  "layout_type": "LayoutComponent",
  "summary": "Small overlay used to display contextual information",
  "title_metadata": "CdrPopover",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrPopover, CdrButton, IconInformationStroke"
  },

  "content": [
    {
      "type": "do",
      "image": "popover/popover_content_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper popover usage",
      "caption": "Do link to additional content within a popover if additional information might be needed"
    },
    {
      "type": "dont",
      "image": "popover/popover_content_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper popover usage",
      "caption": "Don't overload the popover with too much content "
    }
  ],

  "essential": [
    {
      "type": "do",
      "image": "popover/popover_essential_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper popover usage",
      "caption": "Do provide users with additional information in a popover when a feature or task might need clarification"
    },
    {
      "type": "dont",
      "image": "popover/popover_essential_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper popover usage",
      "caption": "Don't put information that's essential for completing a task in a popover"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrPopover",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "required": "true",
                "description": "Id for the CdrPopover element. Required for accessibility."
              },
              {
                "name": "position",
                "type": "string",
                "default": "'up'",
                "description": "Sets the position where the popover will render relative to the trigger element. Possible values: 'up' | 'down' | 'left' | 'right'"
              },
              {
                "name": "autoPosition",
                "type": "boolean",
                "default": "true",
                "description": "If set to `true`, popover will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the popover will always render in the provided `position`."
              },
              {
                "name": "contentClass",
                "type": "string",
                "description": "Adds a custom class to the popover content wrapper. Allows for overriding it's size, styling, etc."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrPopover content."
              },
              {
                "name": "trigger",
                "description": "Slot for the element that triggers the popover. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
              }
            ],
            "events": [
              {
                "name": "closed",
                "arguments": "event",
                "description": "$emit event fired when tooltip is closed."
              },
              {
                "name": "opened",
                "arguments": "event",
                "description": "$emit event fired when tooltip is opened."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

CdrPopover is a wrapper component that accepts a trigger element and popover content. When the trigger element is clicked, the poppver content is rendered. Event bindings between the trigger and the popover are set up automatically. The popover will dynamically update its position property to ensure that it renders on screen, though this functionality can be disabled by setting autoPosition to false.

<cdr-doc-example-code-pair repository-href="/src/components/CdrPopover"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-popover id="popover-example" position="up">
  <cdr-button slot="trigger" :icon-only="true" :with-background="true">
    <icon-information-stroke slot="icon"/>
  </cdr-button>
  <div>
    On click, I provide additional information to the user
  </div>
</cdr-popover>
```
</cdr-doc-example-code-pair>


## Accessibility

Ensure that usage of this component complies with accessibility guidelines:

- Set an `id` property on the CdrPopover. The component will automatically link that `id` to the trigger element.
- Content passed in to the `trigger` slot must be an actionable element such as a button.
- TODO: Popover content should ...

This component complies with WCAG guidelines by:

- Adds click handler to trigger element that manages popover state.
- When opened, moves focus to the first actionable element inside the popover.
- When closed, restores focus to the last active element before the popover was opened.
- Dynamically sets `aria-controls` on the trigger element to point to the id of the tooltip.
- Sets `aria-haspopup="dialog"` on the trigger element.
- Dynamically sets `aria-expanded` on the popover content.
- Adds `role="dialog"` to the tooltip content.
- Popover content is not visible to screen readers when it is closed.
- Popover can be closed by pressing the close button in the top right corner, by pressing the `esc` key, or by clicking anywhere outside of the popover content.


# Guidelines

A popover is a floating container useful for communicating small amounts of clarifying information. It's revealed through acting upon a trigger, like a button, but can also be used to preemptively bring attention to new interface features.

## Use when
Use a popover when a subset of users require additional information.

Example:
- When the co-op requests a user’s email, a popover is used to explain why an email is required and the ways in which it might be used
Some users aren’t familiar with a credit card security field. Using a popover, describe specifically where to find the information being asked for the identified card type.

## Don’t use when
- Don’t put critical information in a popover. Instead, place the information inline so that it’s always visible to users
- Don’t put excessive content into popover. Instead, use a [Modal](../modal/)

Example:
- The terms and conditions of a free shipping offer needs to be easily viewed, if desired. Place the lengthy details of the offer in a modal, not a popover


## Do / Don't


<do-dont :examples="$page.frontmatter.content" />

<do-dont :examples="$page.frontmatter.essential" />

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

</cdr-doc-table-of-contents-shell>