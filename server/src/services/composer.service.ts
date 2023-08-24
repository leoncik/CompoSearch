import { getComposerDetailsDb } from '../db/composer.db';

class ComposerService {
    getComposerDetails = async (composerId: string) => {
        const composerDetail = await getComposerDetailsDb(composerId);
        if (!composerDetail) {
            throw new Error('Composer not found');
        }
        return composerDetail;
    };
}

export default new ComposerService();
