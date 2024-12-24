---
layout: ../layouts/PageLayout.astro
title: "Nested <fieldset>"
original: "https://russmaxdesign.github.io/accessible-forms/nested-fieldset.html"
description: |
  This is a test case designed to determine how nested fieldset and legend elements are announced by various screen readers.
tags: ["fieldset"]
---

This is a test case designed to determine how nested [<code>\<fieldset></code>](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) and [<code>\<legend></code>](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) elements are announced by various screen readers.


## Example

<form action="#">
<fieldset>
	<legend>What type of cars do you like?</legend>
	<fieldset>
	<legend>Size</legend>
	<ul>
		<li><input type="checkbox" id="large"><label for="large">Large</label></li>
		<li><input type="checkbox" id="small"><label for="small">Small</label></li>
	</ul>
	</fieldset>
	<fieldset>
	<legend>Type</legend>
	<ul>
		<li><input type="checkbox" id="sedan"><label for="sedan">Sedan</label></li>
		<li><input type="checkbox" id="wagon"><label for="wagon">Wagon</label></li>
	</ul>
	</fieldset>
</fieldset>
</form>

## Code

```html
<form action="#">
  <fieldset>
    <legend>What type of cars do you like?</legend>
    <fieldset>
      <legend>Size</legend>
      <ul>
        <li>
          <input type="checkbox" id="large">
          <label for="large">Large</label>
        </li>
        <li>
          <input type="checkbox" id="small">
          <label for="small">Small</label>
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>Type</legend>
      <ul>
        <li>
          <input type="checkbox" id="sedan">
          <label for="sedan">Sedan</label>
        </li>
        <li>
          <input type="checkbox" id="wagon">
          <label for="wagon">Wagon</label>
        </li>
      </ul>
    </fieldset>
  </fieldset>
</form>
```

## Assistive technologies

### VoiceOver - tested by me on macOS 14.3.1
- **Brave**: <span green>Both of the legends are announced.</span>
- **Firefox**: <span green>Both of the legends are announced.</span>
- **Safari**: <span green>Both of the legends are announced.</span>

### VoiceOver

- **Chrome**: Large. Unticked. Tick box. List. 2 items. <span red>[Neither of the legends are announced]</span>
- **Firefox**: Large. Unticked. Checkbox. List. 2 items. <span red>[Neither of the legends are announced]</span>
- **Safari**: Large. Unticked. Tick box. Size. List 2 items <span red>[Outer legend not announced]</span>

### NVDA

- **Chrome**: <span green>What type of cars do you like? Grouping.</span> Size. Grouping. List with 2 items. Large. Checkbox. Not checked.
- **Firefox**: <span green>What type of cars do you like? Grouping.</span> Size. Grouping. List with 2 items. Large. Checkbox. Not checked.
- **Edge**: <span green>What type of cars do you like? Grouping.</span> Size. Grouping. List with 2 items. Large. Checkbox. Not checked.

### JAWS

- **Chrome**: <span green>What type of cars do you like? Group.</span> Size. Group. List with 2 items. Large. Checkbox. Not checked. To check press space bar.
- **Firefox**: <span green>What type of cars do you like?</span> Size. Large. Checkbox. Not checked. To check press space bar.
- **Edge**: <span green>What type of cars do you like? Group.</span> Size. Group. List with 2 items. Large. Checkbox. Not checked. To check press space bar.