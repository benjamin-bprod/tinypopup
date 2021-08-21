import PopupOptions from '../interface/PopupOptions';
import DOMHandler from './DOMHandler';

export default class TinyPopup {
    options: PopupOptions = {
        content: null,
        url: null,
        callback: null,
        name: null,
        title: null,
        appendElement: null
    };
    DOMEngine: DOMHandler = new DOMHandler();
    overlay?: HTMLElement;
    popup?: HTMLElement;
    isOpening: boolean = false;

    constructor(options: PopupOptions) {
        this.initOptions(options);
        this.DOMEngine.initPopupElements();
    }

    /**
     * Merge options and check if one content is set
     * @param options {PopupOptions}
     */
    private initOptions(options: PopupOptions): void {
        try {
            this.options = Object.assign(this.options, options);
        } catch(e) {
            console.error(e);
        }
    }

    open() {
        try {
            if(!(this.options.content || this.options.url)) {
                throw new Error('TinyPopup need at least a content or a url.');
            }
        } catch(e) {
            console.error(e);
        }
    }
}