XORshift.js
===========

simple implementation of the [XORshift](http://en.wikipedia.org/wiki/Xorshift) PRNG (Only the XORshift128 method at the moment, but I plan to add more) in JavaScript.

Example
-------
    >> XORseed(Math.floor(Math.random() * (256 - 1 + 1))) // 0..256
    >> XORshift128()
    1293043013
    >> XORshift128()
    858113642
    >> XORshift128()
    63207891
    >> XORshift128()
    1547141889
    >> XORshift128()
    1362877356
