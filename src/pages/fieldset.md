---
layout: ../layouts/PageLayout.astro
title: "Basic fieldset and legend"
original: "https://russmaxdesign.github.io/accessible-forms/fieldset.html"
description: |
  This is a test case designed to determine how the fieldset and legend elements are announced in relation to an input by various screen readers.
tags: ["fieldset"]
---

This is a test case designed to determine how the [<code>\<fieldset></code>](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) and [<code>\<legend></code>](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) elements are announced in relation to an [<code>\<input></code>](https://html.spec.whatwg.org/multipage/input.html#the-input-element) by various screen readers.

## Example

<form action="#">
    <fieldset>
      <legend>Contact details</legend>
      <div class="form-group">
        <label class="label" for="name">Full name</label>
        <input class="input" type="text" id="name">
      </div>
    </fieldset>
  </form>

## Code

```html
<form action="#">
  <fieldset>
    <legend>Contact details</legend>
    <div class="form-group">
      <label class="label" for="name">Full name</label>
      <input class="input" type="text" id="name" />
    </div>
  </fieldset>
</form>
```

## Assistive technologies

### VoiceOver

- **Chrome**: Full name. Edit text. Contact details. Group.
- **Firefox**: Full name. Edit text. Contact details. Group.
- **Safari**: Full name. Edit text. Contact details. Contact details. Group. [Legend announced twice]