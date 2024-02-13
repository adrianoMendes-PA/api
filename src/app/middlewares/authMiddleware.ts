import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

require('dotenv/config');

import authConfig from '../../config/auth';

interface TokenPayload {
    id: string,
    iat: number,
    exp: number
}

export default function authUSuario(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Token não existe.' });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, authConfig.secret) as TokenPayload;

        const { id } = data;

        req.userId = id;

        return next();
    } catch {
        return res.status(401).json({ error: 'Token inválido.' });
    }
}