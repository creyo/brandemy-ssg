<script>
	import './styles.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

</script>

<div class="app">
 
	<Header/>
 
	<main>
		<slot />
	</main>
	<Footer/>	
</div>