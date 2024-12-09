{#snippet TextHero()}
<div class="flex flex-col gap-y-[9px]">
    <h1 class="text-5xl font-semibold">Lorem ipsum</h1>
    <p class="text-lg font-normal max-w-[607px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, 
        lacus ut magna velit eleifend. Amet, quis urna, a eu.
    </p>
</div>
{/snippet}

{#snippet ImageHero()}
<div>
    <img src="/images/hero.png" alt="Hero" class="w-full h-full object-cover" />
</div>
{/snippet}

<section class="flex gap-x-2 lg:max-w-[1200px] mx-auto">
    {@render TextHero()}
    {@render ImageHero()}
</section>