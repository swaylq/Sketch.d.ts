/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertImageAction<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    groupForInserting<R = unknown>(): R;
    importImagesFromURLs<R = void, P0 = unknown>(_importImagesFromURLs: P0): R;
    preferredMenuAction<R = string>(): R;
    insertImage<R = void, P0 = unknown>(_insertImage: P0): R;
  }
  namespace MSInsertImageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
      alloc<R = MSInsertImageAction>(): R;
      new: <R = MSInsertImageAction>() => R;
    }
  }
}

declare const MSInsertImageAction: cocoa.MSInsertImageAction.CLASS;
