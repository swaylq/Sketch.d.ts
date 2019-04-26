/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelPrefixWatchingTagSetter<T0 = void, T1 = void, T2 = void> extends _NSSavePanelTagSetter {
    _initWithDirectoryURL_useSecurityScopedURL_prefix_tags<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown>(__initWithDirectoryURL: P0, _useSecurityScopedURL: P1, _prefix: P2, _tags: P3): R;
  }
  namespace _NSSavePanelPrefixWatchingTagSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSavePanelTagSetter {
      alloc<R = _NSSavePanelPrefixWatchingTagSetter>(): R;
      new: <R = _NSSavePanelPrefixWatchingTagSetter>() => R;
    }
  }
}
