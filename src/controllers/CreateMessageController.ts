import { Request, Response } from 'express';

class CreateMessageController {
    async handle(request: Request, response: Response) {

        const { text } = request.body;

    }
}

export { CreateMessageController }