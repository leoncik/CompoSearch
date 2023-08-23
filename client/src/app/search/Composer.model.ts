export interface Composer {
    id: number;
    first_name: string;
    last_name: string;
    avatar_file_name: string;
}

export interface ComposerDetails {
    id: number;
    composer_id: number;
    birthdate: string;
    nationality: string;
    biography: string;
    first_name: string;
    last_name: string;
    avatar_file_name: string;
}
