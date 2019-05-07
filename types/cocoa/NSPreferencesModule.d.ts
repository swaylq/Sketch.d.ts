/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferencesModule<T0 = void, T1 = void, T2 = void> extends NSObject, NSPreferencesModuleProtocol {
    isResizable<R = boolean>(): R;
    setMinSize<R = void, P0 = CGSize>(_setMinSize: P0): R;
    minSize<R = CGSize>(): R;
    titleForIdentifier<R = unknown, P0 = unknown>(_titleForIdentifier: P0): R;
    preferencesNibName<R = unknown>(): R;
    dealloc<R = void>(): R;
    set_preferencesView<R = void, P0 = unknown>(_set_preferencesView: P0): R;
    preferencesView<R = NSBox>(): R;
    setPreferencesView<R = void, P0 = NSBox>(_v: P0): R;
  }
  namespace NSPreferencesModule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSPreferencesModuleProtocol {
      alloc<R = NSPreferencesModule>(): R;
      new: <R = NSPreferencesModule>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreferencesModule: cocoa.NSPreferencesModule.CLASS;
