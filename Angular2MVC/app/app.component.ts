import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
            <img src="../../images/FOCISLogo.png" style="text-align:center;padding:10px;"/>
               <div>
                  <nav class='navbar navbar-default'>
                       <div class='container-fluid' style='padding-left: 0px;'>
                         <ul class='nav navbar-nav'>
                           <li><a [routerLink]="['home']">Home</a></li>
                            <li><a [routerLink]="['user']">Users</a></li>
<li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Quotation <span class="caret"></span></a>        
 <ul class="dropdown-menu" role="menu">
            <li><a href="#">Multi Quote</a></li></ul></li>  
                      </ul></div></nav>  
              <div class='container'>
                <router-outlet></router-outlet>
              </div>
             </div>          
`
})

export class AppComponent {

}