// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-rest-not-final.hashes
// - src/cases/dstr-binding/default/var-stmt.hashes
/*---
description: Rest element followed by an invalid element (`var` statement)
es6id: 13.3.2.4
negative: SyntaxError
info: >
    13.3.3 Destructuring Binding Patterns
    ArrayBindingPattern[Yield] :
        [ Elisionopt BindingRestElement[?Yield]opt ]
        [ BindingElementList[?Yield] ]
        [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]

    VariableDeclaration : BindingPattern Initializer
    
    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/


var [...x, y] = [1, 2, 3];


