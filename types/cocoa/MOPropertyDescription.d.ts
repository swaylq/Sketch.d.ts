/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOPropertyDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    typeEncoding<R = NSString>(): R;
    setTypeEncoding<R = void, P0 = NSString>(_v: P0): R;
    ivarName<R = NSString>(): R;
    setIvarName<R = void, P0 = NSString>(_v: P0): R;
    getterSelector<R = string>(): R;
    setGetterSelector<R = void, P0 = string>(_v: P0): R;
    setterSelector<R = string>(): R;
    setSetterSelector<R = void, P0 = string>(_v: P0): R;
    ownershipRule<R = MOObjCOwnershipRule>(): R;
    setOwnershipRule<R = void, P0 = MOObjCOwnershipRule>(_v: P0): R;
    dynamic<R = boolean>(): R;
    setDynamic<R = void, P0 = boolean>(_v: P0): R;
    nonAtomic<R = boolean>(): R;
    setNonAtomic<R = void, P0 = boolean>(_v: P0): R;
    readOnly<R = boolean>(): R;
    setReadOnly<R = void, P0 = boolean>(_v: P0): R;
    weak<R = boolean>(): R;
    setWeak<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MOPropertyDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOPropertyDescription>(): R;
      new: <R = MOPropertyDescription>() => R;
    }
  }
}

declare const MOPropertyDescription: cocoa.MOPropertyDescription.CLASS;
