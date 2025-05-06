<script lang="ts">
	import '../../app.css';

	export let children;
</script>

<div class="flex min-h-screen flex-col bg-blue-100">
	<div class="flex h-screen flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-gray-800">Welcome to SvelteKit!</h1>
		{@render children()}
	</div>
</div>
