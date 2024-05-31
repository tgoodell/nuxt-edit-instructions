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
        async edit(slug: string, content: string) {
            await $fetch(url, {
                method: 'POST',
                body: {
                    slug: slug,
                    content: content
                }
            })
        },
        async find(slug: string) {
            try {
                const data = await $fetch(url, {
                    ...defaultOptions
                })
                return await data.find(art => art['slug'] === slug)
            }
            catch (e) {
                console.log(e)
                return { error: 'Network Error' }
            }
        }
    }
}