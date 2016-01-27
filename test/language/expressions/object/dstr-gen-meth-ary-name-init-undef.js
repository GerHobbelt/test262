// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-name-init-undef.hashes
// - src/cases/dstr-binding/default/gen-meth.hashes
/*---
description: Destructuring initializer with an undefined value (generator method)
es6id: 14.4.13
info: >
    13.3.3.6 Runtime Semantics: IteratorBindingInitialization
    
    SingleNameBinding : BindingIdentifier Initializeropt
    
    [...]
    6. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       [...]
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).

    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }
    
    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this GeneratorMethod is strict mode code,
       let strict be true. Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be GeneratorFunctionCreate(Method,
       StrictFormalParameters, GeneratorBody, scope, strict).
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
var obj = {
  *method([x = 23]) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};

obj.method([undefined]).next();
assert.sameValue(callCount, 1);
