/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedTextStyleAction<T0 = void, T1 = void, T2 = void> extends MSApplySharedStyleAction {
    applySharedTextStyle<R = void, P0 = unknown>(_applySharedTextStyle: P0): R;
  }
  namespace MSApplySharedTextStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSApplySharedStyleAction {
      alloc<R = MSApplySharedTextStyleAction>(): R;
      new: <R = MSApplySharedTextStyleAction>() => R;
    }
  }
}

declare const MSApplySharedTextStyleAction: cocoa.MSApplySharedTextStyleAction.CLASS;
