---
layout: ../layouts/PageLayout.astro
title: "<fieldset> with buttons"
description: |
  This is a test case designed to determine how the fieldset and legend elements are announced in relation to an input by various screen readers.
tags: ["javascript"]
---

This is a test case designed to determine how the <a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element" target="_blank"><code>\<fieldset></code></a> and <a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element" target="_blank"><code>\<legend></code></a> elements are announced in relation to buttons by various screen readers.

## Example

<form action="#">
	<fieldset>
		<legend>Options</legend>
		<button type="button" class="button-secondary">Back</button>
		<button type="button" class="button">Next</button>
	</fieldset>
</form>

## Code

```html
<form action="#">
	<fieldset>
		<legend>Options</legend>
		<button type="button" class="button-secondary">Back</button>
		<button type="button" class="button">Next</button>
	</fieldset>
</form>
```

## Assistive technologies

### VoiceOver
- **Chrome**: Back. Button. Options. Group.
- **Firefox**: Back. Button. Options. Group.
- **Safari**: Back. Button. Options. Options. Group. [Legend announced twice]

### NVDA
- **Chrome**: Options. Grouping. Back. Button
- **Firefox**: Options. Grouping. Back. Button.
- **Edge**: Options. Grouping. Back. Button

### JAWS
- **Chrome**: Options. Group. Back. Button.
- **Firefox**: Options. Back. Button.
- **Edge**: Options. Group. Back. Button.
