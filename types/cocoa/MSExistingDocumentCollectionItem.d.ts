/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExistingDocumentCollectionItem<T0 = void, T1 = void, T2 = void> extends MSWelcomeCollectionItem {
    providesPreviewImage<R = boolean>(): R;
    title<R = unknown>(): R;
    initWithController_URL<R = unknown, P0 = unknown, P1 = unknown>(_initWithController: P0, _URL: P1): R;
    URL<R = NSURL>(): R;
  }
  namespace MSExistingDocumentCollectionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSWelcomeCollectionItem {
      alloc<R = MSExistingDocumentCollectionItem>(): R;
      new: <R = MSExistingDocumentCollectionItem>() => R;
    }
  }
}

declare const MSExistingDocumentCollectionItem: cocoa.MSExistingDocumentCollectionItem.CLASS;
