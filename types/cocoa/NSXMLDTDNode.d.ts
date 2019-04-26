/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLDTDNode<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
    _addToLibxml2TreeRepresentationWithDoc_dtd_context<R = void, P0 = _xmlDoc, P1 = _xmlDtd, P2 = _xmlValidCtxt>(__addToLibxml2TreeRepresentationWithDoc: P0, _dtd: P1, _context: P2): R;
    XPath<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    setStringValue<R = void, P0 = unknown>(_setStringValue: P0): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithXMLString<R = unknown, P0 = unknown>(_initWithXMLString: P0): R;
    notationName<R = NSString>(): R;
    setNotationName<R = void, P0 = NSString>(_v: P0): R;
    systemID<R = NSString>(): R;
    setSystemID<R = void, P0 = NSString>(_v: P0): R;
    publicID<R = NSString>(): R;
    setPublicID<R = void, P0 = NSString>(_v: P0): R;
    external<R = boolean>(): R;
    DTDKind<R = number>(): R;
    setDTDKind<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSXMLDTDNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXMLNode {
      alloc<R = NSXMLDTDNode>(): R;
      new: <R = NSXMLDTDNode>() => R;
    }
  }
}

declare const NSXMLDTDNode: cocoa.NSXMLDTDNode.CLASS;
