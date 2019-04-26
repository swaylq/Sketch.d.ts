/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSWelcomeCollectionTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSWelcomeCollectionTextField>(): R;
      new: <R = MSWelcomeCollectionTextField>() => R;
    }
  }
}

declare const MSWelcomeCollectionTextField: cocoa.MSWelcomeCollectionTextField.CLASS;
