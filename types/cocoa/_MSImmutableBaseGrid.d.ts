/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableBaseGrid<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutableBaseGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableBaseGrid>(): R;
      new: <R = _MSImmutableBaseGrid>() => R;
    }
  }
}
