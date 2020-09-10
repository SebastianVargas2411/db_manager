export interface Project{
    id_project?: Number;
    id_user?: Number;
    title: string;
    alias: string;
    image: string;
    color_principal: string;
    color_text: string
    created_at?: Date;
    api_key?: string;
    access_control: boolean;
}