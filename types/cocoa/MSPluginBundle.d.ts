/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginBundle<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    urlForResourceNamed<R = unknown, P0 = unknown>(_urlForResourceNamed: P0): R;
    writeToURL<R = boolean, P0 = unknown>(_writeToURL: P0): R;
    metadata<R = unknown>(): R;
    initWithName_identifier_commands_icon<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithName: P0, _identifier: P1, _commands: P2, _icon: P3): R;
    logErrorString<R = void, P0 = unknown>(_logErrorString: P0): R;
    initPluginBundleWithURL<R = unknown, P0 = unknown>(_initPluginBundleWithURL: P0): R;
    iconInfo<R = MSPluginBundleIconInfo>(): R;
    setIconInfo<R = void, P0 = MSPluginBundleIconInfo>(_v: P0): R;
    disableCocoaScriptPreprocessor<R = boolean>(): R;
    setDisableCocoaScriptPreprocessor<R = void, P0 = boolean>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    maximumCompatibleVersion<R = NSString>(): R;
    compatibleVersion<R = NSString>(): R;
    appcastURL<R = NSURL>(): R;
    authorEmail<R = NSString>(): R;
    author<R = NSString>(): R;
    homepageURL<R = NSURL>(): R;
    menuDescription<R = NSDictionary>(): R;
    setMenuDescription<R = void, P0 = NSDictionary>(_v: P0): R;
    suppliesData<R = boolean>(): R;
    pluginDescription<R = NSString>(): R;
    identifier<R = NSString>(): R;
    name<R = NSString>(): R;
    version<R = NSString>(): R;
    commands<R = NSDictionary>(): R;
    url<R = NSURL>(): R;
    versionedIdentifier<R = NSString>(): R;
    alertIcon<R = NSImage>(): R;
    icon<R = NSImage>(): R;
    compatible<R = boolean>(): R;
  }
  namespace MSPluginBundle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginBundle>(): R;
      new: <R = MSPluginBundle>() => R;
      scriptDefaultTitle<R = unknown>(): R;
      commandsFromArray_sketchPluginURL_pluginBundle<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_commandsFromArray: P0, _sketchPluginURL: P1, _pluginBundle: P2): R;
      pluginBundleWithURL<R = unknown, P0 = unknown>(_pluginBundleWithURL: P0): R;
    }
  }
}

declare const MSPluginBundle: cocoa.MSPluginBundle.CLASS;
