import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

const ALTER_EGOS = ['Eric'];

@Injectable({ providedIn: 'root' })
export class HeroesService {
    isAlterEgoTaken(alterEgo: string): Observable<boolean> {
        console.log('alterEgo name>>>', alterEgo);

        const isTaken = ALTER_EGOS.includes(alterEgo);
        return of(isTaken).pipe(delay(400));
    }
}