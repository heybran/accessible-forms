---
layout: ../layouts/PageLayout.astro
title: "Radio group with error - aria-describedby applied to <input>"
original: "https://russmaxdesign.github.io/accessible-forms/fieldset-error04.html"
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
        <input type="radio" id="boats-y" name="boats" aria-describedby="e01">
        <label for="boats-y">Yes</label>
      </div>
      <div class="form-group">
        <input type="radio" id="boats-n" name="boats" aria-describedby="e01">
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
      <input type="radio" id="boats-y" name="boats" aria-describedby="e01">
      <label for="boats-y">Yes</label>
    </div>
    <div class="form-group">
      <input type="radio" id="boats-n" name="boats" aria-describedby="e01">
      <label for="boats-n">No</label>
    </div>
    <p class="error-message" id="e01">Error: Choose at least one option</p>
  </fieldset>
</form>
```

## Assistive technologies

### VoiceOver - tested by me on 2024.12.21 with macOS 14.3.1
- **Brave**: Yes description, <span green>Error: Choose at least one option</span>, radio button, 1 of 2
- **Firefox**: Yes, radio button, 1 of 2. <span green>Error: Choose at least one option.</span>
- **Safari**: Yes description, <span green>Error: Choose at least one option</span>, radio button, 1 of 2.

### VoiceOver
- **Chrome**: Yes. Radio button. 1 of 2. Do you like boats? Group. [Pause] <span green>Error: Choose at least one option.</span>
- **Firefox**: Yes. Radio button. 1 of 2. Do you like boats? Group. [Pause] <span green>Error: Choose at least one option.</span>
- **Safari**: Yes. Radio button. 1 of 2. Do you like boats? Do you like boats? Group. [Pause] <span green>Error: Choose at least one option.</span>

### NVDA
- **Chrome**: Do you like boats? Grouping. Yes. Radio button. Not checked. <span green>Error: Choose at least one option.</span> 1 of 2.
- **Firefox**: Do you like boats? Grouping. Yes. Radio button. Not checked. <span green>Error: Choose at least one option.</span> 1 of 2.
- **Safari**: Do you like boats? Grouping. Yes. Radio button. Not checked. <span green>Error: Choose at least one option.</span> 1 of 2.

### JAWS
- **Chrome**: Do you like boats? Group. Yes. Radio button. Not checked. 1 of 2. <span green>Error: Choose at least one option</span>
- **Firefox**: To change the selection use the up or down arrow. Do you like boats? Yes. Radio button. Not checked. <span green>Error: Choose at least one option.</span> Yes. Radio button. Not checked. 1 of 2. <span green>Error: Choose at least one option</span>
- **Edge**: Do you like boats? Group. Yes. Radio button. Not checked. 1 of 2. <span green>Error: Choose at least one option</span>