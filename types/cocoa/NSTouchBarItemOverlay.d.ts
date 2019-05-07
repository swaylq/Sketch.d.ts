/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemOverlay<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarPressAndHoldTransposerDelegateProtocol {}
  namespace NSTouchBarItemOverlay {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarItemOverlay>(): R;
      new: <R = NSTouchBarItemOverlay>() => R;
      runHidePopoverAnimationWithTouchBarView_colorView_closeButton_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_runHidePopoverAnimationWithTouchBarView: P0, _colorView: P1, _closeButton: P2, _completionHandler: P3): R;
    }
  }
}

declare const NSTouchBarItemOverlay: cocoa.NSTouchBarItemOverlay.CLASS;
