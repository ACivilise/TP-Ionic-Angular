import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from "../classes/article.class";

@Injectable()
export class ShoppingService {
    constructor(private storage: Storage) { }

    public async GetShoppingList(): Promise<Array<Article>> {
        var shoppingList = new Array<Article>();
        var shoppingListJSON = await this.storage.get('ShoppingList');
        // Si il n'existe pas de sauvegarde
        if (shoppingListJSON == null) {
            shoppingList.push(new Article("Fromage", "01/05/2018", 1, null));
        }
        else {
            // On parse le JSON
            var shoppingListParsed = JSON.parse(shoppingListJSON);
            // On utilise Object.assign pour caster les objects en articles
            shoppingListParsed.forEach(element => {
                var article = Object.assign(new Article("", "", 1, null), element);
                shoppingList.push(article);
            });
        }
        return shoppingList;
    }

    public async SaveShoppingList(shoppingList: Array<Article>): Promise<boolean> {
        var shoppingListJSON = JSON.stringify(shoppingList);
        await this.storage.set('ShoppingList', shoppingListJSON);
        return true;
    }

    public async SavePreviousArticlesList(previousArticles: Array<string>):  Promise<boolean> {
        var previousArticlesJSON = JSON.stringify(previousArticles);
        await this.storage.set('PreviousArticles', previousArticlesJSON);
        return true;
    }
    
    public async GetPreviousArticlesList(): Promise<Array<string>> {
        var previousArticles = new Array<string>();
        var previousArticlesJSON = await this.storage.get('PreviousArticles');
        // Si il n'existe pas de sauvegarde
        if (previousArticlesJSON == null) {
            previousArticles.push("Fromage");
            previousArticles.push("Pain");
            previousArticles.push("Pomme");
            previousArticles.push("Tomates");
        }
        else {
            // On parse le JSON
            previousArticles = JSON.parse(previousArticlesJSON);
        }
        return previousArticles;
    }
}