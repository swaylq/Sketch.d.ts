/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOInstanceVariableDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    name<R = NSString>(): R;
    typeEncoding<R = NSString>(): R;
    // + MOInstanceVariableDescription(MOInstanceVariableDescription): 
    initWithName_typeEncoding<R = unknown, P0 = NSString, P1 = NSString>(_initWithName: P0, _typeEncoding: P1): R;
    // + MOInstanceVariableDescription(MOInstanceVariableDescription):
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    typeEncoding<R = NSString>(): R;
    setTypeEncoding<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MOInstanceVariableDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOInstanceVariableDescription>(): R;
      new: <R = MOInstanceVariableDescription>() => R;
      instanceVariableWithName_typeEncoding<R = MOInstanceVariableDescription, P0 = NSString, P1 = NSString>(_instanceVariableWithName: P0, _typeEncoding: P1): R;
  
  }
  }
}

declare const MOInstanceVariableDescription: cocoa.MOInstanceVariableDescription.CLASS;
