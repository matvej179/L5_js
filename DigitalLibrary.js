import Library from './Library.js';

export default class DigitalLibrary extends Library {
    #serverCapacityGB;

    constructor(id, name, isOpen, serverCapacityGB) {
        super(id, name, isOpen); 
        this.serverCapacityGB = serverCapacityGB;
    }

    get serverCapacityGB() {
        return this._serverCapacityGB;
    }

    set serverCapacityGB(value) {
        if (typeof value !== 'number' || value < 0) {
            console.error("Емкость сервера должна быть неотрицательным числом");
            return;
        }
        this._serverCapacityGB = value;
    }

    #archiveOldBooks() {
        throw new Error("Метод архивации недоступен для цифровой библиотеки.");
    }

    show() {
        super.show(); 
        console.log(`Емкость сервера: ${this.serverCapacityGB} GB`);
        console.log(`(Это цифровая библиотека)`);
    }

    delete() {
        super.delete();
        this.serverCapacityGB = null;
        console.log("Цифровая библиотека очищена.");
    }

    copy() {
        return this;
    }

    static clone(instance) {
        return new DigitalLibrary(
            instance.id, 
            instance.name, 
            instance.isOpen, 
            instance.serverCapacityGB
        );
    }
}