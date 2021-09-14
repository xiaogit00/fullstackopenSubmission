const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})



blogsRouter.post('/', async (request, response) => {
    const body = request.body
    // console.log(body)

    if (!body.title || !body.url) {
        return response.status(400).end()
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: (body.likes) ? body.likes : 0
    })
    console.log(blog)

    const savedBlog = await blog.save()

    response.json(savedBlog)

})

module.exports = blogsRouter
