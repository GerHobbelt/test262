// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-static-private-meth-prototype.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax-export-default.template
/*---
description: Static Private Methods can be named "#prototype" (class declaration module default export)
esid: prod-ClassElement
features: [class-static-methods-private, class]
flags: [generated, module]
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "prototype"

---*/


export default class {
  static #prototype() {}
}
