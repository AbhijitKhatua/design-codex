<template>
	<div role="group" aria-labelledby="cdx-demo-checkbox-group-label">
		<cdx-label id="cdx-demo-checkbox-group-label">
			Checkbox group demo
		</cdx-label>

		<cdx-checkbox
			v-for="checkbox in checkboxes"
			:key="'checkbox-' + checkbox.value"
			v-model="checkboxValue"
			:input-value="checkbox.value"
			:disabled="checkbox.disabled"
			:indeterminate="checkbox.indeterminate"
			@update:model-value="onUpdate"
		>
			{{ checkbox.label }}
		</cdx-checkbox>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { CdxCheckbox, CdxLabel } from '@wikimedia/codex';

export default defineComponent( {
	name: 'CheckboxGroup',
	components: { CdxCheckbox, CdxLabel },
	setup() {
		const checkboxValue = ref( [ 'checkbox-2', 'checkbox-6' ] );
		const checkboxes = [
			{
				label: 'Checkbox 1',
				value: 'checkbox-1',
				disabled: false
			},
			{
				label: 'Checkbox 2 (initially selected)',
				value: 'checkbox-2',
				disabled: false
			},
			{
				label: 'Checkbox 3, which has a very long label that spans onto a second line to demonstrate what happens when text wraps',
				value: 'checkbox-3',
				disabled: false
			},
			{
				label: 'Checkbox 4 (indeterminate)',
				value: 'checkbox-4',
				indeterminate: true,
				disabled: false
			},
			{
				label: 'Checkbox 5 (disabled)',
				value: 'checkbox-5',
				disabled: true
			},
			{
				label: 'Checkbox 6 (initially selected, disabled)',
				value: 'checkbox-6',
				disabled: true
			}
		];

		function onUpdate( value ) {
			// eslint-disable-next-line no-console
			console.log( 'update:modelValue event emitted with value:', value );
		}

		return {
			checkboxValue,
			checkboxes,
			onUpdate
		};
	}
} );
</script>
