


export class DashboardMenu {
    menu: Array<MenuElement>

    constructor(menu: Array<MenuElement>) {
        this.menu = menu;
    }

}

export class MenuElement {
    label: String

    constructor(label: String) {
        this.label = label;
    }
}