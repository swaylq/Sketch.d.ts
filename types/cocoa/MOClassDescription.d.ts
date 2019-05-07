/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOClassDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    registerClass<R = unknown>(): R;
    addInstanceVariableWithName_typeEncoding<R = boolean, P0 = NSString, P1 = NSString>(_addInstanceVariableWithName: P0, _typeEncoding: P1): R;
    addClassMethodWithSelector_typeEncoding_block<R = boolean, P0 = string, P1 = NSString, P2 = unknown>(_addClassMethodWithSelector: P0, _typeEncoding: P1, _block: P2): R;
    addClassMethodWithSelector_function<R = boolean, P0 = string, P1 = MOJavaScriptObject>(_addClassMethodWithSelector: P0, _function: P1): R;
    addInstanceMethodWithSelector_typeEncoding_block<R = boolean, P0 = string, P1 = NSString, P2 = unknown>(_addInstanceMethodWithSelector: P0, _typeEncoding: P1, _block: P2): R;
    addInstanceMethodWithSelector_function<R = boolean, P0 = string, P1 = MOJavaScriptObject>(_addInstanceMethodWithSelector: P0, _function: P1): R;
    addProperty<R = boolean, P0 = MOPropertyDescription>(_addProperty: P0): R;
    addProtocol<R = void, P0 = MOProtocolDescription>(_addProtocol: P0): R;
    name<R = NSString>(): R;
    descriptedClass<R = unknown>(): R;
    superclass<R = MOClassDescription>(): R;
    ancestors<R = NSArray>(): R;
    instanceVariables<R = NSArray>(): R;
    instanceVariablesWithAncestors<R = NSArray>(): R;
    classMethods<R = NSArray>(): R;
    classMethodsWithAncestors<R = NSArray>(): R;
    instanceMethods<R = NSArray>(): R;
    instanceMethodsWithAncestors<R = NSArray>(): R;
    properties<R = NSArray>(): R;
    propertiesWithAncestors<R = NSArray>(): R;
    protocols<R = NSArray>(): R;
    protocolsWithAncestors<R = NSArray>(): R;
  }
  namespace MOClassDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOClassDescription>(): R;
      new: <R = MOClassDescription>() => R;
      descriptionForClassWithName<R = MOClassDescription, P0 = NSString>(_descriptionForClassWithName: P0): R;
      descriptionForClass<R = MOClassDescription, P0 = unknown>(_descriptionForClass: P0): R;
      allocateDescriptionForClassWithName_superclass<R = MOClassDescription, P0 = NSString, P1 = unknown>(_allocateDescriptionForClassWithName: P0, _superclass: P1): R;
    }
  }
}

declare const MOClassDescription: cocoa.MOClassDescription.CLASS;
