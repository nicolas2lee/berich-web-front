import {MenuElement} from "./DashboardModel";

export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const MENU_SELECTED = 'MENU_SELECTED';

export function openMenu() {
    return {
        type: OPEN_MENU,
    }
}

export function closeMenu() {
    return {
        type: CLOSE_MENU,
    }
}

export function menuSelected(menuElement: MenuElement){
    return {
        type: MENU_SELECTED,
        payload: {
            selectedMenuElement: menuElement
        }
    }
}