/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNamedNode<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    _prefixIndex<R = number>(): R;
    _setPrefix<R = boolean, P0 = unknown>(__setPrefix: P0): R;
    prefix<R = unknown>(): R;
    localName<R = unknown>(): R;
    _resolveName<R = void>(): R;
    _nameIsEqualToNameOfNode<R = boolean, P0 = unknown>(__nameIsEqualToNameOfNode: P0): R;
    _caseSensitiveCompare<R = number, P0 = unknown>(__caseSensitiveCompare: P0): R;
    XPath<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    URI<R = unknown>(): R;
    setURI<R = void, P0 = unknown>(_setURI: P0): R;
    _setLocalName<R = void, P0 = unknown>(__setLocalName: P0): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithKind_name_stringValue_URI<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithKind: P0, _name: P1, _stringValue: P2, _URI: P3): R;
    initWithKind_localName_stringValue_URI<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithKind: P0, _localName: P1, _stringValue: P2, _URI: P3): R;
    initWithKind_name_stringValue<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithKind: P0, _name: P1, _stringValue: P2): R;
  }
  namespace NSXMLNamedNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLNamedNode>(): R;
      new: <R = NSXMLNamedNode>() => R;
    }
  }
}

declare const NSXMLNamedNode: cocoa.NSXMLNamedNode.CLASS;
