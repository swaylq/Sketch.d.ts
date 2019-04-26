/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewDocumentCollectionItem<T0 = void, T1 = void, T2 = void> extends MSWelcomeCollectionItem {
    providesPreviewImage<R = boolean>(): R;
    title<R = unknown>(): R;
    placeholderImage<R = unknown>(): R;
  }
  namespace MSNewDocumentCollectionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSWelcomeCollectionItem {
      alloc<R = MSNewDocumentCollectionItem>(): R;
      new: <R = MSNewDocumentCollectionItem>() => R;
    }
  }
}

declare const MSNewDocumentCollectionItem: cocoa.MSNewDocumentCollectionItem.CLASS;
