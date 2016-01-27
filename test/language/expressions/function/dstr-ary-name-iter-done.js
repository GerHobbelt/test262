// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-name-iter-done.hashes
// - src/cases/dstr-binding/default/func-expr.hashes
/*---
description: SingleNameBinding when value iteration was completed previously (function expression)
es6id: 14.1.20
info: >
    13.3.3.6 Runtime Semantics: IteratorBindingInitialization
    
    SingleNameBinding : BindingIdentifier Initializeropt
    
    [...]
    4. If iteratorRecord.[[done]] is false, then
       [...]
    5. If iteratorRecord.[[done]] is true, let v be undefined.
    [...]
    8. Return InitializeReferencedBinding(lhs, v).

    FunctionExpression : function ( FormalParameters ) { FunctionBody }
    
        [...]
        3. Let closure be FunctionCreate(Normal, FormalParameters, FunctionBody,
           scope, strict).
        [...]
    
    9.2.1 [[Call]] ( thisArgument, argumentsList)
    
    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]
    
    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )
    
    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]
    
    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)
    
    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]
---*/


var callCount = 0;
var f;
f = function([_, x]) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};

f([]);
assert.sameValue(callCount, 1);
