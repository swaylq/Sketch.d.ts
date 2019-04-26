/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsStackItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    applyParameters<R = void, P0 = unknown>(_applyParameters: P0): R;
    _setupLayerAsPlaceholder<R = void, P0 = boolean>(__setupLayerAsPlaceholder: P0): R;
    documentFailedToLoad<R = boolean>(): R;
    setDocumentFailedToLoad<R = void, P0 = boolean>(_v: P0): R;
    hasWindowVisible<R = boolean>(): R;
    setHasWindowVisible<R = void, P0 = boolean>(_v: P0): R;
    hasValidSnapshot<R = boolean>(): R;
    setHasValidSnapshot<R = void, P0 = boolean>(_v: P0): R;
    layer<R = NSDocumentRevisionsStackLayer>(): R;
    setLayer<R = void, P0 = NSDocumentRevisionsStackLayer>(_v: P0): R;
    hasLocalData<R = boolean>(): R;
    setHasLocalData<R = void, P0 = boolean>(_v: P0): R;
    version<R = NSFileVersion>(): R;
    setVersion<R = void, P0 = NSFileVersion>(_v: P0): R;
    placeholderView<R = NSDocumentRevisionsPlaceholderView>(): R;
    setPlaceholderView<R = void, P0 = NSDocumentRevisionsPlaceholderView>(_v: P0): R;
  }
  namespace NSDocumentRevisionsStackItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentRevisionsStackItem>(): R;
      new: <R = NSDocumentRevisionsStackItem>() => R;
      itemWithVersion<R = unknown, P0 = unknown>(_itemWithVersion: P0): R;
    }
  }
}

declare const NSDocumentRevisionsStackItem: cocoa.NSDocumentRevisionsStackItem.CLASS;
