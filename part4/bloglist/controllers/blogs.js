const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user')
    response.json(blogs)
})



blogsRouter.post('/', async (request, response) => {
    const body = request.body
    // console.log(body)

    if (!body.title || !body.url) {
        return response.status(400).end()
    }
    const user = await User.findOne({})

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: (body.likes) ? body.likes : 0,
        user: user._id
    })
    console.log(blog)

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog)

})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body
    const updatedBlog = {
        title: body.title,
        likes: body.likes
    }

    await Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true})
    response.json(updatedBlog)
})

module.exports = blogsRouter