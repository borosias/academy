const EventEmitter = require('events');

class Modal extends EventEmitter {
    constructor() {
        super();
        this.isOpen = false;
    }

    open() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.emit('open');
        }
    }

    close() {
        if (this.isOpen) {
            this.isOpen = false;
            this.emit('close');
        }
    }
}

const modal = new Modal();

modal.on('open', () => {
    console.log('Модальное окно открыто');
});

modal.on('close', () => {
    console.log('Модальное окно закрыто');
});

modal.open();

setTimeout(() => {
    modal.close()
},5000)

