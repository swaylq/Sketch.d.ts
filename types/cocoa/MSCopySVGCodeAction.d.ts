/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopySVGCodeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    shouldIncludeBackgroundColorFromLayers<R = boolean, P0 = unknown>(_shouldIncludeBackgroundColorFromLayers: P0): R;
    validate<R = boolean>(): R;
    copySVG<R = void, P0 = unknown>(_copySVG: P0): R;
  }
  namespace MSCopySVGCodeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCopySVGCodeAction>(): R;
      new: <R = MSCopySVGCodeAction>() => R;
    }
  }
}

declare const MSCopySVGCodeAction: cocoa.MSCopySVGCodeAction.CLASS;
