/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreferencesPluginInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pluginManager<R = unknown>(): R;
    latestPluginUpdate<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    pluginBundle<R = MSPluginBundle>(): R;
    setPluginBundle<R = void, P0 = MSPluginBundle>(_v: P0): R;
    isUpdating<R = boolean>(): R;
    setIsUpdating<R = void, P0 = boolean>(_v: P0): R;
    updateVersionString<R = NSString>(): R;
    isCompatible<R = boolean>(): R;
    updateAvailable<R = boolean>(): R;
    warningString<R = NSString>(): R;
    suppliesData<R = boolean>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    pluginDescription<R = NSString>(): R;
    namePlusAuthor<R = NSString>(): R;
    homepage<R = NSURL>(): R;
    version<R = NSString>(): R;
    enableCheckboxTitle<R = NSString>(): R;
    icon<R = NSImage>(): R;
    attributedTitle<R = NSAttributedString>(): R;
  }
  namespace MSPreferencesPluginInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPreferencesPluginInfo>(): R;
      new: <R = MSPreferencesPluginInfo>() => R;
      pluginInfoWithName<R = unknown, P0 = unknown>(_pluginInfoWithName: P0): R;
      pluginInfoWithPluginBundle<R = unknown, P0 = unknown>(_pluginInfoWithPluginBundle: P0): R;
    }
  }
}

declare const MSPreferencesPluginInfo: cocoa.MSPreferencesPluginInfo.CLASS;
