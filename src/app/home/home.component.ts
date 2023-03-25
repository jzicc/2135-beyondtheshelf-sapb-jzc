import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home = 'Welcome to our Spring Sale on books! We`re offering great discounts on a variety of books from genres like fiction, non-fiction, romance, fantasy, mystery, science-fiction and more. Get up to 50% off on select books, plus get free shipping on orders over $50. Don’t miss out on this chance to stock up on your favorite titles at great prices. Hurry and shop now, our sale won`t last forever!';

  offer = 'We offer a wide selection of books for readers of all ages, from classic novels to contemporary bestsellers. Our selection also includes books from a variety of genres, including fiction, non-fiction, children`s, fantasy, mystery, science-fiction, and more. In addition to books, we also offer a selection of magazines and audiobooks. We also offer helpful customer service and competitive prices to ensure that you get the best value for your money.'

  Title = 'To Kill a Mockingbird'
  Author = 'Harper Lee'
  Publisher = 'J. B. Lippincott & Co.'
  Category = 'Southern Gothic fiction'
  Price = '$21.03'
  Desc = 'To Kill a Mockingbird is both a young girls coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.'


  
  constructor(private router: Router) {}

  goToCart(pageName:string):void{
      this.router.navigate([`${pageName}`]);

  }

  ngOnInit(): void {}
}



