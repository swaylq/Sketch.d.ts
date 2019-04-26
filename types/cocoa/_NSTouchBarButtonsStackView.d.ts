/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarButtonsStackView<T0 = void, T1 = void, T2 = void> extends NSStackView, _NSTouchBarItemLayoutWrapperProtocol {}
  namespace _NSTouchBarButtonsStackView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStackView, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = _NSTouchBarButtonsStackView>(): R;
      new: <R = _NSTouchBarButtonsStackView>() => R;
      makePopoverItemWithIdentifier_popoverTouchBar_title_image_preferredWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_makePopoverItemWithIdentifier: P0, _popoverTouchBar: P1, _title: P2, _image: P3, _preferredWidth: P4): R;
    }
  }
}
