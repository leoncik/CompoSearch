import pool from '../config/db';

export const getComposerDetailsDb = async (composerId: string) => {
    const query = `
        SELECT cd.id, cd.composer_id, cd.birthdate, cd.nationality, cd.biography,
               c.last_name, c.first_name, c.avatar_file_name
        FROM COMPOSER_DETAIL cd
        JOIN COMPOSERS c ON cd.composer_id = c.id
        WHERE cd.id = $1`;
    const result = await pool.query(query, [composerId]);
    return result.rows[0];
};
