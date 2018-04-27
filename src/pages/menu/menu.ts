import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
    { title: 'Home', pageName: 'HomePage', icon: 'shuffle' },
    { title: 'Pemasaran', pageName: 'PemasaranPage', icon: 'cart' },
    { title: 'Berita', pageName: 'BeritaPage', icon: 'shuffle' },
    { title: 'Laporan', pageName: 'LaporanPage', icon: 'shuffle' },
    { title: 'TataKelola', pageName: 'TataKelolaPage', icon: 'shuffle' },
    { title: 'Profil', pageName: 'ProfilPage', icon: 'shuffle' },
    { title: 'InfoProduk', pageName: 'InfoProdukPage', icon: 'cube' },
    { title: 'CSR', pageName: 'CSRPage', icon: 'shuffle' },
    { title: 'Tautan', pageName: 'TautanPage', icon: 'shuffle' },
    { title: 'Bantuan', pageName: 'BantuanPage', icon: 'shuffle' }
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}