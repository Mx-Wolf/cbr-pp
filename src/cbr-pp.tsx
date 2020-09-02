import * as React from "react";
import { CbrPpProps } from "./cbr-pp-props";

export const CbrPp: React.FC<Partial<CbrPpProps>> = (p) => {
  const {
    ВидОплаты,
    ВидПлатежа,/*5 */
    Дата,/*4 */
    ДатаПоступило,
    ДатаСписано,
    НазначениеПлатежа,/* */
    Номер,/*3 */
    ОКАТО,
    Код,
    КодНазПлатежа,
    Очередность,
    Плательщик,/*8 */
    ПлательщикБИК,/*11 */
    ПлательщикБанк1,/*10 */
    ПлательщикИНН,/*60 */
    ПлательщикКПП,/*102 */
    ПлательщикКорсчет,/*12 */
    ПлательщикРасчСчет,/*9 */
    //ПлательщикСчет,
    ПоказательДаты,
    ПоказательКБК,
    ПоказательНомера,
    ПоказательОснования,
    ПоказательПериода,
    ПоказательТипа,
    Получатель,
    ПолучательБИК,/*14*/
    ПолучательБанк1,/*13*/
    ПолучательИНН,/*61*/
    ПолучательКПП,/*103 */
    ПолучательКорсчет,/*15*/
    ПолучательРасчСчет,/*17*/
    //ПолучательСчет,
    СрокПлатежа,/*19 */
    СтатусСоставителя,/*101 */
    Сумма,/*7 */
    СуммаПрописью,/*6 */
  } = p;
  return (
    <table className="plat-por">
      <colgroup>
        <col style={{ width: '0.5cm' }} data-cid="a" />
        <col style={{ width: '2.0cm' }} data-cid="b" />
        <col style={{ width: '1.5cm' }} data-cid="c" />
        <col style={{ width: '1.0cm' }} data-cid="d" />
        <col style={{ width: '0.5cm' }} data-cid="da" />
        <col style={{ width: '3.5cm' }} data-cid="e" />
        <col style={{ width: '0.5cm' }} data-cid="ea" />
        <col style={{ width: '1.0cm' }} data-cid="f" />
        <col style={{ width: '1.5cm' }} data-cid="g" />
        <col style={{ width: '1.0cm' }} data-cid="h" />
        <col style={{ width: '0.5cm' }} data-cid="i" />
        <col style={{ width: '0.5cm' }} data-cid="j" />
        <col style={{ width: '2.0cm' }} data-cid="k" />
        <col style={{ width: '1.0cm' }} data-cid="l" />
        <col style={{ width: '1.5cm' }} data-cid="m" />
        {/* <col style="width: 1.0cm;" data-cid="n"> */}
      </colgroup>
      <tbody><tr data-rid={0}>
        <td data-cid="a"><span data-c="a0" /></td>
        <td data-cid="b" colSpan={2} className="underlined"><span data-c="b0">{ДатаПоступило}</span></td>
        {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
        <td data-cid="d"><span data-c="d0" /></td>
        <td data-cid="da" colSpan={2} className="underlined ДатаСписано"><span data-c="d0">{ДатаСписано}</span></td>
        {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
        <td data-cid="ea"><span data-c="e0" /></td>
        <td data-cid="f"><span data-c="f0" /></td>
        <td data-cid="g"><span data-c="g0" /></td>
        <td data-cid="h"><span data-c="h0" /></td>
        <td data-cid="i"><span data-c="i0" /></td>
        <td data-cid="j"><span data-c="j0" /></td>
        <td data-cid="k"><span data-c="k0" /></td>
        <td data-cid="l"><span data-c="l0" /></td>
        <td data-cid="m" className="label" style={{ border: 'black 1px solid' }}><span data-c="m0">0401060</span></td>
        {/* <td data-cid="n"><span data-c="n0"></span></td> */}
      </tr>
        <tr data-rid={"01"}>
          <td data-cid="a"><span data-c="a0" /></td>
          <td data-cid="b" colSpan={2} className="label"><span data-c="b0">поступ. в банк плат.</span></td>
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          <td data-cid="d"><span data-c="d0" /></td>
          <td data-cid="da" colSpan={2} className="label"><span data-c="d0">Списано со сч. плат.</span></td>
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          <td data-cid="ea"><span data-c="e0" /></td>
          <td data-cid="f"><span data-c="f0" /></td>
          <td data-cid="g"><span data-c="g0" /></td>
          <td data-cid="h"><span data-c="h0" /></td>
          <td data-cid="i"><span data-c="i0" /></td>
          <td data-cid="j"><span data-c="j0" /></td>
          <td data-cid="k"><span data-c="k0" /></td>
          <td data-cid="l"><span data-c="l0" /></td>
          <td data-cid="m"><span data-c="m0" /></td>
          {/* <td data-cid="n"><span data-c="n0"></span></td> */}
        </tr>
        <tr data-rid={1}>
          <td data-cid="a" colSpan={4}><span data-c="a0">Платежное поручение №</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          <td data-cid="da"><span data-c="d0" className="Номер">{Номер}</span></td>
          <td data-cid="e"><span data-c="e0" /></td>
          <td data-cid="ea"><span data-c="e0" /></td>
          <td data-cid="f" colSpan={3} className="underlined"><span data-c="f0" className="Дата">{Дата}</span></td>
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          <td data-cid="i"><span data-c="i0" /></td>
          <td data-cid="j" colSpan={3} className="underlined"><span data-c="j0" className="ВидПлатежа">{ВидПлатежа}</span></td>
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          <td data-cid="m"><span data-c="m0">{СтатусСоставителя}</span></td>
          {/* <td data-cid="n"><span data-c="n0"></span></td> */}
        </tr>
        <tr data-rid={2} style={{ height: '0.5cm' }}>
          <td data-cid="a"><span data-c="a0" /></td>
          <td data-cid="b"><span data-c="b0" /></td>
          <td data-cid="c"><span data-c="c0" /></td>
          <td data-cid="d"><span data-c="d0" /></td>
          <td data-cid="da"><span data-c="d0" /></td>
          <td data-cid="e"><span data-c="e0" /></td>
          <td data-cid="ea"><span data-c="e0" /></td>
          <td data-cid="f" colSpan={3} className="label"><span data-c="f0">дата</span></td>
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          <td data-cid="i"><span data-c="i0" /></td>
          <td data-cid="j" colSpan={3} className="label"><span data-c="j0">Вид платежа</span></td>
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          <td data-cid="m"><span data-c="m0" /></td>
          <td data-cid="n"><span data-c="n0" /></td>
        </tr>
        <tr data-rid={3} style={{ height: '1.5cm' }}>
          <td data-cid="a" colSpan={2} className="label underlined"><span data-c="a0">Сумма прописью</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={13} className="underlined left-border"><span data-c="c0" className="spelled-out">{СуммаПрописью}</span></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0"></span></td> */}
        </tr>
        <tr data-rid={4}>
          <td data-cid="a" colSpan={4}><span data-c="a0">ИНН</span><span className="ПлательщикИНН">{ПлательщикИНН}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          <td data-cid="da" colSpan={4}><span>КПП</span><span className="ПлательщикКПП">{ПлательщикКПП}</span></td>
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border label underlined" rowSpan={2}><span data-c="g0">Сумма</span></td>
          <td data-cid="h" colSpan={6} className="left-border underlined" rowSpan={2}><span data-c="h0">{Сумма}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          <td data-cid="n"><span data-c="n0" /></td>
        </tr>
        <tr data-rid={41}>
          <td data-cid="a" colSpan={8} rowSpan={2}><span data-c="a0">{Плательщик}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g" class="left-border underlined"><span data-c="g0"></span></td> */}
          {/* <td data-cid="h" colspan="6" class="left-border underlined"><span data-c="h0"></span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0"></span></td> */}
        </tr>
        <tr data-rid={5}>
          {/* <td data-cid="a"><span data-c="a0">a0</span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border label underlined" rowSpan={2}><span data-c="g0">сч. №</span></td>
          <td data-cid="h" colSpan={6} className="left-border underlined" rowSpan={2}><span data-c="h0" className="ПлательщикРасчСчет">{ПлательщикРасчСчет}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0"></span></td> */}
        </tr>
        <tr data-rid={6}>
          <td data-cid="a" colSpan={2} className="underlined label"><span data-c="a0">Плательщик</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={6} className="underlined"><span data-c="c0" /></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          <td data-cid="n"><span data-c="n0" /></td>
        </tr>
        <tr data-rid={7}>
          <td data-cid="a" rowSpan={2} colSpan={8}><span data-c="a0" className="ПлательщикБанк1">{ПлательщикБанк1}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border underlined label"><span data-c="g0">БИК</span></td>
          <td data-cid="h" colSpan={6} className="left-border"><span data-c="h0" className="ПлательщикБИК">{ПлательщикБИК}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={8}>
          {/* <td data-cid="a"><span data-c="a0">a0</span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" rowSpan={2} className="left-border underlined label"><span data-c="g0">сч. №</span></td>
          <td data-cid="h" rowSpan={2} colSpan={6} className="left-border underlined"><span data-c="h0" className="ПлательщикКорсчет">{ПлательщикКорсчет}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={9}>
          <td data-cid="a" colSpan={2} className="label underlined"><span data-c="a0">Банк плательщика</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={6} className="underlined"><span data-c="c0" /></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={10}>
          <td data-cid="a" colSpan={8} rowSpan={2}><span data-c="a0" className="ПолучательБанк1">{ПолучательБанк1}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="underlined left-border label"><span data-c="g0">БИК</span></td>
          <td data-cid="h" className="left-border" colSpan={6}><span data-c="h0" className="ПолучательБИК">{ПолучательБИК}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={11}>
          {/* <td data-cid="a"><span data-c="a0">Банк получателя</span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" rowSpan={2} className="left-border underlined label"><span data-c="g0">Сч. №</span></td>
          <td data-cid="h" rowSpan={2} colSpan={6} className="left-border underlined"><span data-c="h0" className="ПолучательКорсчет">{ПолучательКорсчет}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={12}>
          <td data-cid="a" colSpan={2} className="label underlined"><span data-c="a0">Банк получателя</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={6} className="underlined"><span data-c="c0" /></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={13}>
          <td data-cid="a" colSpan={4}><span data-c="a0">ИНН</span><span className="ПолучательИНН">{ПолучательИНН}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          <td data-cid="da" colSpan={4}><span data-c="d0">КПП</span><span className="ПолучательКПП">{ПолучательКПП}</span></td>
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" rowSpan={2} className="left-border label underlined"><span data-c="g0">Сч. №</span></td>
          <td data-cid="h" rowSpan={2} colSpan={6} className="left-border underlined"><span data-c="h0" className="ПолучательРасчСчет">{ПолучательРасчСчет}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={14}>
          <td data-cid="a" rowSpan={3} colSpan={8}><span data-c="a0" className="Получатель">{Получатель}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={15}>
          {/* <td data-cid="a"><span data-c="a0">a0</span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border underlined label"><span data-c="g0">вид оп.</span></td>
          <td data-cid="h" colSpan={3} className="left-border "><span data-c="h0" className="ВидОперации">{ВидОплаты}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          <td data-cid="k" className="left-border underlined label"><span data-c="k0">Срок платежа</span></td>
          <td data-cid="l" colSpan={2} className="left-border "><span data-c="l0" className="СрокПлатежа" />{СрокПлатежа}</td>
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={16}>
          {/* <td data-cid="a"><span data-c="a0">a0</span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0">c0</span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className=" left-border underlined label"><span data-c="g0">Наз. пл.</span></td>
          <td data-cid="h" colSpan={3} className="left-border"><span data-c="h0">{КодНазПлатежа}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          <td data-cid="k" className="left-border underlined label"><span data-c="k0">Очер. плат.</span></td>
          <td data-cid="l" colSpan={2} className="left-border"><span data-c="l0" className="Очередность">{Очередность}</span></td>
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={17}>
          <td data-cid="a" colSpan={2} className="underlined label"><span data-c="a0">Получатель</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={6} className="underlined"><span data-c="c0" /></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border underlined label"><span data-c="g0">Код</span></td>
          <td data-cid="h" colSpan={3} className="left-border underlined"><span data-c="h0" className="Код">{Код}</span></td>
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          <td data-cid="k" className="left-border underlined label"><span data-c="k0">Рез. поле</span></td>
          <td data-cid="l" colSpan={2} className="left-border underlined"><span data-c="l0" /></td>
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={18}>
          <td data-cid="a" colSpan={5} className="underlined"><span data-c="a0">{ПоказательКБК}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0"></span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          <td data-cid="e" className="left-border"><span data-c="e0">{ОКАТО}</span></td>
          <td data-cid="ea" colSpan={2} className="left-border"><span data-c="e0">{ПоказательОснования}</span></td>
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          <td data-cid="g" className="left-border"><span data-c="g0">{ПоказательПериода}</span></td>
          <td data-cid="h" colSpan={3} className="left-border"><span data-c="h0">{ПоказательНомера}</span></td>
          {/* <td data-cid="i" class="left-border"><span data-c="i0">0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          <td data-cid="k" className="left-border"><span data-c="k0">{ПоказательДаты}</span></td>
          <td data-cid="l" colSpan={2} className="left-border"><span data-c="l0">{ПоказательТипа}</span></td>
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={19} style={{ height: '2.0cm' }}>
          <td data-cid="a" colSpan={15}><span data-c="a0" className="НазначениеПлатежа">{НазначениеПлатежа}</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0"></span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={20}>
          <td data-cid="a" colSpan={3} className="underlined label"><span data-c="a0">Назначение платежа</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          <td data-cid="c" colSpan={12} className="underlined"><span data-c="c0" /></td>
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          {/* <td data-cid="ea"><span data-c="e0">ea0</span></td> */}
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={21}>
          <td data-cid="a" rowSpan={3} colSpan={6} className="label"><span data-c="a0">м.п.</span></td>
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0"></span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          <td data-cid="ea" colSpan={5} className="label"><span data-c="e0">подписи</span></td>
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          <td data-cid="j" colSpan={4} rowSpan={3} className="label"><span data-c="j0">отметки банка</span></td>
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={22} style={{ height: '2.0cm' }}>
          {/* <td data-cid="a" ><span data-c="a0"></span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0"></span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          <td data-cid="ea" className="underlined" colSpan={5}><span data-c="e0" /></td>
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
        <tr data-rid={13} style={{ height: '2.0cm' }}>
          {/* <td data-cid="a" ><span data-c="a0"></span></td> */}
          {/* <td data-cid="b"><span data-c="b0">b0</span></td> */}
          {/* <td data-cid="c"><span data-c="c0"></span></td> */}
          {/* <td data-cid="d"><span data-c="d0">d0</span></td> */}
          {/* <td data-cid="da"><span data-c="d0">da0</span></td> */}
          {/* <td data-cid="e"><span data-c="e0">e0</span></td> */}
          <td data-cid="ea" className="underlined" colSpan={5}><span data-c="e0" /></td>
          {/* <td data-cid="f"><span data-c="f0">f0</span></td> */}
          {/* <td data-cid="g"><span data-c="g0">g0</span></td> */}
          {/* <td data-cid="h"><span data-c="h0">h0</span></td> */}
          {/* <td data-cid="i"><span data-c="i0">i0</span></td> */}
          {/* <td data-cid="j"><span data-c="j0">j0</span></td> */}
          {/* <td data-cid="k"><span data-c="k0">k0</span></td> */}
          {/* <td data-cid="l"><span data-c="l0">l0</span></td> */}
          {/* <td data-cid="m"><span data-c="m0">m0</span></td> */}
          {/* <td data-cid="n"><span data-c="n0">m0</span></td> */}
        </tr>
      </tbody></table>
  );
};