/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyCSSAttributesAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copyCSSAttributes<R = void, P0 = unknown>(_copyCSSAttributes: P0): R;
  }
  namespace MSCopyCSSAttributesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCopyCSSAttributesAction>(): R;
      new: <R = MSCopyCSSAttributesAction>() => R;
    }
  }
}

declare const MSCopyCSSAttributesAction: cocoa.MSCopyCSSAttributesAction.CLASS;
