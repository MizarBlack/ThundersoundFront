import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';

const baseUrl = 'http://localhost:8081/playlist';

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(baseUrl);
  }

  get(id: any): Observable<Playlist> {
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

  findByName(name: any): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${baseUrl}?name=${name}`);
  }
 }
