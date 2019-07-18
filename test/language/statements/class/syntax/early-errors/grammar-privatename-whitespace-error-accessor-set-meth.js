// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-privatename-whitespace-error-accessor-set-meth.case
// - src/class-elements/syntax/invalid/cls-decl-elements-invalid-syntax.template
/*---
description: No space allowed between sigil and IdentifierName (Accessor set Method) (class declaration)
esid: prod-ClassElement
features: [class-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

---*/


throw "Test262: This statement should not be evaluated.";

class C {
  set # m(_) {}
}
