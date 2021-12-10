import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracks } from '../models/track.model';

const baseUrl = 'http://localhost:8081/track';

@Injectable({providedIn: 'root'})
export class TrackService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tracks[]> {
    return this.http.get<Tracks[]>(baseUrl);
  }

  getAllMusic(): Observable<Tracks[]> {
    return this.http.get<Tracks[]>(baseUrl)
      .pipe();
  }

  get(id: any): Observable<Tracks> {
    return this.http.get<Tracks>(`${baseUrl}/${id}`);
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

  findByName(name: any): Observable<Tracks[]> {
    return this.http.get<Tracks[]>(`${baseUrl}?name=${name}`);
  }

  downloadTrack(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}/download`)
  }
 }
