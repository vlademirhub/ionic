import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Autor } from "../model/autor";

@Injectable()
export class AutorService {

        constructor(private http: HttpClient) { }

            getAutores() : Observable<Autor[]>{
                return this.http.get<Autor[]>(
                    'http://www.mocky.io/v2/5c4f75963300005f00c5846d');
            }
}
