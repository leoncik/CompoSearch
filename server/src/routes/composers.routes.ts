import { Router } from 'express';
import {
    getComposerDetailController,
    getComposersController,
} from '../controllers/composer.controller';

const composersRouter = Router();

/**
 * @openapi
 * /composers:
 *  get:
 *     tags:
 *     - Composers
 *     description: Returns a list of composers
 *     parameters:
 *       - in: query
 *         name: name
 *         type: string
 *         required: false
 *         description: Name of the composer to find
 *     responses:
 *       200:
 *         description: Successfully fetched composers
 *
 */
export default composersRouter.get('/', getComposersController);

/**
 * @openapi
 * /composers/{composerId}:
 *  get:
 *     tags:
 *     - Composers
 *     description: Returns details of a specific composer
 *     parameters:
 *       - in: path
 *         name: composerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the composer to retrieve
 *     responses:
 *       200:
 *         description: Successfully fetched composer's detail
 *       404:
 *         description: Composer not found
 *
 */
composersRouter.get('/:composerId', getComposerDetailController);
