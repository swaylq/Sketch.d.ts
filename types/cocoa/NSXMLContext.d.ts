/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLContext<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSXMLContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXMLContext>(): R;
      new: <R = NSXMLContext>() => R;
      _initValueTransformers<R = void>(): R;
      _initSingleAttributes<R = void>(): R;
      _initEmptyHTMLNames<R = void>(): R;
      _initDefaultNamespaces<R = void>(): R;
      normalizeWhitespace<R = unknown, P0 = unknown>(_normalizeWhitespace: P0): R;
      stringForObjectValue<R = unknown, P0 = unknown>(_stringForObjectValue: P0): R;
      isSingleAttribute<R = boolean, P0 = unknown>(_isSingleAttribute: P0): R;
      isEmptyHTMLElement<R = boolean, P0 = unknown>(_isEmptyHTMLElement: P0): R;
      defaultNamespaceForURI<R = unknown, P0 = unknown>(_defaultNamespaceForURI: P0): R;
      defaultNamespaceForPrefix<R = unknown, P0 = unknown>(_defaultNamespaceForPrefix: P0): R;
    }
  }
}

declare const NSXMLContext: cocoa.NSXMLContext.CLASS;
