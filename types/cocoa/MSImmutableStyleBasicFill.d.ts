/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBasicFill<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBasicFill {
    hasOpacity<R = boolean>(): R;
  }
  namespace MSImmutableStyleBasicFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBasicFill {
      alloc<R = MSImmutableStyleBasicFill>(): R;
      new: <R = MSImmutableStyleBasicFill>() => R;
    }
  }
}

declare const MSImmutableStyleBasicFill: cocoa.MSImmutableStyleBasicFill.CLASS;
