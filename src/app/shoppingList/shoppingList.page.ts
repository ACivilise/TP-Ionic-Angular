import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AnimationBuilder } from "css-animator";

// classes
import { Article } from "../../classes/article.class";

// Services
import { ShoppingService } from '../../services/shopping.service';
@Component({
  selector: 'app-shoppingList',
  templateUrl: 'shoppingList.page.html'
})
export class ShoppingListPage {
  private ListCourse: Array<Article> = new Array<Article>();
  private PreviousArticles: Array<string> = new Array<string>();
  private AutocompleteList: Array<string> = new Array<string>();
  private CreateItemVisible: boolean = false;
  private NewItem: Article = new Article("", "17/11/2018", 0, null);

  constructor(public navCtrl: NavController,
      private shoppingService: ShoppingService,
      private translate: TranslateService,
      private toastCtrl: ToastController) {
      let _this: any = this;
      shoppingService.GetShoppingList().then(function (result: Array<Article>) {
          _this.ListCourse = result;
      })
      shoppingService.GetPreviousArticlesList().then(function (result: Array<string>) {
          _this.PreviousArticles = result;
      })
      //this.ListCourse.push(new Article("Fromage","01/05/2018"));
  }

  private delete(item: Article) {
      const index: number = this.ListCourse.indexOf(item);
      if (index !== -1) {
          this.ListCourse.splice(index, 1);
          this.SaveShoppingList();
      }
  }

  private ShowCreateItem() {
      this.CreateItemVisible = true;
  }

  private HideCreateItem() {
      this.AutocompleteList = new Array<string>();
      this.CreateItemVisible = false;
  }

  private CreateNewItem() {
      if (this.NewItem.Name != "") {
          if (this.NewItem.Date != "") {
              if (this.NewItem.Quantity > 0) {
                  this.ListCourse.push(new Article(this.NewItem.Name, this.NewItem.Date, this.NewItem.Quantity, this.NewItem.Id));
                  this.CreateItemVisible = false;
                  this.SaveShoppingList();

                  // Si il n'est pas déjà dans la liste des propositions
                  if (this.PreviousArticles.indexOf(this.NewItem.Name) == -1) {
                      // On ajoute l'article à liste des items proposés
                      this.PreviousArticles.push(this.NewItem.Name);
                      this.shoppingService.SavePreviousArticlesList(this.PreviousArticles);
                  }
              }
              else{
                  this.ToastError("ShoppingListPage.Error_Quantity");
              }
          }
          else{
              this.ToastError("ShoppingListPage.Error_Date_Required");
          }
      }
      else{
          this.ToastError("ShoppingListPage.Error_Name_Required");
          // let NomArticle : HTMLElement = document.getElementById('NomArticle');
          // let animator = new AnimationBuilder();
          // animator
          // //.setType('pulse')
          // .animate(NomArticle)
          // .catch((reason: any) => {
          //     console.log(reason)
          // });
      }
  }

  private SaveShoppingList() {
      let _this: any = this;
      this.shoppingService.SaveShoppingList(this.ListCourse).then(async function () {
          // Toaster    
          let toast = await _this.toastCtrl.create({
              message: 'List de course sauvegardée',
              duration: 2000,
              position: 'bottom'
          });     
          toast.present();
      });
  }

  private async ToastError(errorMsg: string)
  {        
      this.translate.get(errorMsg, null).subscribe(async (msg: string) => {// Toaster    
          let toast = await this.toastCtrl.create({
              message: msg,
              duration: 2000,
              position: 'top',
              cssClass: "errorToast"
          });
          toast.present();
        });        
  }

  // Autocomplete
  private Search() {
      if (this.NewItem.Name && this.NewItem.Name != "") {
          this.AutocompleteList = this.PreviousArticles.filter((word: string) => word.toLowerCase().indexOf(this.NewItem.Name.toLowerCase()) >= 0);
      }
      else {
          this.AutocompleteList = this.PreviousArticles;
      }
  }

  private SearchLostFocus() {
      this.AutocompleteList = new Array<string>();
  }

  private SelectProposition(word: string) {
      this.NewItem.Name = word;
      this.AutocompleteList = new Array<string>();
  }
}





