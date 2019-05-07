/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlipHorizontalAction<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    areAllSelectedLayersFlippedHorizontally<R = boolean>(): R;
    flipHorizontal<R = void, P0 = unknown>(_flipHorizontal: P0): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace MSFlipHorizontalAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseFlipAction {
      alloc<R = MSFlipHorizontalAction>(): R;
      new: <R = MSFlipHorizontalAction>() => R;
      flipHorizontalHistoryTitle<R = unknown>(): R;
    }
  }
}

declare const MSFlipHorizontalAction: cocoa.MSFlipHorizontalAction.CLASS;
