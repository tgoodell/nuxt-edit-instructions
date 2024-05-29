export const useHelpArticleApi = () => {
    const config = useRuntimeConfig()
    const defaultOptions = {
        baseURL: config.public.apiBase,
        ...useRequestHeaders(['authorization'])
    }
    const url = defaultOptions.baseURL + 'api/articles'
    return {
        async list() {
            return useFetch(url, {
                ...defaultOptions
            })
        }
    }
}