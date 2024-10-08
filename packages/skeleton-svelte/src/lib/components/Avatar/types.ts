import type { Snippet } from 'svelte';

export interface AvatarProps {
	/** Set avatar image source URL. */
	src?: string;
	/** The source set of the avatar image. */
	srcset?: string;
	/** Provide a name or username for the avatar. */
	name: string;
	/** Set avatar image filter name, such as: "#Apollo". */
	filter?: string;

	// Root ---
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	background?: string;
	/** Set size styles. */
	size?: string;
	/** Set font styles. */
	font?: string;
	/** Set border styles. */
	border?: string;
	/** Set border radius styles. */
	rounded?: string;
	/** Set shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Image ---
	/** Set avatar image base styles. */
	imageBase?: string;
	/** Provide avatar image arbitrary CSS classes. */
	imageClasses?: string;

	// Fallback ---
	/** Set base classes for the fallback element. */
	fallbackBase?: string;
	/** Provide arbitrary CSS classes to fallback element. */
	fallbackClasses?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}