/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSRulerData<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    guides<R = NSArray>(): R;
    setGuides<R = void, P0 = NSArray>(_v: P0): R;
    base<R = number>(): R;
    setBase<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSRulerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSRulerData>(): R;
      new: <R = _MSRulerData>() => R;
    }
  }
}
