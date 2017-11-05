import { Inject, NgZone } from '@angular/core';

import { StorageUtils } from './storageutils';

export class TagsPage {
    tags: Array<any>;
    constructor() {
        this.getTags();
    }
    getTags(): void {
        this.tags = StorageUtils.getTags();
        if (this.tags.length > 0) {
            this.tags.forEach((tag) => tag.date = new Date(tag.date));
        }
    }
}