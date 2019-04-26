/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSSliderAccessoryContainerProtocol {}
  namespace NSSliderTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSSliderAccessoryContainerProtocol {
      alloc<R = NSSliderTouchBarItem>(): R;
      new: <R = NSSliderTouchBarItem>() => R;
      keyPathsForValuesAffecting_hasStepBehaviorContext<R = unknown>(): R;
    }
  }
}

declare const NSSliderTouchBarItem: cocoa.NSSliderTouchBarItem.CLASS;
