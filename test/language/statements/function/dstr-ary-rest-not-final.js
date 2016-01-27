// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-rest-not-final.hashes
// - src/cases/dstr-binding/default/func-decl.hashes
/*---
description: Rest element followed by an invalid element (function declaration)
es6id: 14.1.19
negative: SyntaxError
info: >
    13.3.3 Destructuring Binding Patterns
    ArrayBindingPattern[Yield] :
        [ Elisionopt BindingRestElement[?Yield]opt ]
        [ BindingElementList[?Yield] ]
        [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]

    FunctionDeclaration :
        function BindingIdentifier ( FormalParameters ) { FunctionBody }
    
        [...]
        3. Let F be FunctionCreate(Normal, FormalParameters, FunctionBody,
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
function f([...x, y]) {
  
  callCount = callCount + 1;
};
f([1, 2, 3]);
assert.sameValue(callCount, 1);
