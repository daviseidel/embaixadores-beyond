import PocketBase from 'pocketbase';
const pb = new PocketBase('https://embaixadores-beyond.pockethost.io');

export async function load() {
  const resultList = await pb.collection('embaixadores').getList(1, 50, {
     filter: 'confirmado = false',
  });
  console.log(resultList.items);
	return resultList;
}
