export default class Library {
    #hasArchives; 

    constructor(id, name, isOpen) {
        this.id = id;
        this.name = name;
        this.isOpen = isOpen;
        this.#hasArchives = false;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error("ID должен быть положительным числом");
            return;
        }
        this._id = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.error("Название должно быть непустой строкой");
            return;
        }
        this._name = value;
    }

    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (typeof value !== 'boolean') {
            console.error("Статус должен быть булевым значением");
            return;
        }
        this._isOpen = value;
    }

    show() {
        console.log(`--- Информация о библиотеке ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Название: ${this.name}`);
        console.log(`Открыта: ${this.isOpen}`);
        console.log(`Есть архивы: ${this.#hasArchives}`);
        console.log(`--------------------------------`);
    }

    delete() {
        this.id = null;
        this.name = null;
        this.isOpen = null;
        this.#hasArchives = null;
        console.log("Экземпляр библиотеки очищен.");
    }

    copy() {
        return this; 
    }

    #archiveOldBooks() {
        this.#hasArchives = true;
        console.log("Старые книги успешно архивированы.");
    }

    performArchiving() {
        this.#archiveOldBooks();
    }

    static clone(instance) {
        return new Library(instance.id, instance.name, instance.isOpen);
    }
}