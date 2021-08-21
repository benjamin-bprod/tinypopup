'use strict'

/**
 * Interface for TinyPopup's options
 */
export default interface PopupOptions {
    content?: string;
    url?: string;
    callback?: any;
    name?: string;
    title?: string;
    appendElement?: HTMLElement | string;
}