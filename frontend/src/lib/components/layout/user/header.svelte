<script lang="ts">
	import { Heart, User, LibraryBig, Search, ShoppingCart } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";
	const menuItems = [
		{
			label: "Account",
			href: "/",
			icon: User
		},
		{
			label: "Cart",
			href: "/",
			icon: ShoppingCart
		},
		{
			label: "Whistlist",
			href: "/",
			icon: Heart
		}
	];
</script>

{#snippet Logo()}
	<div class="flex shrink-0 items-center gap-x-1">
		<div class="flex size-10 items-center justify-center">
			<LibraryBig />
		</div>
		<div class="text-xl font-bold">Store Book</div>
	</div>
{/snippet}

{#snippet SearchBook()}
	<div class="relative flex justify-center">
		<Input placeholder="Search books" class="w-80 rounded-full bg-[#F6F6F6] pl-4 text-xs" />
		<div class="absolute right-3 top-1/2 -translate-y-1/2">
			<Search size={16} color="#111" />
		</div>
	</div>
{/snippet}

{#snippet MenuItems()}
	{#each menuItems as item}
		<div>
			<a href={item.href} class="flex items-center gap-x-2">
				<item.icon size={16} color="#111" />
				<span class="text-sm">{item.label}</span>
			</a>
		</div>
	{/each}
{/snippet}

<header class="bg-white shadow-md">
	<div class="mx-auto flex h-20 items-center justify-between px-4 lg:max-w-[1200px]">
		<div class="flex w-full items-center gap-x-8">
			{@render Logo()}
			{@render SearchBook()}
		</div>

		<div class="flex w-full items-center justify-end gap-x-8">
			{@render MenuItems()}
		</div>
	</div>
</header>
