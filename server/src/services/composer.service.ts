import { getComposerDetailsDb, getComposersDb } from '../db/composer.db';

class ComposerService {
    getComposers = async (name: string | undefined) => {
        try {
            const composers = await getComposersDb(name);
            return composers.rows;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    };

    getComposerDetails = async (composerId: string) => {
        const composerDetail = await getComposerDetailsDb(composerId);
        if (!composerDetail) {
            throw new Error('Composer not found');
        }
        return composerDetail;
    };
}

export default new ComposerService();
