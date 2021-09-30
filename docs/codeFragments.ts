/*

"reticencias de continuação de text no final de uma View"

Ao decidir implementar um _framework_ ou uma biblioteca de terceiros se informar e obter _feedback_ sobre ela na comunidade.

Consultar formas de implementar uma funcionalidade específica 

Estar atentos às atualizações de dependências de terceiros ou api's envolvidas no aplicativo. Assinar Newsllaters oficias.

Inovar, atualizar.

Estabelecer níveis de segurança de dados para as camadas da aplicação.

Proporcionar esquemas visuais

Contextualizar sempre. 

Definir padrões de código e desenvolvimento

Entender conceitos ou explanar conceitos


Para entender o projeto acesse o documento tal

Para implementar um nova funcionalidade com a descrição do será implementado e o contexto. Não é necessário ter algum conhecimento prévio do projeto basta contribuir implementando aquilo que foi recomendado.

Como contribuir sugerindo, issue, pull request






container navigation é uma base para todos os navegadores



push('Details') cria uma nova rota se não existir
goBack()
popToTop()
setOptions({ title: 'Updated!' })}



interface gjkfkjgf {
  navigator: { 
    initialRouteName: string,
    screenOptions: {
      title: string,
      headerBackVisible: true,
      headerBackTitleVisible: true,
      headerBackTitleStyle: {
        fontFamily: any,
        fontSize: any
      },
      headerBackImageSource: any,
      headerLargeStyle: boolean,
      headerLargeTitleShadowVisible: boolean,
      headerLargeTitleStyle: {
        fontFamily: any,
        fontSize: any,
        fontWeight: any,
        color: any
      }
      headerShown: boolean,
      headerStyle: { backgroundColor: any },
      headerShadowVisible: boolean,
      headerTransparent: boolean,
      headerBlurEffect: any,
      headerTintColor: any,
      headerRight: () => {},
      headerTitle: any,
      headerTitleAlign: "left" | "center",
      headerTitleStyle: {
        fontFamily: any;
        fontSize: any;
        fontWeight: any;
        color: any;
      },
      headerSearchBarOptions: {autoCapitalize: 'none' |
        'words' |
        'sentences' |
        'characters', 
        barTintColor: any
        hideNavigationBar: boolean,
        hideWhenScrolling: boolean,
        obscureBackground: boolean
        onBlur: boolean
        onCancelButtonPress: boolean,
        onChangeText: any,
      },
      header: any,
    }
  }

};

const objectJson =  {
navigator: { initialRouteName: "",
fgldfldf: "title" }

}


module.exports
module.children
module.filename
module.id
module.isPreloadingmodule
module.loaded
module.path
module.paths
module.require

declare
namespace
typeof
TypeError
type
DocumentType
SVGUnitTypes


operadores e operando
primeiro os parenteses
depois as potencias
depois

5%2=1
5**2 = 25
...

( 5 + 3 ) / 2 = 


ordem de prescedencia

()
**
* /  %
+ -


Auto-atribuição

n += 5 é o mesmo que n = n + 5

pós-incremento
pré-incremento
pós-decremento 
pré-decrmento
 
n = 10
n++ é o mesmo que n = 10 + 1 == 11



MANIPULAÇÇÃO DE ARRAYS



for (index = 0; index >  minhalista.lenght; index++) {
  conwsole.log("${index+1}. ${minhalista[index]}")
}




*/

// link do video https://www.youtube.com/watch?v=NfHVPEzo5Ik




//for, indicador para performace
//_________________________________________
const bolsaVanessa = [
  'cartão de crédito',
  'chaves',
  'dinheiro',
  'escova de cabelo',
  'lenço de papel',
  'perfume',
  'alcool gel'
]

for (let index = 0; index < bolsaVanessa.length; index++) {
  console.log(`${index+1}. ${bolsaVanessa[index]}`)
  if (bolsaVanessa[index] == 'dinheiro') break
}

for (let index = 0; index < bolsaVanessa.length; index++) {
  if (bolsaVanessa[index] == 'dinheiro') continue
  console.log(`${index+1}. ${bolsaVanessa[index]}`)
}


// for in, não aceita breack
//_________________________________________

const familia = [{
  nome: 'Gabriel',
  papel: 'pai'
},
{
  nome: 'Vanessa',
  papel: 'mae'
},
{
  nome: 'Gabriel',
  papel: 'filho'
},
{
  nome: 'Felipe',
  papel: 'filho'
},
]

