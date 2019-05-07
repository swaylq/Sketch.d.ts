/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionImageCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {}
  namespace MSWelcomeCollectionImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = MSWelcomeCollectionImageCell>(): R;
      new: <R = MSWelcomeCollectionImageCell>() => R;
    }
  }
}

declare const MSWelcomeCollectionImageCell: cocoa.MSWelcomeCollectionImageCell.CLASS;
