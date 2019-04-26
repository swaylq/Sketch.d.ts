/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOMethodDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    selector<R = string>(): R;
    typeEncoding<R = NSString>(): R;
    // + MOMethodDescription(MOMethodDescription): 
    initWithSelector_typeEncoding<R = unknown, P0 = string, P1 = NSString>(_initWithSelector: P0, _typeEncoding: P1): R;
    // + MOMethodDescription(MOMethodDescription):
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
    typeEncoding<R = NSString>(): R;
    setTypeEncoding<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MOMethodDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOMethodDescription>(): R;
      new: <R = MOMethodDescription>() => R;
      methodWithSelector_typeEncoding<R = MOMethodDescription, P0 = string, P1 = NSString>(_methodWithSelector: P0, _typeEncoding: P1): R;
  
  }
  }
}

declare const MOMethodDescription: cocoa.MOMethodDescription.CLASS;
