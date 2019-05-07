/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlipVerticalAction<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    areAllSelectedLayersFlippedVertically<R = boolean>(): R;
    flipVertical<R = void, P0 = unknown>(_flipVertical: P0): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace MSFlipVerticalAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
      alloc<R = MSFlipVerticalAction>(): R;
      new: <R = MSFlipVerticalAction>() => R;
      flipVerticalHistoryTitle<R = unknown>(): R;
    }
  }
}

declare const MSFlipVerticalAction: cocoa.MSFlipVerticalAction.CLASS;
