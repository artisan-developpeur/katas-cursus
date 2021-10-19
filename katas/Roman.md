# Kata : Chiffres romains
Niveau : 2/3

## Ennoncé
Le premier symbole est “I” veut dire 1. C’est assez simple !
Si tu en mets deux “II”, ça fait 2.
Ca marche aussi pour 3 : “III”.
Par contre à 4 ça change.
Ensuite vient le symbole “V”. Il veut dire 5.
Si tu mets un “I” devant ça fait 4.
D’une manière générale, un symbole plus petit que le suivant vient en soustraction.

Donc “IV” ça fait 4. Par contre “VI”, c’est 6.

Ensuite vient le X : 10. Même topos : si tu met un truc plus petit devant, c’est en soustraction. Si c’est après c’est en addition.

“IX” c’est 9.
“XI” c’est 11.
“XXXI” ça donne 31 et “XXIV” = 24.

“L” c’est 50.
“XL” ça fait 40 et “LXX” 70.

“C” est le signe de la centaine. Du coup, “XC”, ça fait 90.
“CCCLXIX” ça nous donne 369.

Tu suis toujours ?

“D” c’est pour 500. Combien fait “CDXLVIII”? 448.
Tu comprends pourquoi on a changé de système ?

“M” c’est pour 1000. On adore les dates en romain, ça claque !
Du coup 1998 c’est MCMXCVIII.

## Exercice
Créer la classe suivante :
```
class Roman
  // Transforme un chiffre romain en entier
  public int decode(String firstName);
```

