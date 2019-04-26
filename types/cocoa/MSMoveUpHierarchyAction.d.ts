/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveUpHierarchyAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveUpHierarchy<R = void, P0 = unknown>(_moveUpHierarchy: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSMoveUpHierarchyAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSMoveUpHierarchyAction>(): R;
      new: <R = MSMoveUpHierarchyAction>() => R;
    }
  }
}

declare const MSMoveUpHierarchyAction: cocoa.MSMoveUpHierarchyAction.CLASS;
