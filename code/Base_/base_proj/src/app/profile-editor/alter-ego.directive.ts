import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from "rxjs";
import { HeroesService } from "./hero.service";

@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
    constructor(private heroesService: HeroesService) { }

    validate(
        control: AbstractControl
    ): Observable<ValidationErrors | null> {
        return this.heroesService.isAlterEgoTaken(control.value).pipe(
            map(isTaken => {
                console.log('isTaken>>> ', isTaken);
                return (isTaken ? { uniqueAlterEgo: true } : null)
            }),
            catchError(() => of(null))
        );
    }
}