/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClosePathAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    closePath<R = void, P0 = unknown>(_closePath: P0): R;
    changeContext<R = unknown>(): R;
    enumerateSelectedPathLayersUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateSelectedPathLayersUsingBlock: P0): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSClosePathAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSClosePathAction>(): R;
      new: <R = MSClosePathAction>() => R;
    }
  }
}

declare const MSClosePathAction: cocoa.MSClosePathAction.CLASS;
