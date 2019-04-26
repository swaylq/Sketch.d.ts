/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableColorAnimation<T0 = void, T1 = void, T2 = void> extends CABasicAnimation {
    setToValue<R = void, P0 = unknown>(_setToValue: P0): R;
    setFromValue<R = void, P0 = unknown>(_setFromValue: P0): R;
  }
  namespace _NSTableColorAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CABasicAnimation {}
  }
}
