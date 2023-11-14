<script>
  import { onMount } from 'svelte';
  import Spinner from '../../components/Spinner.svelte';

export let data;
let blog = data.data;
let body = "";
let title = "";
let authorName = "";
let Date = "";
let image = '';
let isLoading = true;
	
	onMount(async () => {
   if(blog){
    body = blog.body
    title = blog.title
    authorName = blog.authors.name
    Date =  blog.date
    image = blog.featured_image
    isLoading = false;
   }
  })


</script>
<svelte:head>
    <title>{title} | Brandemy</title>
</svelte:head>
{#if isLoading}
<Spinner/>
{:else}
{#if blog}
<section class="blog-hero">
    <div class="blog-hero-container container">
        <h1>{title}</h1>
        <div class="flex">
            <p>{authorName}</p>
            <p>{Date}</p>
        </div>
        <div class="blog-image">
            <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1698497773/brandemy/blog/${image}`}  alt="" height="400px" width="700px">
        </div>
    </div>
</section>
<div class="content">
    {@html body}
</div>
{:else}
  <p>Blog post not found</p>
{/if}
{/if}
