= Mission 2 choix 1 FILMOTEC

Mission de développement d’une application métier, sous la forme d’une application web à base de framework.

Niveau : Deuxième année de BTS SIO SLAM

Prérequis : bases de la programmation,  Angular.

Membres du groupe : Diarrassouba Bassémory

== Thème
L'objectif de ce projet est de créer un site internet capable de repertorier plusieurs films .

Les étapes d'un scénario typique d'usage sont :

1. choix de film par l'utilisateur via la recherche 
2. selection d'un film via une liste personnelle d'utilisateur
3. possibilité d'attribuer une note et de commenter un film
4. modification de la liste de favoris possible 
5. possibilité de patager sa liste avec d'autre 

== Objectif
Au cours de ce projet plusieurs objectifs étaient fixés:

* Création des composants `home` et `liste`
* Envoi de données entre composants et parent
* Mise en place de valeurs par défault

== Analyse des Composant du projet


* Le composant `home` responsable de générer les éléments nécessaires à l'affichage d'une table de de film correspondant a la recherche donnée par l'utilisateur
* La composant `liste` responsable de générer les élements nécessaires à l'affichage des Tables de la liste de favoris de l'utilisateur


== Analyse du code

Pour présenter ce code, nous allons suivre le scénario typique d'utilisation. Dans un premier temps, l'utilisateur saisie dans un formulaire (code ci-dessous) le film qu'il souhaite rechercher dans le fichier `app.component.html`
[, java]
----
<section class="section">
    <div class="container">
        <div class="card-image has-text-centered">
            <figure class="image is-inline-block">
                <form [formGroup]="identForm" (ngSubmit)="film()">
                    <p class="title is-3">Recherchez votre film :
                        <input class="input is-large" formControlName="film" type="text" placeholder="Ex: Harry potter"
                            value=""></p>
                    <br>
                    <button class="button is-link is-rounded">Rechercher</button>
                </form>
            </figure>
        </div>
    </div>
</section>
----
Une fois la valeur saisie par l'utilisateur, on envoie la variable `film` du parent (`app.component.html`) vers le composant `home.component.ts`
grâce au code :
[, java]
----
ngOnInit(): void {
    this.identForm = new FormGroup({
      film: new FormControl(),
    });
  }
  film() {
    this.isSubmited = true;
    console.log('Données du formulaire...', this.identForm.value);
    this.filmService.rechercheFilm(this.identForm.value.film).subscribe((data: any)=> {
      this.filmService.addInfo(data['results']);
      this.tabfilm= this.filmService.getAllInfos();
      console.log(data['results'])
    })
  }
} 
----
Une fois la variable `film` envoyé vers le composant,
un tableau comportant les 20 premiers resultats correspondant a la recherche de l'utilisateur.


[, html]
----
<div class="container has-text-centered">

    <article class="mt-5 pt-4 pb-5 is-multiline columns">
      <div class="column is-2 mb-5" *ngFor="let i of tabfilm">
        <p class="has-text-weight-bold">{{ i.title }}</p>
        <p><img src="https://image.tmdb.org/t/p/w500{{i.poster_path}}"></p>
        <p>{{ i.release_date }}</p>
      </div>
    </article>
  </div>
----
 Grâce a une boucle `ngFor` on affiche les films correspondant a la recherche de l'utilisateur (la variable `tabfilm`),

[, java]
----

  public rechercheFilm(film: string){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+environment.api+'&language=fr&query='+film) 

----
c'est par cette classe contenu dans `film.service.ts` que ma base de donnée themoviedb est relier a la recherche de l'utilisateur 



== Conclusion

Pour conclure, mon projet permet l'affichage par le biais d'une base de donnée ( themoviesdb ) des 20 premiers films rechercher par l'envoie d'un formulaire de l'utilisateur 

Ce projet m'as amené à découvrir de nouvelles notions comme les composant java, le framework angular ou encore la relation  parent/composant .

Cependant, le manque de temps fait que je n'ai pu terminer ce projet ni faire de grandes amélioration  ou d'optimiser un maximum mon code.
Mais malgré le manque de temps, je suis plutôt content du travail accomplis, et ce projet fut enrichissant pour moi et je suis content d'avoir travaillé dessus.

Liens vers le dépôt Gitlab : https://github.com/Basse-drb/film
