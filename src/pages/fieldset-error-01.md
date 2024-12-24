---
layout: ../layouts/PageLayout.astro
title: "Radio group with error - no programmatic association"
original: "https://russmaxdesign.github.io/accessible-forms/fieldset-error01.html"
description: |
  This is a test case designed to determine how an error message associated with a radio group will be announced by various screen readers.
tags: ["fieldset"]
---

This is a test case designed to determine how an error message associated with a radio group will be announced by various screen readers.

## Example

<form action="#">
	<fieldset>
		<legend>Do you like boats?</legend>
		<div class="form-group">
		<input type="radio" id="boats-y" name="boats">
		<label for="boats-y">Yes</label>
		</div>
		<div class="form-group">
		<input type="radio" id="boats-n" name="boats">
		<label for="boats-n">No</label>
		</div>
		<p class="error-message" id="e01">Error: Choose at least one option</p>
	</fieldset>
</form>

## Code

```html
<form action="#">
  <fieldset>
    <legend>Do you like boats?</legend>
    <div class="form-group">
      <input type="radio" id="boats-y" name="boats">
      <label for="boats-y">Yes</label>
    </div>
    <div class="form-group">
      <input type="radio" id="boats-n" name="boats">
      <label for="boats-n">No</label>
    </div>
    <p class="error-message" id="e01">Error: Choose at least one option</p>
  </fieldset>
</form>
```

## Assistive technologies

### VoiceOver
- **Chrome**: Yes. Radio button. 1 of 2. Do you like boats? Group. [Error message not announced]
- **Firefox**: Yes. Radio button. 1 of 2. Do you like boats? Group. [Error message not announced]
- **Safari**: Yes. Radio button. 1 of 2. Do you like boats? Do you like boats? Group. [Error message not announced]

### NVDA
- **Chrome**: Do you like boats? Grouping. Yes. Radio button. Not checked. 1 of 2. [Error message not announced]
- **Firefox**: Do you like boats? Grouping. Yes. Radio button. Not checked. 1 of 2. [Error message not announced]
- **Edge**: Do you like boats? Grouping. Yes. Radio button. Not checked. 1 of 2. [Error message not announced]

### JAWS
- **Chrome**: Do you like boats? Group. Yes. Radio button. Not checked. 1 of 2. [Legend announced twice]
- **Firefox**: To change the selection use the up or down arrow. Do you like boats? Yes. Radio button. Not checked. Yes. Radio button. Not checked. 1 of 2. [Legend announced twice]
- **Edge**: Do you like boats? Group. Yes. Radio button. Not checked. 1 of 2. [Legend announced twice]