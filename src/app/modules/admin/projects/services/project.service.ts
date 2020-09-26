import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  API_URL = environment.API_URL;

  createProject(data){
    let projectForm = new FormData();
    projectForm.append("title", data.title.toString());
    projectForm.append("alias", data.alias.toString());
    projectForm.append("color_principal", data.color_principal.toString());
    projectForm.append("color_text", data.color_text.toString());
    //let headers = new HttpHeaders();
    //headers = headers.set('ApiKey','666');
    //console.log(headers);
    //let headers = new HttpHeaders().append('Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiMSIsInBhc3N3b3JkIjoiUTIxM1JteE1VR2czVldzMFkwRTBaMHRVVkZkclp6MDkifQ.F8o4ZqzR5e3lQnF_-EiAM5pSmmhmx6LPoiY2ArBK3DI');
    // headers = new HttpHeaders();
    //let headers1 = headers.set('Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiMSIsInBhc3N3b3JkIjoiUTIxM1JteE1VR2czVldzMFkwRTBaMHRVVkZkclp6MDkifQ.F8o4ZqzR5e3lQnF_-EiAM5pSmmhmx6LPoiY2ArBK3DI');
    let headers = new HttpHeaders().set('Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiMSIsInBhc3N3b3JkIjoiUTIxM1JteE1VR2czVldzMFkwRTBaMHRVVkZkclp6MDkifQ.F8o4ZqzR5e3lQnF_-EiAM5pSmmhmx6LPoiY2ArBK3DI');
    /*const headers = new HttpHeaders({
      'Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiMSIsInBhc3N3b3JkIjoiUTIxM1JteE1VR2czVldzMFkwRTBaMHRVVkZkclp6MDkifQ.F8o4ZqzR5e3lQnF_-EiAM5pSmmhmx6LPoiY2ArBK3DI',
      });*/
    return this.http.post(`${this.API_URL}create`,projectForm, {
      headers: headers,
    });
  }
}
