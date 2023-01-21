// src/mocks/handlers.js
import { rest } from 'msw'

function User(id) {
    this.firstName = "John_" + id
    this.lastName = "Doe_" + id
    this.registered = "2022-02-01"
    this.login = "john_doe_" + id
    this.email = this.login + "@maildomain.com"
}

export const handlers = [
    rest.get('https://mydomain.com/users/:id', (req, res, ctx) => {

        const { id } = req.params

        return res(
            ctx.status(200),
            ctx.json(
                new User(id)
            ),
        )
    }),
]
