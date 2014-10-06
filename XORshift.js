// XORshift.js - roland shoemaker 2014
// basic XORshift128 PRNG

var sbox = []
for (j = 0; j<257; j++) {
    sbox[j] = Math.floor(Math.random()*10000000000);
}

function XORseed(i, offset) {
	x = sbox[i]^i;
	y = sbox[(i+64)%256]^i;
	z = sbox[(i+128)%256]^i;
	w = sbox[(i+192)%256]^i;
	for (k=0;k<offset;k++) {
		XORshift128();
	}
}

// these should be seeded
var x = y = z = w = 0;

function XORshift128() {
	if (x === 0 && y === 0 && z === 0 && w === 0) {
		// last resort, its not been seeded so we seed manually using Math.random()
		XORseed(Math.floor(Math.random() * (256 - 1 + 1)))
	}
	var t = x^(x<<11);
	x = y; y = z; z = w;
	return w = w^(w>>19)^t^(t>>8);
}

function XORshift128Range(x, y) {
	if (y) {
		return (XORshift128()%((y-x)+1))+x;
	} else {
		return XORshift128()%(x+1);
	}
}

function XORshift128Sample(Rmin, Rmax, size) {
	sample = []
	for (var i=0;i<size;i++) {
		sample.push((XORshift128()%((Rmax-Rmin)+1))+Rmin);
	}
	return sample;
}