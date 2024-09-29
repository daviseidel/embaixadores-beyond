<script>
  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://embaixadores-beyond.pockethost.io');

  export let data;
  async function updateData(id) {
    const record = await pb.collection('embaixadores').update(id, {"confirmado": true});
    console.log(record);
    fetch('https://embaixadores-beyond.vercel.app/api/send?nome=' + record.nome + '&codigo=' + record.codigo +'&email=' + record.email);
    goto('/confirm');
  }
</script>

{#each data.items as item}
   <button class="block card card-hover p-4" on:click={updateData(item.id)}>{item.codigo}</button> 
{/each}
