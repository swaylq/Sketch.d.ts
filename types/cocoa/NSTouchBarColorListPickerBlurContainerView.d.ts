/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerBlurContainerView<T = any> extends cocoa.NSView, cocoa.NSTouchBarColorListPickerContainerViewProtocol {
    wantsLayer<R = boolean>(): R;
    _contentAffineTransform<R = cocoa.CGAffineTransform>(): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerBlurContainerView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSTouchBarColorListPickerContainerViewProtocol {
      alloc<R = NSTouchBarColorListPickerBlurContainerView>(): R;
      new: <R = NSTouchBarColorListPickerBlurContainerView>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerBlurContainerView: cocoa.classes.NSTouchBarColorListPickerBlurContainerView;
