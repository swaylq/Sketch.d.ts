/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimplePreferencesModule<T0 = void, T1 = void, T2 = void> extends NSPreferencesModule {
    toolbarIcon<R = NSImage>(): R;
    setToolbarIcon<R = void, P0 = NSImage>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    rootView<R = NSBox>(): R;
    setRootView<R = void, P0 = NSBox>(_v: P0): R;
  }
  namespace NSSimplePreferencesModule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPreferencesModule {
      alloc<R = NSSimplePreferencesModule>(): R;
      new: <R = NSSimplePreferencesModule>() => R;
    }
  }
}

declare const NSSimplePreferencesModule: cocoa.NSSimplePreferencesModule.CLASS;
