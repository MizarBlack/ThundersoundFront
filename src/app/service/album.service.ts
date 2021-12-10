import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';

const baseUrl = 'http://localhost:8081/album';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(baseUrl);
  }

  get(id: any): Observable<Album> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  findByName(name: any): Observable<Album[]> {
    return this.http.get<Album[]>(`${baseUrl}?name=${name}`);
  }
 }
