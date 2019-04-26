/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemAppearanceProxy<T0 = void, T1 = void, T2 = void> extends NSObject, NSAppearanceCustomizationInternalProtocol, NSAppearanceCustomizationProtocol {
    _menuBarAppearanceChanged<R = void, P0 = unknown>(__menuBarAppearanceChanged: P0): R;
    _increaseContrastChanged<R = void, P0 = unknown>(__increaseContrastChanged: P0): R;
    _controlTintChanged<R = void, P0 = unknown>(__controlTintChanged: P0): R;
    _menuBarAppearanceDidChange<R = void>(): R;
    _systemAppearanceDidChange<R = void>(): R;
    dealloc<R = void>(): R;
    _kitAppearance<R = unknown>(): R;
    menuBarProxy<R = NSAppearanceCustomization>(): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    effectiveAppearance<R = NSAppearance>(): R;
    _effectiveAppearanceParent<R = NSAppearanceCustomization>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSystemAppearanceProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAppearanceCustomizationInternalProtocol, NSAppearanceCustomizationProtocol {
      alloc<R = NSSystemAppearanceProxy>(): R;
      new: <R = NSSystemAppearanceProxy>() => R;
      keyPathsForValuesAffectingEffectiveAppearance<R = unknown>(): R;
      systemProxy<R = unknown>(): R;
    }
  }
}

declare const NSSystemAppearanceProxy: cocoa.NSSystemAppearanceProxy.CLASS;
