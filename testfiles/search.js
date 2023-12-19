type Handler = (keyword: string) => SearchResult[] | Promise<SearchResult[]>

interface SearchResult {
  title: string
  link: string
  label: string?
  description: string?
}