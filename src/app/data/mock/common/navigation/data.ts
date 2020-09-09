/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TreoNavigationItem[] = [
    {
        id      : 'manager',
        title   : 'Db Manager',
        subtitle: 'Gestionar bases de datos',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'manager.projects',
                title: 'Proyectos',
                type : 'collapsable',
                icon: "dns",
                children: [
                    {
                        id: 'manager.projects.new',
                        type: 'basic',
                        title: 'Nuevo',  
                        icon: 'add',                      
                        link: '/projects/new'
                    },
                    {
                        id: 'manager.projects.mine',
                        type: 'basic',
                        title: 'Mis proyectos',  
                        icon: 'list',                   
                        link: '/projects/list'
                    }
                ]
            },
            {
                id   : 'manager.collections',
                title: 'Colecciones',
                type : 'collapsable',
                icon: "heroicons_solid:collection",
                children: [
                    {
                        id: 'manager.collections.new',
                        type: 'basic',
                        title: 'Nuevo',
                        icon: 'add',
                        link: '/collections/new'
                    },
                    {
                        id: 'manager.collections.mine',
                        type: 'basic',
                        title: 'Mis colecciones',
                        icon: 'list',
                        link: '/collections/list'

                    }
                ]
            },

            {
                id   : 'manager.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon: "dashboard",
                link : '/dashboard'
            },

            {
                id   : 'manager.configuration',
                title: 'Configuración',
                type : 'basic',
                icon : 'settings',
                link : '/configuration'
            },
            /*{
                id   : 'starter.dummy.2',
                title: 'Dummy menu item #1',
                type : 'basic'
            }*/
        ]
    }
];
export const compactNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'aside',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: TreoNavigationItem[] = [
    {
        id   : 'starter.example',
        title: 'Example component',
        type : 'basic',
        icon : 'heroicons:chart-pie',
        link : '/example'
    },
    {
        id   : 'starter.dummy.1',
        title: 'Dummy menu item #1',
        icon : 'heroicons:calendar',
        type : 'basic'
    },
    {
        id   : 'starter.dummy.2',
        title: 'Dummy menu item #1',
        icon : 'heroicons:user-group',
        type : 'basic'
    }
];
export const horizontalNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'group',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
