/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyBindings<T0 = void, T1 = void, T2 = void> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    defaultKeyBindingsPath<R = unknown>(): R;
    userKeyBindingsPath<R = unknown>(): R;
    init<R = unknown>(): R;
    shortcutMap<R = NSDictionary>(): R;
  }
  namespace MSKeyBindings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton {}
  }
}

declare const MSKeyBindings: cocoa.MSKeyBindings.CLASS;
