export const useHelpArticleApi = () => {
    const config = useRuntimeConfig()
    const defaultOptions = {
        baseURL: config.public.apiBase,
        ...useRequestHeaders(['authorization'])
    }
    const url = defaultOptions.baseURL + '/api/articles'
    return {
        async list() {
            return useFetch(url, {
                ...defaultOptions
            })
        },
        async edit(id: number, content: string) {
            await $fetch(url, {
                method: 'POST',
                body: {
                    id: id,
                    content: content
                }
            })
        }
    }
}