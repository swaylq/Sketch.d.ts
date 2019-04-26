/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyboardShortcut<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    hash<R = number>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    _keyEquivalentIsUpperCase<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
    initWithKeyEquivalent_modifierMask<R = unknown, P0 = unknown, P1 = number>(_initWithKeyEquivalent: P0, _modifierMask: P1): R;
    modifierMask<R = number>(): R;
    keyEquivalent<R = NSString>(): R;
    preferencesEncoding<R = NSString>(): R;
    localizedModifierMaskDisplayName<R = NSString>(): R;
    localizedKeyEquivalentDisplayName<R = NSString>(): R;
    localizedDisplayName<R = NSString>(): R;
  }
  namespace NSKeyboardShortcut {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSKeyboardShortcut>(): R;
      new: <R = NSKeyboardShortcut>() => R;
      emptyShortcut<R = unknown>(): R;
      shortcutWithPreferencesEncoding<R = unknown, P0 = unknown>(_shortcutWithPreferencesEncoding: P0): R;
      shortcutWithKeyEquivalent_modifierMask<R = unknown, P0 = unknown, P1 = number>(_shortcutWithKeyEquivalent: P0, _modifierMask: P1): R;
    }
  }
}

declare const NSKeyboardShortcut: cocoa.NSKeyboardShortcut.CLASS;
