/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStylePart<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutableStylePart {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableStylePart>(): R;
      new: <R = _MSImmutableStylePart>() => R;
    }
  }
}
