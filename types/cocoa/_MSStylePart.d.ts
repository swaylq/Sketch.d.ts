/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStylePart<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSStylePart {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSStylePart>(): R;
      new: <R = _MSStylePart>() => R;
    }
  }
}
