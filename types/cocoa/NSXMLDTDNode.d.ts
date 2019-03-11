/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLDTDNode<T = any> extends cocoa.NSXMLNode {
    _addToLibxml2TreeRepresentationWithDoc_dtd_context<R = void, P0 = cocoa._xmlDoc, P1 = cocoa._xmlDtd, P2 = cocoa._xmlValidCtxt>(__addToLibxml2TreeRepresentationWithDoc: P0, _dtd: P1, _context: P2): R;
    XPath<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    setStringValue<R = void, P0 = unknown>(_setStringValue: P0): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    initWithXMLString<R = unknown, P0 = unknown>(_initWithXMLString: P0): R;
    notationName<R = cocoa.NSString>(): R;
    setNotationName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    systemID<R = cocoa.NSString>(): R;
    setSystemID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    publicID<R = cocoa.NSString>(): R;
    setPublicID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    external<R = boolean>(): R;
    DTDKind<R = number>(): R;
    setDTDKind<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSXMLDTDNode<T = any> extends cocoa.classes.NSXMLNode {
      alloc<R = NSXMLDTDNode>(): R;
      new: <R = NSXMLDTDNode>() => R;
    }
  }
}

declare const NSXMLDTDNode: cocoa.classes.NSXMLDTDNode;
