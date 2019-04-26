/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonImageSource<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    hasImageWithAlpha<R = boolean>(): R;
    focusRingImageSize<R = CGSize>(): R;
    imageSize<R = CGSize>(): R;
    useHighlightEffectForState<R = boolean, P0 = NSButtonState>(_useHighlightEffectForState: P0): R;
    useDisabledEffectForState<R = boolean, P0 = NSButtonState>(_useDisabledEffectForState: P0): R;
    isOpaqueForState<R = boolean, P0 = NSButtonState>(_isOpaqueForState: P0): R;
    isBorderedForState<R = boolean, P0 = NSButtonState>(_isBorderedForState: P0): R;
    bezelStyleForState<R = number, P0 = NSButtonState>(_bezelStyleForState: P0): R;
    focusRingImageForState<R = unknown, P0 = NSButtonState>(_focusRingImageForState: P0): R;
    imageForState<R = unknown, P0 = NSButtonState>(_imageForState: P0): R;
    dealloc<R = void>(): R;
    _findButtonImageForState<R = unknown, P0 = NSButtonState>(__findButtonImageForState: P0): R;
    _archiveToFile<R = boolean, P0 = unknown>(__archiveToFile: P0): R;
    _initWithWidget<R = unknown, P0 = __CFString>(__initWithWidget: P0): R;
    _initWithName_propertyList<R = unknown, P0 = unknown, P1 = unknown>(__initWithName: P0, _propertyList: P1): R;
    _scanImages<R = void>(): R;
  }
  namespace NSButtonImageSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSButtonImageSource>(): R;
      new: <R = NSButtonImageSource>() => R;
      archiveButtonImageSourceWithName_toDirectory<R = boolean, P0 = unknown, P1 = unknown>(_archiveButtonImageSourceWithName: P0, _toDirectory: P1): R;
      buttonImageSourceWithName<R = unknown, P0 = unknown>(_buttonImageSourceWithName: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSButtonImageSource: cocoa.NSButtonImageSource.CLASS;
