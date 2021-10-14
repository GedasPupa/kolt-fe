[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)
# KOLT: Scooters Rental. Full-stack application.

_Educational project: preparation for the Exam_

## Technologies

- Angular 12 (front-end)
- Node.js, ExpressJS (server-side)
- MySQL (database)

## Task

- Užduotis 1. Sukurkite duomenų bazės lentelę pagal schemą:

  ![alt database](https://github.com/GedasPupa/kolt-fe/blob/master/src/assets/db.png)

  Duomenų bazės pavadinimą sugalvokite patys. Jeigu reikia, duomenų bazės lentelę galite papildyti papildomais stulpeliais.

- Užduotis 2. Naudodami Angular karkasą arba React biblioteką sukurkite vieno puslapio aplikaciją (SPA), kurioje vartotojas galėtų atlikti pilną “Kolt” paspirtukų administravimą (CRUD). Kiekvienas paspirtukas turi turėti savo vizualiai atskirtą aprašą, kuriame būtų pateikta visa informaciją apie jį. Šalia turi būti mygtukas “Trinti”, kurį paspaudus atitinkamo paspirtuko įrašas būtų pašalinamas iš duomenų bazės. Šalia įrašo su paskutinio naudojimo data turi būti laukelis su naujos datos įvedimu. Šalia laukelio su paspirtuko rida (kilometrais) turi būti laukelis, kuriame galima būtų įvesti tos dienos paspirtuku nuvažiuotą atstumą. Per dieną nuvažiuoti kilometrai sumuojasi su bendru kiekiu ir suma įrašoma į duomenų bazę. Įrašas iš duomenų bazės laukelio is_busy turi būti paverčiamas į “užimtas” arba “laisvas”, priklausomai nuo laukelio reikšmės. Šalia šio laukelio turi būti checkbox tipo įvedimas, kuris leistų keisti užimtumą. Duomenų redagavimas turi būti  atliekamas paspaudus “Redaguoti” mygtuką. Registracijos kodas (aštuoni raidiniai skaitiniai simboliai) neturi būti radaguotinas (įrašomas tik kuriant naują paspirtuką). Paspirtukų aprašo viršuje (arba apačioje) turi būti atvaizduota tuščia forma su naujam paspirtukui įvesti skirtais laukeliais ir mygtukas “Pridėti” formos vykdymui. Laukeliui is_busy skirto įvedimo, kuriant naują paspirtuką daryti nereikia, nes naujai sukurtas
paspirtukas visada turi būti “laisvas”.

- Serveryje sukurkite prisijungimą prie duomenų bazės, web serverį, maršrutizatorių ir visą bendravimo su naršykle logiką, užtikrinančią 2 užduoties įgyvendinimą serveryje. Informacijos apsikeitimas tarp serverio ir naršyklės turi vykti JSON formatu.

- Užduotis 4. Sukurkite naršyklėje esančio javascript bendravimo mechanizmą su serveriu, naudojant atitinkamus užklausų metodus, asinchroniškai siunčiamus į serverį. Dinamiškai renderinkite vaizdą naudodami Angular ar React, pagal duomenis JSON formatu gaunamus iš serverio.

- Užduotis 5. Sukurkite statistikos laukelius, kuriuose būtų atvaizduojamas paspirtukų kiekis ir bendras visų paspirtukų nuvažiuotas kilometrų kiekis (duomenys gaunami iš serverio duomenų bazės) Keičiantis duomenų bazės įrašams automatiškai turi keistis ir statistika.

- Užduotis 6. Sukurkite rūšiavimo galimybę pagal nuvažiuotų kilometrų kiekį ir paskutinio naudojimo datą (sukurkite du mygtukus, kuriuos paspaudus paspirtukų aprašai išsirikiuotų atitinkama tvarka). Tam panaudokite Angular ar React galimybes (ne serverio).

- Aplikacija turi atrodyti estetiškai ir turi būti padaryta adaptyvaus dydžio (responsive).
Galite prisidėti prie aplikacijos tobulinimo ir pridėti naujų, sąlygoje neaprašytų
funkcionalumų ar vartotojo patirtį gerinančių patobulinimų. Papildomus dalykus užduotyje
pridėkite tik tada, kai pilnai įvykdėte visas užduotis.

- __Užduoties pristatymas:__ Užduoties sprendime reikia pademonstruoti visas technologijas, kurias išmokote kurso metu. Užduoties sprendime turi būti panaudotos sekančios technologijos: html, css (galima naudoti, bet neprivaloma sass, arba postcss arba bet kokį css karkasą bootstrap, tailwind ar panašų), serverio pusės javascript vykdymas node.js aplinkoje (galima, bet neprivaloma naudoti karkasą express.js, nest.js, sails.js ar panašų), kliento pusės javascript vykdymas naršyklėje būtinai panaudojant arba Angular karkasą arba React biblioteką ir duomenų saugojimui serverio pusėje panaudojant reliacinę duomenų bazę (MySQL arba MariaDB).

## Folder structure

```
src
├── app
│   ├── components
│   |  ├── app 
|   │  |  ├── app.component.spec.ts
|   │  |  └── app.component.ts       // same file structure in all components               
│   |  ├── footer                      
│   |  ├── header                    
│   |  ├── home                      // home (about) page
│   |  ├── scooter                   // Scooter add/edit page
|   |  └── scooters                  // Scooters list page
│   ├── guards
│   |  ├── scooters.guard.spec.ts        
|   │  └── scooters.guard.ts         // TODO
│   ├── models
|   │  └── Scooter.ts
│   ├── pipes                        // TODO
│   ├── services
│   |  ├── scooters.service.spec.ts
|   │  └── scooters.service.ts
│   └── app.module.ts
├── assets
│   └── db.png
├── environments
│   ├── environments.prod.ts
│   └── environments.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
└── test.ts
 ```

## Launch procedure

### 1. Database (MySQL) dump file:
```
https://github.com/GedasPupa/kolt-be/blob/master/dump.sql
```

### 2. Node.js server (BE):
```
git clone https://github.com/GedasPupa/kolt-be.git
Packages:     npm install
Launch:       npm start
```
### 3. Angular App (FE):
```
git clone https://github.com/GedasPupa/kolt-fe.git
Packages:     npm install
Launch:       ng serve -o
Build:        ng build
```

## Teacher

[Mindaugas Bernatavičius](https://github.com/MindaugasBernatavicius)
