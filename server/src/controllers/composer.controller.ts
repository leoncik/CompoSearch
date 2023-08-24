import { Request, Response } from 'express';
import composerService from '../services/composer.service';

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
