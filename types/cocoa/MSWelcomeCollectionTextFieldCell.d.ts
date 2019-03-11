/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionTextFieldCell<T = any> extends cocoa.NSTextFieldCell {
    textColor<R = unknown>(): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = MSWelcomeCollectionTextFieldCell>(): R;
      new: <R = MSWelcomeCollectionTextFieldCell>() => R;
    }
  }
}

declare const MSWelcomeCollectionTextFieldCell: cocoa.classes.MSWelcomeCollectionTextFieldCell;
