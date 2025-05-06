<script lang="ts">
	import '../../../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col bg-red-100">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-gray-800">Welcome to Market!</h1>
		{@render children()}
	</div>
</div>
