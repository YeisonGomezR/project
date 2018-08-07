import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Object = [];
  posts: Object = [];
  constructor(
    public navCtrl: NavController,
    public userServiceProviders: UserServiceProvider,
    public postServiceProviders: UserServiceProvider
    ) 
  {

  }
  ionViewDidLoad(){
    this.userServiceProviders.getUsers()
    .subscribe(
      (data) => { // Success
        this.users= data;        
      },
      (error) =>{
        console.error(error);
      }
    );
    this.postServiceProviders.getPosts()
    .subscribe(
      (data) => { // Success
        this.posts= data;
        console.log(this.posts);
      },
      (error) =>{
        console.error(error);
      }
    )
  
  }  

}
