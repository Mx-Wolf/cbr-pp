import { CbrPpProps, CbrPpFields } from "./cbr-pp-props";
import { names } from "./cbr-pp-field-names";
function sentry(fieldName: string): fieldName is CbrPpFields {
  return (names.some((e) => e === fieldName));
}
function splitByEq(line: string) {
  const ix = line.indexOf("=");
  if (ix <= 0) { return [line]; }
  return [line.substr(0, ix), line.substr(ix + 1)];
}
function objectReducer(a: Partial<CbrPpProps>, b: string): Partial<CbrPpProps> {
  const [field, value] = splitByEq(b);
  if (sentry(field)) {
    a[field] = value;
  }
  return a;
}
export function parseOneEs(text: string): Partial<CbrPpProps> {
  const rv: Partial<CbrPpProps> = {};
  if (typeof text !== "string") { return rv; }
  const lines = text.split(/\r?\n/);
  return lines.reduce(objectReducer, rv);
}
