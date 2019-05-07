/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedObjectContainer<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    objects<R = NSArray>(): R;
    setObjects<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _MSImmutableSharedObjectContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableSharedObjectContainer>(): R;
      new: <R = _MSImmutableSharedObjectContainer>() => R;
    }
  }
}
