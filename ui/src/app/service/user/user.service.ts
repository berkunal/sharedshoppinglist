import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:8080/users/";

  constructor(private http: HttpClient) {
  }

  getUserById(id: string) {
    return this.http.get<User>(this.userUrl + encodeURIComponent(id));
  }

  getUserByName(name: string) {
    return this.http.get<User>(this.userUrl + 'by-name/' + name);
  }
}
