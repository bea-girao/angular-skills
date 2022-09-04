import { Injectable } from '@angular/core';
import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    public loading: boolean;

    constructor(private httpClient: HttpClient) { }

    public like(id: number) {
        this.loading = true;
        return new Promise((resolve) => {
            this.httpClient.post('/api/like', id).subscribe((cardAtualizado) => {
                this.loading = false;
                resolve(cardAtualizado);
            });
        });

    }
}
