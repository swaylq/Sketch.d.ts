/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderTouchBarItemView<T0 = void, T1 = void, T2 = void> extends NSView, NSSliderAccessoryContainerProtocol, NSUserInterfaceCompressionProtocol {}
  namespace _NSSliderTouchBarItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSSliderAccessoryContainerProtocol, NSUserInterfaceCompressionProtocol {
      alloc<R = _NSSliderTouchBarItemView>(): R;
      new: <R = _NSSliderTouchBarItemView>() => R;
      automaticallyNotifiesObserversOfCollapsed<R = boolean>(): R;
    }
  }
}
