/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableRulerData<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    guides<R = NSArray>(): R;
    setGuides<R = void, P0 = NSArray>(_v: P0): R;
    base<R = number>(): R;
    setBase<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableRulerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableRulerData>(): R;
      new: <R = _MSImmutableRulerData>() => R;
    }
  }
}
