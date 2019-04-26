/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleAttributeDictionaryEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithAttributeDictionary<R = unknown, P0 = unknown>(_initWithAttributeDictionary: P0): R;
  }
  namespace NSSimpleAttributeDictionaryEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const NSSimpleAttributeDictionaryEnumerator: cocoa.NSSimpleAttributeDictionaryEnumerator.CLASS;
