import { Request, Response } from 'express';
import composerService from '../services/composer.service';

export const getComposersController = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        if (typeof name === 'string' || typeof name === 'undefined') {
            const composers = await composerService.getComposers(name);
            res.json(composers);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getComposerDetailController = async (
    req: Request,
    res: Response
) => {
    try {
        const composerId = req.params.composerId;
        const composerDetail =
            await composerService.getComposerDetails(composerId);
        res.json(composerDetail);
    } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
            if (error.message === 'Composer not found') {
                res.status(404).json({ error: 'Composer not found' });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
