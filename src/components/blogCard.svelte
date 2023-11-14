<script>
// @ts-nocheck

    import image from '$lib/images/blog-image.png'
    /**
   * @type {{ authors: { name: any; }; }}
   */
     export let blog;
    
</script>
<a href="{blog.url}">
<div class="blog-card">
    <div class="flex">
        <p>Branding Strategies</p>
        <p>{blog.authors.name}</p>
    </div>
    <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1698497773/brandemy/blog/${blog.featured_image}`} alt="" height="215px" width="375px">
    <h2>{blog.title}</h2>
    <p>{blog.seo_description}</p>
</div>
</a>
