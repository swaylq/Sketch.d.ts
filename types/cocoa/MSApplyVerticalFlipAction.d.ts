/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyVerticalFlipAction<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
    label<R = unknown>(): R;
    applyVerticalFlip<R = void, P0 = unknown>(_applyVerticalFlip: P0): R;
    isActive<R = boolean>(): R;
    areAllLayersFlipped<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace MSApplyVerticalFlipAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
      alloc<R = MSApplyVerticalFlipAction>(): R;
      new: <R = MSApplyVerticalFlipAction>() => R;
    }
  }
}

declare const MSApplyVerticalFlipAction: cocoa.MSApplyVerticalFlipAction.CLASS;
