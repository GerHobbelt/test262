// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-privatename-no-initializer-with-method.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax-export-default.template
/*---
description: SyntaxError (class declaration module default export)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated, module]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

---*/


export default class {
  #x
  m() {}
}
