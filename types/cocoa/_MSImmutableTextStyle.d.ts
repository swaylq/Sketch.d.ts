/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableTextStyle<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    verticalAlignment<R = number>(): R;
    setVerticalAlignment<R = void, P0 = number>(_v: P0): R;
    encodedAttributes<R = NSDictionary>(): R;
    setEncodedAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace _MSImmutableTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableTextStyle>(): R;
      new: <R = _MSImmutableTextStyle>() => R;
    }
  }
}
