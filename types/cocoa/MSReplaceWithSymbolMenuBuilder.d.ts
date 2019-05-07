/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceWithSymbolMenuBuilder<T0 = void, T1 = void, T2 = void> extends MSMenuBuilder {
    updateMenuItem_forDocument<R = void, P0 = unknown, P1 = unknown>(_updateMenuItem: P0, _forDocument: P1): R;
  }
  namespace MSReplaceWithSymbolMenuBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMenuBuilder {
      alloc<R = MSReplaceWithSymbolMenuBuilder>(): R;
      new: <R = MSReplaceWithSymbolMenuBuilder>() => R;
    }
  }
}

declare const MSReplaceWithSymbolMenuBuilder: cocoa.MSReplaceWithSymbolMenuBuilder.CLASS;
