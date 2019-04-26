/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginCommandSpecifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    isEqualToCommandSpecifier<R = boolean, P0 = unknown>(_isEqualToCommandSpecifier: P0): R;
    hash<R = number>(): R;
    stringValue<R = unknown>(): R;
    initWithPluginBundleIdentifier_commandIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_initWithPluginBundleIdentifier: P0, _commandIdentifier: P1): R;
    commandIdentifier<R = NSString>(): R;
    pluginBundleIdentifier<R = NSString>(): R;
  }
  namespace MSPluginCommandSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSPluginCommandSpecifier>(): R;
      new: <R = MSPluginCommandSpecifier>() => R;
    }
  }
}

declare const MSPluginCommandSpecifier: cocoa.MSPluginCommandSpecifier.CLASS;
