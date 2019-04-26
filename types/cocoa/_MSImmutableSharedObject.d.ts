/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedObject<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = MSImmutableModelObject>(): R;
    setValue<R = void, P0 = MSImmutableModelObject>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _MSImmutableSharedObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableSharedObject>(): R;
      new: <R = _MSImmutableSharedObject>() => R;
    }
  }
}
