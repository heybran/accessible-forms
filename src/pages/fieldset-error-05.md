---
layout: ../layouts/PageLayout.astro
title: "Radio group with error - aria-label applied to <fieldset>"
original: "https://russmaxdesign.github.io/accessible-forms/fieldset-error05.html"
description: |
  This is a test case designed to determine how an error message associated with a radio group will be announced by various screen readers.
tags: ["fieldset"]
---

This is a test case designed to determine how an error message associated with a radio group will be announced by various screen readers.

## Example

  <form action="#">
    <fieldset aria-label="Do you like boats? Error: Choose at least one option">
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
  <fieldset aria-label="Do you like boats? Error: Choose at least one option">
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

### VoiceOver - tested by me on 2024.12.22 with macOS 14.3.1
- **Brave**: Do you like boats? <span green>Error: Choose at least one option</span>, group <span yellow>(when VoiceOver cursor is focused on the fieldset element)</span>
- **Firefox**: Do you like boats? <span green>Error: Choose at least one option</span>, group <span yellow>(when VoiceOver cursor is focused on the fieldset element)</span>
- **Safari**: Do you like boats? <span green>Error: Choose at least one option</span>, group <span yellow>(when VoiceOver cursor is focused on the fieldset element)</span>

### VoiceOver
- **Chrome**: Yes. Radio button. 1 of 2. <span green>Do you like boats? Error: Choose at least one option Group.</span>
- **Firefox**: Yes. Radio button. 1 of 2. <span green>Do you like boats? Error: Choose at least one option Group.</span>
- **Safari**: Yes. Radio button. 1 of 2. <span red>Do you like boats? Error: Choose at least one option</span> <span green>Do you like boats? Error: Choose at least one option</span> Group. <span red>[Legend announced twice]</span>

### NVDA
- **Chrome**: Do you like boats? <span green>Error: Choose at least one option.</span> Grouping. Yes. Radio button. Not checked. 1 of 2.
- **Firefox**: Do you like boats? <span green>Error: Choose at least one option.</span> Grouping. Yes. Radio button. Not checked. 1 of 2.
- **Edge**: Do you like boats? <span green>Error: Choose at least one option.</span> Grouping. Yes. Radio button. Not checked. 1 of 2.

### JAWS
- **Chrome**: Do you like boats? <span green>Error: Choose at least one option.</span> Group. Yes. Radio button. Not checked. 1 of 2.
- **Firefox**: To change the selection use the up or down arrow. Do you like boats? <span green>Error: Choose at least one option.</span> Yes. Radio button. Not checked. Yes. Radio button. Not checked. 1 of 2.
- **Edge**: Do you like boats? <span green>Error: Choose at least one option.</span> Group. Yes. Radio button. Not checked. 1 of 2.