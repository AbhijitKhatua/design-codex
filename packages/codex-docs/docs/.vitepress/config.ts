import { defineConfig } from 'vitepress';

export default defineConfig( {
	lang: 'en-US',
	title: 'Codex',
	description: 'Toolkit for building user interfaces within the Wikimedia Design System',
	base: process.env.CODEX_DOC_ROOT || '/',

	themeConfig: {
		repo: 'wikimedia/design-codex',
		docsDir: 'vitepress/docs',
		lastUpdated: 'Last updated',

		sidebar: {
			'/': [
				{
					text: 'Introduction',
					children: [
						{ text: 'About', link: '/' },
						{ text: 'Usage', link: '/introduction/usage' },
						{ text: 'Packages', link: '/introduction/packages' }
					]
				},
				{
					text: 'Contributing',
					children: [
						{ text: 'Guidelines', link: '/contributing/guidelines' },
						{ text: 'Designing components', link: '/contributing/designing-components' },
						{ text: 'Contributing code', link: '/contributing/contributing-code' },
						{ text: 'Working with TypeScript', link: '/contributing/typescript' }
					]
				},
				{
					text: 'Components',
					children: [
						{ text: 'Button', link: '/components/button' },
						{ text: 'ButtonGroup', link: '/components/button-group' },
						{ text: 'Card', link: '/components/card' },
						{ text: 'Checkbox', link: '/components/checkbox' },
						{ text: 'Combobox', link: '/components/combobox' },
						{ text: 'Icon', link: '/components/icon' },
						{ text: 'Lookup', link: '/components/lookup' },
						{ text: 'Menu', link: '/components/menu' },
						{ text: 'MenuItem', link: '/components/menu-item' },
						{ text: 'Message', link: '/components/message' },
						{ text: 'ProgressBar', link: '/components/progress-bar' },
						{ text: 'Radio', link: '/components/radio' },
						{ text: 'SearchInput', link: '/components/search-input' },
						{ text: 'Select', link: '/components/select' },
						{ text: 'Tab', link: '/components/tab' },
						{ text: 'Tabs', link: '/components/tabs' },
						{ text: 'TextInput', link: '/components/text-input' },
						{ text: 'Thumbnail', link: '/components/thumbnail' },
						{ text: 'ToggleButton', link: '/components/toggle-button' },
						{ text: 'ToggleButtonGroup', link: '/components/toggle-button-group' },
						{ text: 'ToggleSwitch', link: '/components/toggle-switch' },
						{ text: 'TypeaheadSearch', link: '/components/typeahead-search' }
					]
				},
				{
					text: 'Icons',
					children: [
						{ text: 'Overview', link: '/icons/overview' },
						{ text: 'List of all icons', link: '/icons/all-icons' },
						{ text: 'Adding new icons', link: '/icons/adding-new' }
					]
				},
				{
					text: 'Design Tokens',
					children: [
						{ text: 'Overview', link: '/design-tokens/overview' },
						{ text: 'Animation', link: '/design-tokens/animation' },
						{ text: 'Border', link: '/design-tokens/border' },
						{ text: 'Box-shadow', link: '/design-tokens/box-shadow' },
						{ text: 'Box-sizing', link: '/design-tokens/box-sizing' },
						{ text: 'Color', link: '/design-tokens/color' },
						{ text: 'Cursor', link: '/design-tokens/cursor' },
						{ text: 'Font', link: '/design-tokens/font' },
						{ text: 'Opacity', link: '/design-tokens/opacity' },
						{ text: 'Outline', link: '/design-tokens/outline' },
						{ text: 'Padding', link: '/design-tokens/padding' },
						{ text: 'Position', link: '/design-tokens/position' },
						{ text: 'Size', link: '/design-tokens/size' },
						{ text: 'Spacing', link: '/design-tokens/spacing' },
						{ text: 'Transition', link: '/design-tokens/transition' },
						{ text: 'Z-Index', link: '/design-tokens/z-index' }
					]
				},
				{
					text: 'Decisions – ADRs',
					children: [
						{ text: 'Overview', link: '/adrs/overview' },
						{ text: 'ADR 1 - Design Tokens', link: '/adrs/01-adr-design-tokens' },
						{ text: 'ADR 2 - Demo tool', link: '/adrs/02-adr-demo-tool' },
						{ text: 'ADR 3 - String types in TypeScript', link: '/adrs/03-adr-string-types' }
					]
				}
			]
		}
	}
} );
