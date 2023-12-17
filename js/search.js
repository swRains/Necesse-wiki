// Fetch this from your API
var SearchResult = [
    { title: 'Title', link: 'title1', label: 'Label is optional', description: 'Description is optional' },
    { title: 'Another', link: 'another' },
    { title: 'One more', link: 'one-more' },

];
const searchBar = entries => {
    return {
        name: 'searchBar',
        extend(api) {
            api.enableSearch(
                {
                    handler: keyword => {
                        return entries.filter(value =>
                            value.title.toLowerCase().includes(keyword.toLowerCase()))
                    }
                }
            );
        }
    }
}
