---
{
  "title": "Table",
  "layout_type": "LayoutComponent",
  "title_metadata": "Table, CdrTable",
  "summary": "TODO: Summary",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "TODO?",
      "href": ""
    },
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTable",
    "styleTag": ".advanced-table {
      &__header {
        background-color: $cdr-color-background-table-header;
      }
    }",
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrTable",
          "api": {
            "props": [
              {
                "name": "striped",
                "type": "Boolean",
                "default": "false",
                "required": "false",
                "description": "Sets row colors to alternate between darker and lighter backgrounds. Striping will not apply when `border` is true"
              },
              {
                "name": "border",
                "type": "Boolean",
                "default": "true",
                "required": "false",
                "description": "Adds borders between rows. Will disable `striped` if both are true"
              },
              {
                "name": "full-width",
                "type": "Boolean, string",
                "default": "true",
                "required": "false",
                "description": "Sets the width to 100%. Also accepts space separated strings for breakpoints that it should be full width: { '@xs' | '@sm' | '@md' | '@lg' }"
              },
              {
                "name": "responsive",
                "type": "Boolean",
                "default": "true",
                "required": "false",
                "description": "Makes the table scroll horizontally when it would overflow its container"
              },
              {
                "name": "hover",
                "type": "Boolean",
                "default": "false",
                "required": "false",
                "description": "Adds a darker background on row hover"
              },
              {
                "name": "size",
                "type": "string",
                "default": "'medium'",
                "description": "Sets the table size (cell padding); values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              },
            ],
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}

---

<cdr-doc-table-of-contents-shell>

# Overview

## Default

The default table is medium sized, bordered, full width, and has responsive overflow scrolling.

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table>
    <thead>
      <tr>
        <th>Test head</th>
        <th>Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Striped

Alternating light/dark backgrounds.

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table striped>
    <thead>
      <tr>
        <th>Test head</th>
        <th>Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Advanced with custom styles

This is an advanced example with multiple headers and a custom class to change the background color for headers inside `<tbody>`

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table class="advanced-table">
    <caption>Availability of holiday accommodation</caption>
    <thead>
      <tr>
        <td></td>
        <th id="stud" scope="col">Studio</th>
        <th id="apt" scope="col"><abbr title="Apartment">Apt</abbr></th>
        <th id="chal" scope="col">Chalet</th>
        <th id="villa" scope="col">Villa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="par" colspan="5" scope="colgroup" class="advanced-table__header">Paris</th>
      </tr>
      <tr>
        <th headers="par" id="pbed1" class="advanced-table__header">1 bedroom</th>
        <td headers="par pbed1 stud">11</td>
        <td headers="par pbed1 apt">20</td>
        <td headers="par pbed1 chal">25</td>
        <td headers="par pbed1 villa">23</td>
      </tr>
      <tr>
        <th headers="par" id="pbed2" class="advanced-table__header">2 bedroom</th>
        <td headers="par pbed2 stud">-</td>
        <td headers="par pbed2 apt">43</td>
        <td headers="par pbed2 chal">52</td>
        <td headers="par pbed2 villa">32</td>
      </tr>
      <tr>
        <th headers="par" id="pbed3" class="advanced-table__header">3 bedroom</th>
        <td headers="par pbed3 stud">-</td>
        <td headers="par pbed3 apt">13</td>
        <td headers="par pbed3 chal">15</td>
        <td headers="par pbed3 villa">40</td>
      </tr>
      <tr>
        <th id="rome" colspan="5" scope="colgroup" class="advanced-table__header">Rome</th>
      </tr>
      <tr>
        <th id="rbed1" headers="rome" class="advanced-table__header">1 bedroom</th>
        <td headers="rome rbed1 stud">13</td>
        <td headers="rome rbed1 apt">21</td>
        <td headers="rome rbed1 chal">22</td>
        <td headers="rome rbed1 villa">3</td>
      </tr>
      <tr>
        <th id="rbed2" headers="rome" class="advanced-table__header">2 bedroom</th>
        <td headers="rome rbed2 stud">-</td>
        <td headers="rome rbed2 apt">23</td>
        <td headers="rome rbed2 chal">43</td>
        <td headers="rome rbed2 villa">30</td>
      </tr>
      <tr>
          <th id="rbed3" headers="rome" class="advanced-table__header">3 bedroom</th>
          <td headers="rome rbed3 stud">-</td>
          <td headers="rome rbed3 apt">16</td>
          <td headers="rome rbed3 chal">32</td>
          <td headers="rome rbed3 villa">40</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- TODO

<br>

This component has compliance with WCAG guidelines by:

- Routing all attributes to the table element

<hr>

# Guidelines

## Use When

- TODO

## Don't Use When

- TODO

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Usage

### Markup

While tables can be as simple as `CdrTable > tr > td`, tables should make use of `thead`, `tbody`, and/or `tfoot` for the best user experience and for correct styles.

### Customizing

CdrTable is a simple wrapper component that provides basic styles that should support the majority of uses. There are cases where you might need to change background colors or add additional borders (see [advanced example](#advanced-with-custom-styles) above). When this is done, tokens for the table colors (background, border, etc.) should be used so your customizations can persist through future cedar updates.

</cdr-doc-table-of-contents-shell>