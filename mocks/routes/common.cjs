const articles = require('../fixtures/help-articles.ts')

module.exports = [
    {
      id: 'get-articles', // route id
      url: '/api/articles', // url in express format
      method: 'GET', // HTTP method
      variants: [
        {
          id: 'success', // variant id
          type: 'middleware', // variant handler id
          options: {
            middleware: (req, res, next, core) => {
                res.status(200)
                res.send(articles)
            //   let search = req.query.search
            //   if (search) {
            //     search = search.toLowerCase()
            //     const matchedData = definitions.filter(entry => queryEntry(entry, search))
            //     res.status(200)
            //     res.send(matchedData)
            //   }
            //   else {
            //     res.status(200)
            //     res.send(definitions)
            //   }
            },
          },
        },
      ],
    },
  ]