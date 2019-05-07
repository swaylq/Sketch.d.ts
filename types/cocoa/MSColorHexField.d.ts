/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace MSColorHexField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSColorHexField>(): R;
      new: <R = MSColorHexField>() => R;
    }
  }
}

declare const MSColorHexField: cocoa.MSColorHexField.CLASS;
