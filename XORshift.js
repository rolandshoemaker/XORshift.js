// XORshift.js - roland shoemaker 2014
// basic XORshift128 PRNG

// these should be seeded
var x = 0
var y = 0
var z = 0
var w = 0

var sbox = []
for (j = 0; j<257; j++) {
    sbox[j] = Math.floor(Math.random()*10000000000)
}

function XORseed(i) {
	x = sbox[i]
	y = sbox[(i+64)%256]
	z = sbox[(i+128)%256]
	w = sbox[(i+192)%256]
}

XORseed(Math.floor(Math.random() * (max - min + 1)) + min)

function XORshift128() {
	var t = x^(x<<11);
	x = y; y = z; z = w;
	return w = w^(w>>19)^t^(t>>8);
}