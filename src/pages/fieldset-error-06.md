---
layout: ../layouts/PageLayout.astro
title: "Radio group with error - aria-label applied to <input>"
original: "https://russmaxdesign.github.io/accessible-forms/fieldset-error06.html"
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
        <input type="radio" id="boats-y" name="boats" aria-label="Yes. Error: Choose at least one option">
        <label for="boats-y">Yes</label>
      </div>
      <div class="form-group">
        <input type="radio" id="boats-n" name="boats" aria-label="No. Error: Choose at least one option">
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
      <input type="radio" id="boats-y" name="boats" aria-label="Yes. Error: Choose at least one option">
      <label for="boats-y">Yes</label>
    </div>
    <div class="form-group">
      <input type="radio" id="boats-n" name="boats" aria-label="No. Error: Choose at least one option">
      <label for="boats-n">No</label>
    </div>
    <p class="error-message" id="e01">Error: Choose at least one option</p>
  </fieldset>
</form>
```

## Assistive technologies

### VoiceOver - tested by me on 2024.12.22 with macOS 14.3.1
- **Brave**: Yes. <span green>Error: Choose at least one option</span>, radio button, 1 of 2 <span yellow>(when VoiceOver cursor is focused on the input element)</span>
- **Firefox**: Yes. <span green>Error: Choose at least one option</span>, Yes, radio button, 1 of 2 <span yellow>(when VoiceOver cursor is focused on the input element)</span>
- **Safari**: Yes. <span green>Error: Choose at least one option</span>, radio button, 1 of 2 <span yellow>(when VoiceOver cursor is focused on the input element)</span>

### VoiceOver
- **Chrome**: Yes. <span green>Error: Choose at least one option.</span> Radio button. 1 of 2. Do you like boats? Group.
- **Firefox**: Yes. <span green>Error: Choose at least one option.</span> Radio button. 1 of 2. Do you like boats? Group.
- **Safari**: Yes. <span green>Error: Choose at least one option.</span> Radio button. 1 of 2. Do you like boats? Group.

### NVDA
- **Chrome**: Do you like boats? Grouping. Yes. <span green>Error: Choose at least one option.</span> Radio button. Not checked. 1 of 2.
- **Firefox**: Do you like boats? Grouping. <span green>Yes. Error: Choose at least one option.</span> Radio button. Not checked. 1 of 2..
- **Edge**: Do you like boats? Grouping. Yes. <span green>Error: Choose at least one option.</span> Radio button. Not checked. 1 of 2.

### JAWS
- **Chrome**: Do you like boats? Group. Yes. <span green>Error: Choose at least one option.</span> Radio button. Not checked. 1 of 2.
- **Firefox**: To change the selection use the up or down arrow. Do you like boats? Yes. <span green>Error: Choose at least one option.</span> Radio button. Not checked. Yes. Error: Choose at least one option. Radio button. Not checked. 1 of 2.
- **Edge**: Do you like boats? Group. Yes. <span green>Error: Choose at least one option. Radio button.</span> Not checked. 1 of 2.