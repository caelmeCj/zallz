import { Component } from '@angular/core';
import {BaseService} from '../../services/base.service';
@Component({
  selector: 'app-sidebar-minimizer',
  templateUrl: './app-sidebar-minimizer.component.html'
})
export class AppSidebarMinimizerComponent { 
  constructor(private base:BaseService){

  }

  changeCollapse(){
    this.base.$isCollapsed=!this.base.$isCollapsed;
  }
}
