// @ts-ignore
import style from '../assets/index.css';

export default class DOMHandler {
    body = document.getElementsByTagName('body')[0];
    head = document.getElementsByTagName('head')[0];
    overlay?: HTMLElement;

    initPopupElements(): void {
        try {
            this.addCSS();
            this.createOverlay();
        } catch(e) {
            console.error(e);
        }
    }

    /**
     * Add all style popup in HEAD element
     */
    addCSS(): void {
        let styleElement = document.createElement('STYLE');
        styleElement.id = "tinypopup-style";
        styleElement.innerHTML = style.toString();
        this.head.append(styleElement);
    }

    /**
     * Create overlay
     */
    createOverlay(): void {
        this.overlay = document.createElement('DIV');
        this.overlay.classList.add('tinypopup-overlay');
        this.body.append(this.overlay);
    }

    activeOverlay(): void {
        if(!this.overlay.classList.contains('active')) {
            this.overlay.classList.add('active');
        }
        this.overlay.classList.remove('unactive');
    }

    unactiveOverlay(): void {
        this.overlay.classList.add('unactive');
    }
}