<script>
  import { goto } from '$app/navigation';

  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://embaixadores-beyond.pockethost.io');

  let name = '';
  let email = '';
  let code = '';

  const handleSubmit = async () => {
    if (name && email && code) {
      const record = await pb.collection('embaixadores').create(
        { 
          "nome": name, 
          "email": email, 
          "codigo": code,
          "confirmado": false
        });
      fetch('https://embaixadores-beyond.vercel.app/api/create?nome=' + name + '&codigo=' + code);
      goto('/thanks');
    }
  };

</script>

<section class="container mx-auto p-8">
  <div class="">
    <h1 class="h1 mb-3">Inscreva-se para ser embaixador Beyond</h1>
    <p class="p">Preencha o formulário abaixo para se inscrever no programa de embaixadores Beyond.</p>
  </div>

  <form on:submit|preventDefault={handleSubmit} class="space-y-4 mt-4">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Nome</span>
      </label>
      <input type="text" bind:value={name} placeholder="Digite seu nome" class="input input-bordered w-full" required />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">E-mail</span>
      </label>
      <input type="email" bind:value={email} placeholder="Digite seu e-mail" class="input input-bordered w-full" required />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Código de Embaixador</span>
      </label>
      <input type="text" bind:value={code} placeholder="Digite seu código" class="input input-bordered w-full" required />
    </div>

    <button type="submit" class="btn variant-filled w-full">Enviar</button>
  </form>
</section>
