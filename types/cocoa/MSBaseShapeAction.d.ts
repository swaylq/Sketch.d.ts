/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    insertShape<R = unknown, P0 = unknown>(_insertShape: P0): R;
    prototypeLayer<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    recipeName<R = unknown>(): R;
  }
  namespace MSBaseShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
      alloc<R = MSBaseShapeAction>(): R;
      new: <R = MSBaseShapeAction>() => R;
      insertShapeLayer_identifier_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertShapeLayer: P0, _identifier: P1, _document: P2): R;
    }
  }
}

declare const MSBaseShapeAction: cocoa.MSBaseShapeAction.CLASS;
