/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    _bulletCharacter<R = number>(): R;
    _setBulletCharacter<R = void, P0 = number>(__setBulletCharacter: P0): R;
    _commonSecureTextFieldInit<R = void, P0 = unknown>(__commonSecureTextFieldInit: P0): R;
  }
  namespace NSSecureTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSSecureTextField>(): R;
      new: <R = NSSecureTextField>() => R;
    }
  }
}

declare const NSSecureTextField: cocoa.NSSecureTextField.CLASS;
