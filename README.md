XORshift.js
===========

simple implementation of the [XORshift](http://en.wikipedia.org/wiki/Xorshift) PRNG (Only the XORshift128 method at the moment, but I plan to add more) in JavaScript.

Example
-------

    >> XORseed(Math.floor(Math.random() * (256 - 1 + 1))); // Random seed, this can be anything, if it isn't set this function will be run the first time you use one of the functions below.
    >> XORshift128();
    1293043013
    >> XORshift128Range(0, 10);
    6
    >> XORshift128Range(0, 10);
    [5, 7, 0, 4, 2, 7, 6, 0, 10, 6]
