/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollectionItemNameFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace MSCollectionItemNameFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSCollectionItemNameFieldCell>(): R;
      new: <R = MSCollectionItemNameFieldCell>() => R;
    }
  }
}

declare const MSCollectionItemNameFieldCell: cocoa.MSCollectionItemNameFieldCell.CLASS;
