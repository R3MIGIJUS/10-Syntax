import {skirtumas} from './components/algebra/skirtumas.js';
import { dalyba } from './components/algebra/dalyba.js';
import {kvadratu} from './components/algebra/kvadratu.js';
import {sandauga} from './components/algebra/sandauga.js';
import {suma} from './components/algebra/suma.js';
import {vidurkis} from './components/algebra/vidurkis.js';
import { pirmaRaide } from './components/tekstai/pirmaRaide.js';
import { paskutineRaide } from './components/tekstai/paskutineRaide.js';
import { vidurineRaide } from './components/tekstai/vidurineRaide.js';



const a = skirtumas(8,6)
console.log(a);

const b = dalyba(8,6)
console.log(b);

const c = kvadratu(8)
console.log(c);

const d = sandauga(8,6)
console.log(d);

const e = suma(8,6)
console.log(e);

const f = vidurkis ([1,9,11])
console.log(f);

const l = pirmaRaide ("Vida");
console.log(l);

const m = paskutineRaide ("Saule");
console.log(m);

const t = vidurineRaide ("masina");
console.log(t);

