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
	x = sbox[i]^i
	y = sbox[(i+64)%256]^i
	z = sbox[(i+128)%256]^i
	w = sbox[(i+192)%256]^i
}

XORseed(Math.floor(Math.random() * (256 - 1 + 1))) // 0..256

function XORshift128() {
	var t = x^(x<<11);
	x = y; y = z; z = w;
	return w = w^(w>>19)^t^(t>>8);
}