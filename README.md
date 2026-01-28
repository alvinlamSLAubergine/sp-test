# SP Test
- Using the `List` component from `./src/list` and the `useFetchData` hook from `./src/Api.ts`
  1. Create a list of the names of all Pokemon from `https://pokeapi.co/api/v2/pokemon`
  <!-- 2. Create a `Loading` screen to be shown while the list is being fetched -->
  3. Create a `prev` and `next` button to show the previous/next set of pokemons
  <!-- 4. Create a dropdown to choose how many pokemons should be shown (and fetched) per page -->
  5. Create a `debounce` system so that the `useFetchData` hook doesn't trigger immediately when user clicks on `prev` or `next`