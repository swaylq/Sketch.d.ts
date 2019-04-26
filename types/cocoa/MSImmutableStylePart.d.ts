/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStylePart<T0 = void, T1 = void, T2 = void> extends _MSImmutableStylePart, MSStylePartProtocol {
    isEnabled<R = boolean>(): R;
  }
  namespace MSImmutableStylePart {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStylePart, MSStylePartProtocol {
      alloc<R = MSImmutableStylePart>(): R;
      new: <R = MSImmutableStylePart>() => R;
    }
  }
}

declare const MSImmutableStylePart: cocoa.MSImmutableStylePart.CLASS;
