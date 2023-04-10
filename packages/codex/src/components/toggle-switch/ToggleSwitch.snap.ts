// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`matches the snapshot Case 0 Default: ({"disabled": false, "modelValue": true}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    id="cdx-toggle-switch-0"
    type="checkbox"
  />
  <!--v-if-->
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 1 With label: ({"disabled": false, "modelValue": true}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    id="cdx-toggle-switch-1"
    type="checkbox"
  />
  <label
    class="cdx-toggle-switch__label"
    for="cdx-toggle-switch-1"
  >
    <!-- @slot Input label content -->
    
    Label
    
  </label>
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 2 Disabled: ({"disabled": true, "modelValue": true}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    disabled=""
    id="cdx-toggle-switch-2"
    type="checkbox"
  />
  <!--v-if-->
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 3 Disabled with label: ({"disabled": true, "modelValue": true}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    disabled=""
    id="cdx-toggle-switch-3"
    type="checkbox"
  />
  <label
    class="cdx-toggle-switch__label"
    for="cdx-toggle-switch-3"
  >
    <!-- @slot Input label content -->
    
    Label
    
  </label>
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
</span>
`;
