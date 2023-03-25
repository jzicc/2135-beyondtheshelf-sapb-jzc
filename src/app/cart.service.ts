import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  constructor() {}

  getCarts() {
    return [
      {
        cart_title: 'To Kill a Mockingbird',
        cart_author: 'Harper Lee',
        cart_publisher: 'J. B. Lippincott & Co.',
        cart_price: '$21.03',
        cart_category: 'Southern Gothic fiction',
        cart_desc:
          'To Kill a Mockingbird is both a young girls coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.',
      },
      {
        cart_title: '1984',
        cart_author: 'George Orwell',
        cart_publsiher: 'Secker & Warburg',
        cart_price: '$7.48',
        cart_category: 'Dystopian Social Science Fiction Novel',
        cart_desc:
          '1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of "The Party", who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.',
      },
      {
        cart_title: 'Harry Potter and the Philosopher’s Stone',
        cart_author: 'J.K. Rowling',
        cart_publisher: 'Bloomsbury',
        cart_price: '$14.36',
        cart_category: 'Fantasy Novel',
        cart_desc:
          'It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he"s a wizard.',
      },
      {
        cart_title: 'The Lord of the Rings',
        cart_author: 'J.R.R. Tolkien',
        cart_publisher: 'Allen & Unwin',
        cart_price: '$18.29',
        cart_category: 'Epic High-Fantasy Novel',
        cart_desc:
          'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien"s extensive knowledge of philology and folklore.',
      },
    ];
  }
}
