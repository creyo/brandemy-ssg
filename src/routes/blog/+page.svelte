<svelte:head>
    <title>Brandemy | Blogs</title>
</svelte:head>
<script>
// @ts-nocheck
import Spinner from '../../components/Spinner.svelte';
import BlogCard from '../../components/blogCard.svelte';
import { onMount } from 'svelte';
/** @type {import('./$types').PageData} */
export let data; 
let  blogs = data.data;
let isLoading = true;

    onMount(async () => {
		if (blogs) {
            isLoading = false;
		}
	});

</script>

<section class="blogs-hero">
    <div class="blogs-hero-container container">
        <div class="hero-text">
            <h1>Brandemy</h1>
            <h3>Your Brand, Instantly Owned</h3>
        </div>
        <div class="hero-para">        
        <p>one-stop brand identity solution, offers short and memorable brand names,
        complete with domain names, logos, and stationery design. Say goodbye to months of
         searching and hello to owning your brand name in minutes with our seamless services.</p>
        </div>
    </div>
</section>
<div class="container blogs-heading">
    <h3>Blog Posts from Brandemy</h3>
    <div class="line"></div>
</div>

<div class="blogs-grid container">
    {#if isLoading}
<Spinner/>
{:else}
    {#each blogs as blog}
    <BlogCard {blog} />
    {/each}
{/if}
</div>

