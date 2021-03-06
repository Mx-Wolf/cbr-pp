import {expect} from "chai";

import {parseOneEs} from "../src/one-es-json";
//see http://www.sbforum.ru/showthread.php?t=8052
const example: string = `СекцияДокумент=Платежное поручение
Номер=1
Дата=17.02.2015
Сумма=500.00
ПлательщикСчет=40703810159000001037
ПлательщикИНН=6730004930
ПлательщикКПП=673001001
Плательщик=ИНН 6730004930\\673001001 СОО ВОИ
Плательщик1=СОО ВОИ
ПлательщикРасчСчет=40703810159000001037
ПлательщикБанк1=Отделение №8609 Сбербанка России
ПлательщикБанк2=г. Смоленск, ул. Коммунистическая, д.8\\5
ПлательщикБИК=046614632
ПлательщикКорсчет=30101810000000000632
ПолучательСчет=40802810159300002828
ПолучательИНН=673100193232
Получатель=ИНН 673100193232 ИП Левановский Андрей Васильевич
Получатель1=ИП Левановский Андрей Васильевич
ПолучательРасчСчет=40802810159300002828
ПолучательБанк1=Отделение № 8609 Сбербанка России
ПолучательБанк2=г.Смоленск
ПолучательБИК=046614632
ПолучательКорсчет=30101810000000000632
ВидПлатежа=Электронно
ВидОплаты=01
Очередность=5
НазначениеПлатежа=Оплата по счету № 011274 от 04.12.2014 г. за воду питьевую бутилированную.НДС не облагается
НазначениеПлатежа1=Оплата по счету № 011274 от 04.12.2014 г. за воду
НазначениеПлатежа2=питьевую бутилированную.НДС не облагается
КонецДокумента`;

const expected = {
"СекцияДокумент":"Платежное поручение",
"Номер":"1",
"Дата":"17.02.2015",
"Сумма":"500.00",
"ПлательщикСчет":"40703810159000001037",
"ПлательщикИНН":"6730004930",
"ПлательщикКПП":"673001001",
"Плательщик":"ИНН 6730004930\\673001001 СОО ВОИ",
"Плательщик1":"СОО ВОИ",
"ПлательщикРасчСчет":"40703810159000001037",
"ПлательщикБанк1":"Отделение №8609 Сбербанка России",
"ПлательщикБанк2":"г. Смоленск, ул. Коммунистическая, д.8\\5",
"ПлательщикБИК":"046614632",
"ПлательщикКорсчет":"30101810000000000632",
"ПолучательСчет":"40802810159300002828",
"ПолучательИНН":"673100193232",
"Получатель":"ИНН 673100193232 ИП Левановский Андрей Васильевич",
"Получатель1":"ИП Левановский Андрей Васильевич",
"ПолучательРасчСчет":"40802810159300002828",
"ПолучательБанк1":"Отделение № 8609 Сбербанка России",
"ПолучательБанк2":"г.Смоленск",
"ПолучательБИК":"046614632",
"ПолучательКорсчет":"30101810000000000632",
"ВидПлатежа":"Электронно",
"ВидОплаты":"01",
"Очередность":"5",
"НазначениеПлатежа":"Оплата по счету № 011274 от 04.12.2014 г. за воду питьевую бутилированную.НДС не облагается",
"НазначениеПлатежа1":"Оплата по счету № 011274 от 04.12.2014 г. за воду",
"НазначениеПлатежа2":"питьевую бутилированную.НДС не облагается",
"КонецДокумента": undefined,
};

describe("читаем 1С документ",()=>{
  it("успешно читает пример",()=>{
    const r = parseOneEs(example);
    expect(r).eql(expected);
  })
});