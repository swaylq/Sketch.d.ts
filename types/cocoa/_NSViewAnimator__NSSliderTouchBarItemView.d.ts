/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator__NSSliderTouchBarItemView<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator, CAAnimationDelegateProtocol {
    stopAndCleanupCollapseAnimation<R = void>(): R;
    setCollapsed<R = void, P0 = boolean>(_setCollapsed: P0): R;
    sliderItemViewTarget<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    valueAccessoryWidth<R = number>(): R;
    setValueAccessoryWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSViewAnimator__NSSliderTouchBarItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator, CAAnimationDelegateProtocol {}
  }
}
