/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    textColor<R = unknown>(): R;
  }
  namespace MSWelcomeCollectionTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSWelcomeCollectionTextFieldCell>(): R;
      new: <R = MSWelcomeCollectionTextFieldCell>() => R;
    }
  }
}

declare const MSWelcomeCollectionTextFieldCell: cocoa.MSWelcomeCollectionTextFieldCell.CLASS;
