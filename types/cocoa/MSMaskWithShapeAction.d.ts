/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMaskWithShapeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    maskWithShape<R = void, P0 = unknown>(_maskWithShape: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSMaskWithShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSMaskWithShapeAction>(): R;
      new: <R = MSMaskWithShapeAction>() => R;
    }
  }
}

declare const MSMaskWithShapeAction: cocoa.MSMaskWithShapeAction.CLASS;
