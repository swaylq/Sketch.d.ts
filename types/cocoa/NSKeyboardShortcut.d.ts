/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyboardShortcut<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    hash<R = number>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    _keyEquivalentIsUpperCase<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
    initWithKeyEquivalent_modifierMask<R = unknown, P0 = unknown, P1 = number>(_initWithKeyEquivalent: P0, _modifierMask: P1): R;
    modifierMask<R = number>(): R;
    keyEquivalent<R = cocoa.NSString>(): R;
    preferencesEncoding<R = cocoa.NSString>(): R;
    localizedModifierMaskDisplayName<R = cocoa.NSString>(): R;
    localizedKeyEquivalentDisplayName<R = cocoa.NSString>(): R;
    localizedDisplayName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSKeyboardShortcut<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSKeyboardShortcut>(): R;
      new: <R = NSKeyboardShortcut>() => R;
      emptyShortcut<R = unknown>(): R;
      shortcutWithPreferencesEncoding<R = unknown, P0 = unknown>(_shortcutWithPreferencesEncoding: P0): R;
      shortcutWithKeyEquivalent_modifierMask<R = unknown, P0 = unknown, P1 = number>(_shortcutWithKeyEquivalent: P0, _modifierMask: P1): R;
    }
  }
}

declare const NSKeyboardShortcut: cocoa.classes.NSKeyboardShortcut;