for (let pessoa in familia) {
console.log(familia[pessoa])
}


//map, não muda o array principal
//_________________________________________


   
const temperaturaCelsius = [0, 22, 31, 40, 45, 12, 3];
const toFahrenheit = (value:number) => ((value * 9) / 5) + 32
const temperaturaFahrneheit = temperaturaCelsius.map(toFahrenheit)

console.log(temperaturaCelsius)
console.log(temperaturaFahrneheit)


//foreach, 
//_________________________________________

const bolsaVanessa2 = [
  'cartão de crédito',
  'chaves',
  'dinheiro',
  'escova de cabelo',
  'lenço de papel',
  'perfume',
  'alcool gel'
]

bolsaVanessa2.forEach((value, index) => {
  console.log(`${index+1}. ${value}`)
});


//reduce, 
//_________________________________________


const videos = [{
  id: 'p9mqWsPJEY4',
  title: 'Teclado Mecânico é Melhor pra Programação? + Desafio de Youtubers Tech // Vlog #117',
  views: 37208
},
{
  id: 'Vxl5jUltHBo',
  title: 'Python na Prática fazendo Web Scraping (de JavaScript dinâmico) // Mão no Código #28',
  views: 22510
},
{
  id: 'Xzt7GbQIQTk',
  title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
  views: 34732
},
]

const totalViews = videos.reduce((sum, video) => {
return sum + video.views
}, 0)

console.log(totalViews)

//some, 
//_________________________________________


const idadeFamilia = [{
  nome: 'Vanessa',
  idade: 39
},
{
  nome: 'Gabriel',
  idade: 39
},
{
  nome: 'Bielzinho',
  idade: 11
},
{
  nome: 'Felipe',
  idade: 3
},
]

const ehAdulto = valor => valor.idade >= 18
const temAdulto = idadeFamilia.some(ehAdulto)
console.log(temAdulto)




//every, 
//_________________________________________


const idadeFamilia = [{
  nome: 'Vanessa',
  idade: 39
},
{
  nome: 'Gabriel',
  idade: 39
},
{
  nome: 'Bielzinho',
  idade: 11
},
{
  nome: 'Felipe',
  idade: 3
},
]

const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadeFamilia.every(ehAdulto)
console.log(somenteAdulto)



//filter, 
//_________________________________________

const numeros = [12, 24, 56, 34, 2, 567, 2, 6, 88, 3, 5, 7, 754]
const par = n => n % 2 === 0
const numerosPar = numeros.filter(par)

console.log(`Array com numeros pares: ${numerosPar}`)

//_____________________________



const postQ = [
  {
  id: "jekdkfdkfdk",
  key: 'username_title_data_fdgfsfg',
  name: 'Felipe',
  cover: "",
  descripText:"fdgfsdfg",
  date: "dia 13",
  username: "felipe-pazam",
  },
  {
  id: "hkfgjgkbngjk",
  key: 'username_title_data_fdfedfd',
  name: 'Rodrigo',
  cover: "",
  descripText:"fdfedfd",
  date: "dia 13",
  username: "rodrigo-abravanel",
  }
];

for (let index = 0; index < postQ.length; index++) {
  console.log(`${index+1}. ${bolsaVanessa[index]}`)
  if (postQ[2]) { () => {const oi = "oi"; return oi} }
};

for (let index = 0; index < bolsaVanessa.length; index++) {
  if (bolsaVanessa[index] == 'dinheiro') continue

};


class Carteira {
  cards: number;


  constructor(cards: number) {
    this.cards = cards;

  }


  pay(cards: number){
    const fdkjfdk = cards * 3
  }
}

const fill = new Carteira(1)

console.log(fill)



// Observe que a class() ou factore não recebe parametros. Você não consegue alimentar fabrica com insumos. "Não quero saber como ela funciona."
//mas você pode alimentar a linha de produção com as especificações que você fornecer.
// Funções construtoras são abstratas, não cria variáveis, cria protótipos.
// Elas não tem um retorno, ela apenas contrói.

interface CarProps {
 
}


class FabricaDeAutomovel implements CarProps{
  anoDeLancamento: number;
  cor: string;
 
 constructor() {
  this.anoDeLancamento = 2021;
  this.cor = "preto";
  return this
 };

 modeloX(){
   this.anoDeLancamento = 2006;
   this.cor = "verde"
   return this
 }
};

const Felipe = new FabricaDeAutomovel().modeloX();


const obra = {
  tipo: "",
  período: "",
  texto: "texto"


};