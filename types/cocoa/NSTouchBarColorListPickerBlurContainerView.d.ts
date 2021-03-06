/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerBlurContainerView<T0 = void, T1 = void, T2 = void> extends NSView, NSTouchBarColorListPickerContainerViewProtocol {
    wantsLayer<R = boolean>(): R;
    _contentAffineTransform<R = CGAffineTransform>(): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarColorListPickerBlurContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSTouchBarColorListPickerContainerViewProtocol {
      alloc<R = NSTouchBarColorListPickerBlurContainerView>(): R;
      new: <R = NSTouchBarColorListPickerBlurContainerView>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerBlurContainerView: cocoa.NSTouchBarColorListPickerBlurContainerView.CLASS;
