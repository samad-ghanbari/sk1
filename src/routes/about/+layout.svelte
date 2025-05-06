<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-purple-100">
	<div class="flex h-screen flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-gray-800">Welcome to About!</h1>
		{@render children()}
	</div>
</div>
